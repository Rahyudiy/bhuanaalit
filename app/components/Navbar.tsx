"use client";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center md:px-10 px-5 pt-5 relative">
      <h1 className="font-bold text-lg font-hedvigserif">BhuanaAlit</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center absolute font-poppins left-1/2 -translate-x-1/2">
        <div className="flex gap-10 bg-[#98c8ff3b] p-2 rounded-full">
          <Link href="/" className="px-5 py-2 rounded-full hover:bg-white">
            Home
          </Link>
          <Link href="/" className="px-5 py-2 rounded-full hover:bg-white">
            Explore
          </Link>
          <Link href="/" className="px-5 py-2 rounded-full hover:bg-white">
            Stories
          </Link>
          <Link href="/" className="px-5 py-2 rounded-full hover:bg-white">
            About
          </Link>
        </div>
      </div>

      {/* Desktop Button */}
      <button className="hidden md:block bg-black px-5 py-2 rounded-full text-white font-hedvigserif hover:bg-gray-800">
        start your journey
      </button>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl font-bold"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 p-10 flex flex-col gap-10 font-poppins transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl font-hedvigserif">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-3xl font-bold">
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col text-lg gap-6 mt-10">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            Explore
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            Stories
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            About
          </Link>
        </div>

        {/* CTA Button */}
        <button className="bg-black px-5 py-3 mt-auto rounded-full text-white font-hedvigserif hover:bg-gray-800">
          start your journey
        </button>
      </div>

      {/* Background Overlay (when menu open) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
        />
      )}
    </nav>
  );
};
