import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function ServiceCard({ image, title, tutor }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3">
      {/* Image */}
      <div className="relative">
        <Image
          src={image}
          width={400}
          height={250}
          alt={title}
          className="rounded-lg object-cover w-full h-[180px]"
        />

        {/* Rating Badge */}
        <div className="absolute top-2 left-2 bg-white shadow px-3 py-1 rounded-lg flex items-center gap-2 text-sm">
          <FaStar className="text-yellow-400" />
          <span className="font-medium">4.5 (134)</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-medium text-gray-800 mt-3">
        {title}
      </h3>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        {/* Tutor info */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/instructors/person.png"
            width={28}
            height={28}
            alt="Tutor"
            className="rounded-full"
          />
          <span className="text-gray-500 text-[13px]">{tutor}</span>
        </div>

        {/* Button */}
        <button className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition">
          <IoArrowForwardOutline />
        </button>
      </div>
    </div>
  );
}
