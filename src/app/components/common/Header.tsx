"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 bg-white/90 backdrop-blur-lg shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        
        {/* --- Logo --- */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={120} height={50} priority />
        </div>

        {/* --- Desktop Menu --- */}
        <nav className="hidden md:flex items-center gap-8">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="font-medium text-gray-700 hover:text-orange-500 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* --- Desktop Login Button --- */}
        <Link
          href="/login"
          className="hidden md:block px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Login
        </Link>

        {/* --- Mobile menu button --- */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {open && (
        <div className="md:hidden bg-white shadow-md py-4 flex flex-col gap-4 px-6">
          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="text-gray-700 font-medium hover:text-orange-500 transition"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/login"
            className="w-full text-center px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
