import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

interface CourseCardProps {
  image: string;
  title: string;
  desc: string;
}

export default function CourseCard({ image, title, desc }: CourseCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex gap-4"
      style={{ height: "180px" }}
    >
      {/* Thumbnail */}
      <Image
        src={image}
        alt={title}
        width={140}
        height={120}
        className="rounded-xl object-cover"
      />

      {/* Content */}
      <div className="flex flex-col justify-between flex-1">
        
        {/* Title + Like Button */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[15px] font-semibold text-[#070606]">{title}</h3>
            <p className="text-[12px] text-gray-500 w-[90%]">{desc}</p>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <IoHeartOutline size={18} className="text-[#070606]" />
          </button>
        </div>

        {/* Ratings + Profile Row + Button */}
        <div className="flex justify-between items-center">
          
          {/* Rating + Profile */}
          <div>
            <div className="flex items-center gap-1 text-[12px] text-[#070606]">
              <FaStar className="text-[#FFB800]" size={14} /> 4.5
            </div>

            {/* Profile images */}
            <div className="flex items-center mt-1 space-x-[-8px]">
              {["/images/profile.jpeg","/images/profile.jpeg","/images/profile.jpeg","/images/profile.jpeg"].map((p,i)=>(
                <Image
                  key={i}
                  src={p}
                  width={24}
                  height={24}
                  alt="profile"
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <button className="bg-[#CF6943] text-white px-6 py-2 text-[12px] rounded-lg hover:bg-[#b85a39] transition font-medium">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
