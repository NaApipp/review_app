// app/(protected)/layout.tsx
import { AuthProvider } from "./AuthProvider";


export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
