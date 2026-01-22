// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { FiPhoneCall } from "react-icons/fi";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   const menu = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Blogs", path: "/blogs" },
//     { name: "Contact", path: "/contact" },
//   ];

//   // Detect scroll
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
//       ${isScrolled ? "bg-white/80 backdrop-blur-xl shadow-md" : "bg-transparent"}`}
//     >
//       <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">

//         {/* ---------- LOGO ---------- */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/images/logo.png"
//             alt="logo"
//             width={160}
//             height={80}
//             priority
//           />
//         </Link>

//         {/* ---------- DESKTOP NAV ---------- */}
//         <nav className="hidden md:flex items-center gap-10">
//           {menu.map((item) => (
//             <Link
//               key={item.path}
//               href={item.path}
//               className={`font-medium transition-all ${
//                 pathname === item.path
//                   ? "text-[#CF6943]"
//                   : "text-gray-700 hover:text-[#CF6943]"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* ---------- CALL ICON (DESKTOP) ---------- */}
//         <a
//           href="tel:+9198898898000"
//           className="hidden md:flex items-center justify-center
//           w-11 h-11 rounded-full bg-[#CF6943] text-white
//           hover:bg-[#b95c3b] transition shadow-md"
//           aria-label="Call us"
//         >
//           <FiPhoneCall size={20} />
//         </a>

//         {/* ---------- MOBILE MENU BUTTON ---------- */}
//         <button
//           className="md:hidden text-3xl text-[#070606]"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* ---------- MOBILE NAV ---------- */}
//       {open && (
//         <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-md py-4 flex flex-col gap-4 px-6">
//           {menu.map((item) => (
//             <Link
//               key={item.path}
//               href={item.path}
//               onClick={() => setOpen(false)}
//               className={`font-medium transition ${
//                 pathname === item.path
//                   ? "text-[#CF6943] font-semibold"
//                   : "text-gray-800 hover:text-[#CF6943]"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}

//           {/* Mobile Call Button */}
//           <a
//             href="tel:+9198898898000"
//             onClick={() => setOpen(false)}
//             className="mt-2 flex items-center justify-center gap-2
//             bg-[#CF6943] text-white rounded-lg h-[45px] font-medium
//             hover:bg-[#b95c3b] transition"
//           >
//             <FiPhoneCall size={18} />
//             Call Us
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="
        w-full fixed top-0 left-0 z-50
        bg-black transition-all duration-300
      "
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">

        {/* ---------- LOGO ---------- */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={160}
            height={80}
            priority
          />
        </Link>

        {/* ---------- DESKTOP NAV ---------- */}
        <nav className="hidden md:flex items-center gap-10">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative font-medium transition-all duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px] after:bg-[#CF6943] after:transition-all after:duration-300
                ${pathname === item.path
                  ? "text-[#CF6943] after:w-full"
                  : "text-gray-300 hover:text-[#CF6943] after:w-0 hover:after:w-full"
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ---------- CALL ICON (DESKTOP) ---------- */}
        <a
          href="tel:+9198898898000"
          className="hidden md:flex items-center justify-center
          w-11 h-11 rounded-full bg-[#CF6943] text-white
          hover:bg-[#b95c3b] transition shadow-md"
          aria-label="Call us"
        >
          <FiPhoneCall size={20} />
        </a>

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ---------- MOBILE NAV ---------- */}
      {open && (
        <div className="md:hidden bg-black py-4 flex flex-col gap-4 px-6 border-t border-white/10">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`font-medium transition ${pathname === item.path
                  ? "text-[#CF6943] font-semibold"
                  : "text-gray-300 hover:text-[#CF6943]"
                }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Call Button */}
          <a
            href="tel:+9198898898000"
            onClick={() => setOpen(false)}
            className="
              mt-2 flex items-center justify-center gap-2
              bg-[#CF6943] text-white rounded-lg h-[45px] font-medium
              hover:bg-[#b95c3b] transition
            "
          >
            <FiPhoneCall size={18} />
            Call Us
          </a>
        </div>
      )}
    </header>
  );
}
