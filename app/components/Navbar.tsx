"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

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
  {
    name: "Cart",
    href: "/cart",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="py-8 justify-between flex items-center sticky top-0 bg-white px-4 lg:px-[350px]">
      <Link href={"/"} className="text-4xl font-extrabold">
        wearly.
      </Link>
      <div className="lg:flex space-x-4 border px-8 py-4 rounded-full hidden">
        {navlinks.map((link, idx) => (
          <div key={idx}>
            <Link
              href={link.href}
              className={`${
                pathName === link.href
                  ? "font-extrabold"
                  : "text-gray-600 hover:font-bold hover:text-gray-900 duration-200 hover:underline underline-offset-4"
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="items-center hidden md:flex">
        <Button variant={"ghost"}>Sign in</Button>
        <Link href={"/cart"}>
          <BsBasket3 size={20} />
        </Link>
      </div>
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AiOutlineMenu size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white space-y-3 text-center py-4">
            {navlinks.map((link, idx) => (
              <div
                key={idx}
                className={`${
                  pathName === link.href
                    ? "font-bold"
                    : "hover:bg-gray-200 rounded-lg"
                }`}
              >
                <Link href={link.href}>{link.name}</Link>
              </div>
            ))}
            <Separator className="text-black" />
            <Button variant={"ghost"}>Sign in</Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
