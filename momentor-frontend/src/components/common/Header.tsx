"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 
      ${isScrolled ? "bg-white/80 backdrop-blur-xl shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">

        {/* ---- LOGO ---- */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={160} height={80} priority />
        </Link>

        {/* ---- DESKTOP NAV ---- */}
        <nav className="hidden md:flex items-center gap-10 subheading-text">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-medium transition-all subheading-text ${
                pathname === item.path
                  ? "text-[#CF6943]"
                  : "text-gray-700 hover:text-[#CF6943]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ---- DESKTOP LOGIN BUTTON ---- */}
        <Link
          href="/login"
          className="hidden md:flex items-center justify-center text-white rounded-lg font-medium transition shadow-md bg-[#CF6943] hover:bg-[#b95c3b] w-[150px] h-[45px]"
        >
          Login
        </Link>

        {/* ---- MOBILE MENU BUTTON ---- */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ---- MOBILE NAV ---- */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-md py-4 flex flex-col gap-4 px-6">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`font-medium transition ${
                pathname === item.path
                  ? "text-[#CF6943] font-semibold"
                  : "text-gray-800 hover:text-[#CF6943]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="w-full flex items-center justify-center text-white rounded-lg font-medium transition bg-[#CF6943] hover:bg-[#b95c3b] h-[45px]"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
