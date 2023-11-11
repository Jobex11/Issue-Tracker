import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">Logo</Link>
      <ul className="flex ">
        <li>
          <Link href="/">Dashboard</Link>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
