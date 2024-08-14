import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-teal-500 p-8 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-center text-white font-semibold text-sm">
        © 2024 Random Post Generator. All rights reserved.
      </p>
      <div className="w-[25%]">
        <ul className="flex items-center justify-center gap-x-4 text-white">
          <li>
            <Link href="/" referrerPolicy="no-referrer">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" referrerPolicy="no-referrer">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" referrerPolicy="no-referrer">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
