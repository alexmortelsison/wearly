"use client";
import { BsBasket3 } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Collection",
    href: "/collection",
  },
  {
    name: "Favorites",
    href: "/favorites",
  },
  {
    name: "Sale",
    href: "/sale",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="py-8 justify-between flex items-center sticky top-0 bg-white px-4 lg:px-72">
      <Link href={"/"} className="text-4xl font-extrabold">
        wearly.
      </Link>
      <div className="lg:flex space-x-2 border px-8 py-4 rounded-full hidden">
        {navlinks.map((link, idx) => (
          <div key={idx}>
            <Link
              href={link.href}
              className={`${
                pathName === link.href
                  ? "font-extrabold underline underline-offset-4"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <Button variant={"ghost"}>Sign in</Button>
        <Link href={"/cart"}>
          <BsBasket3 size={20} />
        </Link>
      </div>
    </nav>
  );
}
