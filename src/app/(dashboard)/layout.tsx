// Import AUTH PROVIDER
import { AuthProvider } from "./AuthProvider";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
