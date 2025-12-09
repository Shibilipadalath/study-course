import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function ServiceCard({ image, title, tutor, tutorImg }) {
  return (
    <div
      className="bg-white rounded-xl p-2 transition-all hover:-translate-y-2 hover:shadow-xl"
      style={{
        boxShadow: "0px 15px 29px rgba(0,0,0,0.15)",
        width: "100%",
        maxWidth: "392px",
        minHeight: "420px",
      }}
    >
      {/* Service Image */}
      <div className="relative">
        <Image
          src={image}
          width={392}
          height={220}
          alt={title}
          className="rounded-xl object-cover w-full h-[200px]"
        />

      </div>

      {/* Title */}
      <h3 className="text-[16px] font-semibold text-[#070606] mt-4 px-3 leading-tight">
        {title}
      </h3>

      {/* Footer */}
<div className="mt-16 mx-3 mb-3 flex items-center justify-between px-4 py-3"
  style={{
    background: "#E7E6E6",
    borderRadius: "12px",
  }}
>
  {/* Tutor Info */}
  <div className="flex items-center gap-2">
    <Image
      src={tutorImg}
      width={32}
      height={32}
      alt="Tutor"
      className="rounded-full object-cover"
    />
    <div>
      <p className="text-[14px] font-medium text-[#070606] leading-none">{tutor}</p>
      <p className="text-[11px] text-[#7A7A7A] mt-0.5 leading-none">Lorem Ipsum</p>
    </div>
  </div>

  {/* Right Button */}
  <button
  className="w-10 h-10 flex items-center justify-center text-white transition-all hover:brightness-105 hover:scale-[1.08]"
  style={{
    background: "#CF6943",
    borderRadius: "12px",
  }}
>

    <IoArrowForwardOutline size={20} />
  </button>
</div>

    </div>
  );
}