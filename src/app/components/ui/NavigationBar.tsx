"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Person, Menu, Close, Favorite } from "@mui/icons-material";

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
              className="text-gray-700 hover:text-gray-800 transition-colors"
            >
              <Search />
            </button>

            {/* Favorite Icon */}
            <button
              aria-label="Favorite"
              className="text-gray-700 hover:text-gray-800 transition-colors"
            >
              <Favorite />
            </button>

            {/* User Icon */}
            <button
              aria-label="User Profile"
              className="text-gray-700 hover:text-gray-800 transition-colors"
            >
              <Person />
            </button>

            {/* Hamburger Menu Icon (Visible on Mobile) */}
            <div className="md:hidden">
              <button
                aria-label="Toggle Menu"
                onClick={toggleMenu} // Toggle the slide-in menu
                className="text-gray-700 hover:text-gray-800 transition-colors"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-in Menu (Full screen but below the navbar) */}
      <div
        className={`fixed top-10 right-0 left-0 bottom-0 bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 flex flex-col justify-between`}
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
          {/* MENU Heading */}
          <h2 className="text-red-600 text-xl font-bold mb-6">MENU</h2>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="text-black text-lg"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/coming_soon"
                className="text-black text-lg"
                onClick={toggleMenu}
              >
                The Road to PSP
              </Link>
            </li>
            <li>
              <Link
                href="/coming_soon"
                className="text-black text-lg"
                onClick={toggleMenu}
              >
                Bookings
              </Link>
            </li>
            <li>
              <Link
                href="/food_drink"
                className="text-black text-lg"
                onClick={toggleMenu}
              >
                Food and Drink
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="text-black text-lg"
                onClick={toggleMenu}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/coming_soon"
                className="text-black text-lg"
                onClick={toggleMenu}
              >
                Indoor Maps
              </Link>
            </li>
            <li>
              <Link
                href="/coming_soon"
                className="text-black text-lg"
                onClick={toggleMenu}
              >
                Travel
              </Link>
            </li>
            <li>
              <Link
                href="/coming_soon"
                className="text-black text-lg"
                onClick={toggleMenu}
              >
                Raise a Ticket
              </Link>
            </li>
            <li>
              <Link
                href="/coming_soon"
                className="text-black text-lg"
                onClick={toggleMenu}
              >
                New Joiner Onboarding
              </Link>
            </li>
            <li>
              <Link
                href="/coming_soon"
                className="text-black text-lg"
                onClick={toggleMenu}
              >
                Chatbot
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bold Horizontal Line at the Bottom (Centered) */}
        <div className="flex justify-center mb-8">
          <div className="w-1/2 border-t-4 border-black"></div>
        </div>
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
