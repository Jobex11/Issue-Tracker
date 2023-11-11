import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-zinc-500 hover:text-zinc-800">
            Dashboard
          </Link>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
