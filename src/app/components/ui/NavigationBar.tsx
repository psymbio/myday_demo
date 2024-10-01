"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Person, Menu, Close } from "@mui/icons-material";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <header className="bg-white shadow-sm h-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-red-600">
              <span className="sr-only">Home</span>
              <Image
                src="/hsbc-logo-without-name.png"
                alt="HSBC Logo"
                width={100}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button
              aria-label="Search"
              className="text-black hover:text-black transition-colors"
            >
              <Search />
            </button>

            {/* User Icon */}
            <button
              aria-label="User Profile"
              className="text-black hover:text-black transition-colors"
            >
              <Person />
            </button>

            {/* Hamburger Menu Icon (Visible on Mobile) */}
            <div className="md:hidden">
              <button
                aria-label="Toggle Menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:text-black transition-colors"
              >
                {isMenuOpen ? <Close /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/menu" className="text-black font-medium hover:text-black">
                  My Menu
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
