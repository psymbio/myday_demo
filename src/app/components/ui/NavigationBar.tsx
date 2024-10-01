"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Person, Menu, Close } from "@mui/icons-material";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the side menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                onClick={toggleMenu} // Toggle the slide-in menu
                className="text-black hover:text-black transition-colors"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
        style={{ height: "auto" }} // Height will automatically adjust based on the content
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black hover:text-red-600"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <Close />
        </button>

        {/* Menu Content */}
        <nav className="mt-16 p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/events" className="text-black text-lg">
                Events
              </Link>
            </li>
            <li>
              <Link href="/restaurants" className="text-black text-lg">
                Restaurants
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>

      {/* Background Overlay (Optional, can close menu by clicking outside) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={toggleMenu} // Close menu when clicking outside
        ></div>
      )}
    </header>
  );
}
