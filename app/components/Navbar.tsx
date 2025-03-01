import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto py-8">
      <Link href={"/"} className="text-4xl font-extrabold">
        wearly.
      </Link>
    </nav>
  );
}
