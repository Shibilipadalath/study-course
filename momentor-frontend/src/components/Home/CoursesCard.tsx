
// import Image from "next/image";

// interface CourseCardProps {
//   image: string;
//   title: string;
//   desc: string;
// }

// export default function CourseCard({ image, title, desc }: CourseCardProps) {
//   return (
//     <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex gap-4 h-[180px]">

//       {/* Thumbnail */}
//       <Image
//         src={image}
//         alt={title}
//         width={140}
//         height={120}
//         className="rounded-xl object-cover"
//       />

//       {/* Content */}
//       <div className="flex flex-col justify-between flex-1 text-left">

//         {/* Title + spacer (heart removed, width preserved) */}
//         <div className="flex items-start gap-3">
//           <div className="flex flex-col items-start">
//             <h3 className="text-[15px] font-semibold text-[#070606] leading-snug">
//               {title}
//             </h3>

//             {/* Description stays exactly same (2 lines naturally) */}
//             <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
//               {desc}
//             </p>
//           </div>

//           {/* Spacer to preserve previous layout width */}
//           <div className="w-[34px] shrink-0" />
//         </div>

//         {/* Only Apply Button (rating removed) */}
//         <div className="flex justify-end mt-2">
//           <button className="bg-[#CF6943] text-white px-6 py-2 text-[12px] rounded-lg hover:bg-[#b85a39] transition font-medium">
//             Apply
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }
import Image from "next/image";

interface CourseCardProps {
  image: string;
  title: string;
  desc: string;
}

export default function CourseCard({ image, title, desc }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 flex flex-row gap-4 h-full">

      {/* Thumbnail */}
      <div className="relative w-[120px] sm:w-[140px] shrink-0 self-stretch rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 text-left min-h-[120px]">

        <div className="flex items-start gap-3">
          <div className="flex flex-col items-start w-full">
            <h3 className="text-[15px] font-semibold text-[#070606] leading-snug line-clamp-2">
              {title}
            </h3>

            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed line-clamp-3">
              {desc}
            </p>
          </div>
        </div>

        {/* Apply Button – Smooth Orange Gradient */}
        <div className="flex justify-end mt-3 sm:mt-2">
          <button
            className="
              px-6 py-2 text-[12px] rounded-lg font-medium text-white
              bg-gradient-to-r from-[#CF6943] via-[#FF9A6B] to-[#CF6943]
              shadow-[0_6px_20px_rgba(207,105,67,0.4)]
              hover:from-[#CF6943] hover:via-[#E87A5A] hover:to-[#CF6943]
              transition-all duration-300 cursor-pointer
            "
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
