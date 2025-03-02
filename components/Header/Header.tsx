import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href={"/"} className="btn btn-ghost text-xl">
            Wealry.
          </Link>
          <Menu />
        </div>
      </nav>
    </header>
  );
}
