// components/AuthProvider.tsx
"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const TOKEN_KEY = "demo_auth_token";
const LAST_ACTIVITY_KEY = "demo_last_activity_ms";
const IDLE_MS = 15 * 60 * 1000;

type User = { username: string; role: string };

type AuthContextValue = {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/dashboard/auth/logout", { method: "POST" });
    } catch {
      // no-op
    }

    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(LAST_ACTIVITY_KEY);
    setToken(null);
    setUser(null);

    if (pathname !== "/login-admin") router.replace("/login-admin");
  }, [pathname, router]);

  // Guard + load user
  useEffect(() => {
    const t = sessionStorage.getItem(TOKEN_KEY);
    setToken(t);

    if (!t) {
      setIsLoading(false);
      if (pathname !== "/login-admin") router.replace("/login-admin");
      return;
    }

    (async () => {
      try {
        const res = await fetch("/api/dashboard/auth/me", {
          headers: { Authorization: `Bearer ${t}` },
        });
        if (!res.ok) throw new Error("unauthorized");
        const data = (await res.json()) as { user: User };
        setUser(data.user);
      } catch {
        await logout();
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-logout idle 15 menit
  useEffect(() => {
    if (!token) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const schedule = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        logout();
      }, IDLE_MS);
    };

    const markActivity = () => {
      sessionStorage.setItem(LAST_ACTIVITY_KEY, String(Date.now()));
      schedule();
    };

    // Inisialisasi
    if (!sessionStorage.getItem(LAST_ACTIVITY_KEY)) {
      sessionStorage.setItem(LAST_ACTIVITY_KEY, String(Date.now()));
    }
    schedule();

    const events: (keyof WindowEventMap)[] = ["mousemove", "mousedown", "keydown", "scroll", "touchstart"];
    events.forEach((e) => window.addEventListener(e, markActivity, { passive: true }));

    const onVisibility = () => {
      if (document.visibilityState !== "visible") return;
      const last = Number(sessionStorage.getItem(LAST_ACTIVITY_KEY) || 0);
      if (last && Date.now() - last > IDLE_MS) logout();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      events.forEach((e) => window.removeEventListener(e, markActivity));
      document.removeEventListener("visibilitychange", onVisibility);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [token, logout]);

  const value = useMemo(
    () => ({ token, user, isLoading, logout }),
    [token, user, isLoading, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth harus dipakai di dalam <AuthProvider />");
  return ctx;
}

export const authStorageKeys = { TOKEN_KEY, LAST_ACTIVITY_KEY };