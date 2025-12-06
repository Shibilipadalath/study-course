"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  HiBriefcase,
  HiDocumentText,
  HiCamera,
  HiCog,
  HiUser,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { LogoutDialog } from "@/components/auth/logout-modal";

interface MenuItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

const menuItems: MenuItem[] = [
  { name: "Services", path: "/admin/services", icon: HiBriefcase },
  { name: "Blog", path: "/admin/blog", icon: HiDocumentText },
  { name: "Gallery", path: "/admin/gallery", icon: HiCamera },
  { name: "Settings", path: "/admin/settings", icon: HiCog },
  { name: "Profile", path: "/admin/profile", icon: HiUser },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const handleLogout = () => {
    setLogoutOpen(true);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-lg bg-[#CF6943] text-white shadow-lg hover:bg-[#b95c3b] transition-colors"
        >
          {isMobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-72 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900
          shadow-2xl z-40 flex flex-col overflow-hidden
          transition-transform duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo Section */}
        <div className="p-4 lg:p-6 border-b border-gray-700/50 shrink-0">
          <Link href="/admin" className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
            <div className="relative w-10 h-10 rounded-lg bg-linear-to-br from-[#CF6943] to-[#b95c3b] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg lg:text-xl">Admin Panel</h2>
              <p className="text-gray-400 text-xs">Dashboard</p>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 lg:px-4 py-4 lg:py-6 space-y-2 overflow-y-auto overflow-x-hidden">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path || pathname.startsWith(item.path + "/");
            const Icon = item.icon;

            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`
                    group relative flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-linear-to-r from-[#CF6943] to-[#b95c3b] text-white shadow-lg shadow-[#CF6943]/30"
                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    }
                  `}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <Icon
                    className={`
                      text-lg lg:text-xl shrink-0 transition-transform duration-200
                      ${isActive ? "scale-110" : "group-hover:scale-110"}
                    `}
                  />
                  <span className="font-medium text-sm lg:text-base">{item.name}</span>

                  {/* Hover Effect */}
                  {!isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-linear-to-r from-[#CF6943]/10 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-3 lg:p-4 border-t border-gray-700/50 shrink-0">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="w-full flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 transition-all duration-200 group"
          >
            <HiArrowRightOnRectangle className="text-lg lg:text-xl shrink-0 group-hover:rotate-12 transition-transform duration-200" />
            <span className="font-medium text-sm lg:text-base">Logout</span>
          </motion.button>
        </div>

        {/* User Profile Section */}
        <div className="p-3 lg:p-4 border-t border-gray-700/50 shrink-0">
          <div className="flex items-center gap-2 lg:gap-3 px-2 py-2 rounded-lg hover:bg-gray-700/30 transition-colors cursor-pointer">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-[#CF6943] to-[#b95c3b] flex items-center justify-center text-white font-semibold shrink-0 text-sm lg:text-base">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-xs lg:text-sm truncate">Admin User</p>
              <p className="text-gray-400 text-xs truncate">admin@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
        />
      )}

      {/* Logout Dialog */}
      <LogoutDialog open={logoutOpen} setOpen={setLogoutOpen} />
    </>
  );
}

