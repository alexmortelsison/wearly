"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Hero from "./components/Hero";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("Session Data:", session);

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.role === "admin") {
        router.push("/admin");
      }
    }
  }, [status, session, router]);

  return (
    <div>
      <Hero />
    </div>
  );
}
