// components/AuthProvider.tsx
"use client";

// IMPORT DEPENDENCIES
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * ================================
 * CONSTANTS
 * ================================
 */


// Key untuk menyimpan token auth di sessionStorage
const TOKEN_KEY = "demo_auth_token";


// Key untuk menyimpan timestamp aktivitas terakhir user
const LAST_ACTIVITY_KEY = "demo_last_activity_ms";


// Auto logout setelah idle 15 menit
const IDLE_MS = 15 * 60 * 1000;

/**
 * ================================
 * TYPES
 * ================================
 */

// Struktur data user dari userReviwe.ts backend
type User = {
  username: string;
  role: string;
};

// Struktur data AuthContext
type AuthContextValue = {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  logout: () => void;
};

/**
 * ================================
 * CONTEXT
 * ================================
 */

// Membuat AuthContext secara global
const AuthContext = createContext<AuthContextValue | undefined>(undefined);


/**
 * ================================
 * AUTH PROVIDER
 * ================================
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter(); //  redirect halaman
  const pathname = usePathname(); //  cek path aktif

  // State utama auth
  const [token, setToken] = useState<string | null>(null); // JWT token
  const [user, setUser] = useState<User | null>(null); // Data user
  const [isLoading, setIsLoading] = useState(true); // Status loading auth

// LOGOUT FUNCTION
  const logout = useCallback(async () => {
    try {
      // Inform backend untuk logout (optional)
      await fetch("/api/dashboard/auth/logout", { method: "POST" });
    } catch {
      // Jika gagal, abaikan (client tetap logout)
    }

    // Hapus data auth dari sessionStorage
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(LAST_ACTIVITY_KEY);

    // Reset state
    setToken(null);
    setUser(null);

    // Redirect ke halaman login
    if (pathname !== "/login-admin") {
      router.replace("/login-admin");
    }
  }, [pathname, router]);

  /**
   * ================================
   * AUTH GUARD & LOAD USER
   * ================================
   */
  useEffect(() => {
    // Ambil token dari sessionStorage
    const t = sessionStorage.getItem(TOKEN_KEY);
    setToken(t);

    // Jika token tidak ada → redirect login
    if (!t) {
      setIsLoading(false);
      if (pathname !== "/login-admin") {
        router.replace("/login-admin");
      }
      return;
    }

    // Jika token ada → fetch user
    (async () => {
      try {
        const res = await fetch("/api/dashboard/auth/me", {
          headers: {
            Authorization: `Bearer ${t}`,
          },
        });

        // Token invalid / expired
        if (!res.ok) throw new Error("Unauthorized");

        const data = (await res.json()) as { user: User };
        setUser(data.user);
      } catch {
        // Error → logout paksa
        await logout();
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * ================================
   * AUTO LOGOUT (IDLE TIMEOUT)
   * ================================
   */
  useEffect(() => {
    // Jika belum login → jangan pasang idle listener
    if (!token) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    // Reset timer logout
    const scheduleLogout = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        logout();
      }, IDLE_MS);
    };

    // Tandai aktivitas user
    const markActivity = () => {
      sessionStorage.setItem(LAST_ACTIVITY_KEY, String(Date.now()));
      scheduleLogout();
    };

    // Inisialisasi waktu aktivitas pertama
    if (!sessionStorage.getItem(LAST_ACTIVITY_KEY)) {
      sessionStorage.setItem(LAST_ACTIVITY_KEY, String(Date.now()));
    }

    scheduleLogout();

    // Event yang dianggap sebagai aktivitas user
    const events: (keyof WindowEventMap)[] = [
      "mousemove",
      "mousedown",
      "keydown",
      "scroll",
      "touchstart",
    ];

    // Pasang event listener
    events.forEach((event) =>
      window.addEventListener(event, markActivity, { passive: true })
    );

    // Cek idle saat tab aktif kembali
    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") return;

      const lastActivity = Number(
        sessionStorage.getItem(LAST_ACTIVITY_KEY) || 0
      );

      if (lastActivity && Date.now() - lastActivity > IDLE_MS) {
        logout();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, markActivity)
      );
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [token, logout]);

  /**
   * ================================
   * CONTEXT VALUE
   * ================================
   */
  const value = useMemo(
    () => ({
      token,
      user,
      isLoading,
      logout,
    }),
    [token, user, isLoading, logout]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * ================================
 * CUSTOM HOOK
 * ================================
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth harus digunakan di dalam <AuthProvider />");
  }

  return context;
}

/**
 * ================================
 * EXPORT STORAGE KEYS
 * ================================
 */
export const authStorageKeys = {
  TOKEN_KEY,
  LAST_ACTIVITY_KEY,
};
