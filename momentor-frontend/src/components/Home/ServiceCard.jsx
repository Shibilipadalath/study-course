"use client";

import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";

export default function ServiceCard({ id, image, title, description }) {
  // Truncate description to show a preview
  const truncatedDescription = description
    ? description.length > 100
      ? description.substring(0, 100) + "..."
      : description
    : "Discover our comprehensive service offerings designed to help you achieve your goals.";

  return (
    <Link href={`/services/${id}`}>
      <div
        className="rounded-xl p-2 transition-all hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex flex-col border border-[#333]"
        style={{
          background: "linear-gradient(180deg, #2A2A2A 0%, #000000 100%)",
          boxShadow: "0px 15px 29px rgba(0,0,0,0.5)",
          width: "100%",
          maxWidth: "392px",
          minHeight: "420px",
        }}
      >
        {/* Service Image */}
        <div className="relative">
          <Image
            src={image || "/images/service1.png"}
            width={392}
            height={220}
            alt={title}
            className="rounded-xl object-cover w-full h-[200px]"
          />
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-semibold text-white mt-4 px-3 leading-tight">
          {title}
        </h3>

        {/* Description Preview */}
        <p className="text-[13px] text-gray-300 mt-2 px-3 line-clamp-3 leading-relaxed grow">
          {truncatedDescription}
        </p>

        {/* Footer */}
        <div
          className="mt-4 mx-3 mb-3 flex items-center justify-between px-4 py-3"
          style={{
            background: "#1A1A1A",
            borderRadius: "12px",
            border: "1px solid #333",
          }}
        >
          {/* Learn More Text */}
          <span className="text-[14px] font-medium text-white">
            Learn More
          </span>

          {/* Right Button */}
          <div
            className="w-10 h-10 flex items-center justify-center text-white transition-all hover:brightness-105 hover:scale-[1.08]"
            style={{
              background: "#CF6943",
              borderRadius: "12px",
            }}
          >
            <IoArrowForwardOutline size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
}