"use client";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./Navbar";
export default function SessionWrapper({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const isAdminPage = pathName.startsWith("/admin");
  return (
    <SessionProvider>
      {isAdminPage ?? <Navbar />}
      {children}
    </SessionProvider>
  );
}
