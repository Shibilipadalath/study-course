// "use client";

// import Image from "next/image";
// import { IoArrowForwardOutline } from "react-icons/io5";

// export default function WhyUsSection() {
//   return (
//     <section className="py-20 bg-[#F4F4F4]">
//       <div className="container mx-auto px-6 lg:px-24 flex flex-col md:flex-row items-center gap-16">
//         {/* LEFT VISUAL BLOCK */}
//         <div className="relative flex-1 flex justify-start -ml-4">
//           {/* BACKGROUND CIRCLE – hide on mobile */}
//           <div className="hidden md:block absolute w-[480px] h-[480px] bg-[#FDEEE8] rounded-full opacity-70 -z-10 left-0"></div>

//           {/* Outline Circles – hide on mobile */}
//           <div className="hidden md:block absolute -z-10 left-0">
//             <svg width="500" height="500">
//               <circle
//                 cx="250"
//                 cy="250"
//                 r="200"
//                 stroke="#CF694350"
//                 strokeWidth="1.2"
//                 fill="none"
//               />
//               <circle
//                 cx="250"
//                 cy="250"
//                 r="160"
//                 stroke="#CF694350"
//                 strokeWidth="1.2"
//                 fill="none"
//               />
//               <circle
//                 cx="250"
//                 cy="250"
//                 r="120"
//                 stroke="#CF694350"
//                 strokeWidth="1.2"
//                 fill="none"
//               />
//             </svg>
//           </div>

//           {/* IMAGE */}
//           <Image
//             src="/images/student2.png"
//             alt="Student"
//             width={500}
//             height={700}
//             className="
//       relative z-20
//       object-contain
//       drop-shadow-lg
//       w-[350px]
//       sm:w-[420px]
//       md:w-[580px]
//       lg:w-[630px]
//       mx-auto md:mx-0
//     "
//             priority
//           />
//         </div>

//         {/* RIGHT TEXT CONTENT */}
//         <div className="flex-1">
//           <span className="bg-[#CF6943] text-white text-xs px-4 py-1 rounded-full">
//             Why Momentor
//           </span>

//           <h2 className="text-[36px] font-semibold text-[#070606] mt-4 leading-tight max-w-2xl">
//             Why Learners Choose <br /> Momentor
//           </h2>

//           {/* ✅ Wider text block */}
//           <p className="text-gray-600 text-[16px] mt-5 max-w-2xl text-justify tracking-tight leading-relaxed">
//             We offer an industry-driven curriculum shaped by real workforce
//             needs, supported by expert mentorship that guides, motivates, and
//             transforms learners. Our programs open doors to real opportunities
//             including internships, international exposure, and career pathways
//             while preparing students for the future with AI-era skills and
//             communication excellence. Designed especially for young adults, our
//             approach is flexible, practical, and hands-on—empowering learners to
//             build confidence, capability, and long-term success.
//           </p>

//           <button className="mt-8 flex items-center gap-2 bg-[#CF6943] text-white px-10 py-3 rounded-lg shadow hover:bg-[#B85A39] transition font-medium">
//             View More <IoArrowForwardOutline size={18} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function WhyUsSection() {
  return (
    <section className="pt-10 pb-20 bg-black">
      <div className="container mx-auto px-6 lg:px-24 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT VISUAL BLOCK */}
        <div className="relative flex-1 flex justify-start -ml-4">

          {/* BACKGROUND CIRCLE – hide on mobile */}
          <div className="hidden md:block absolute w-[480px] h-[480px] bg-[#B08D55]/15 rounded-full -z-10 left-0"></div>

          {/* Outline Circles – hide on mobile */}
          <div className="hidden md:block absolute -z-10 left-0">
            <svg width="500" height="500">
              <circle
                cx="250"
                cy="250"
                r="200"
                stroke="#B08D5550"
                strokeWidth="1.2"
                fill="none"
              />
              <circle
                cx="250"
                cy="250"
                r="160"
                stroke="#B08D5550"
                strokeWidth="1.2"
                fill="none"
              />
              <circle
                cx="250"
                cy="250"
                r="120"
                stroke="#B08D5550"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          </div>

          {/* IMAGE */}
          <Image
            src="/images/student2.png"
            alt="Student"
            width={500}
            height={700}
            className="
              relative z-20
              object-contain
              drop-shadow-lg
              opacity-80
              w-full max-w-[350px]
              sm:max-w-[420px]
              md:max-w-[580px]
              lg:max-w-[630px]
              mx-auto md:mx-0
            "
            priority
          />
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="flex-1">
          <span className="bg-[#B08D55] text-white text-xs px-4 py-1 rounded-full">
            Why Momentor
          </span>

          <h2 className="text-[36px] font-semibold text-white mt-4 leading-tight max-w-2xl">
            Why Learners Choose <br /> Momentor
          </h2>

          <p className="text-gray-300 text-[16px] mt-5 max-w-2xl text-justify tracking-tight leading-relaxed">
            We offer an industry-driven curriculum shaped by real workforce
            needs, supported by expert mentorship that guides, motivates, and
            transforms learners. Our programs open doors to real opportunities
            including internships, international exposure, and career pathways
            while preparing students for the future with AI-era skills and
            communication excellence. Designed especially for young adults, our
            approach is flexible, practical, and hands-on—empowering learners to
            build confidence, capability, and long-term success.
          </p>

          {/* GRADIENT BUTTON */}
          <button
            className="
    mt-8 flex items-center gap-2
    bg-gradient-to-r from-[#B08D55] via-[#D8B67C] to-[#B08D55]
    text-white px-10 py-3 rounded-lg
    shadow-[0_8px_28px_rgba(176,141,85,0.4)]
    hover:from-[#B08D55] hover:via-[#C4A060] hover:to-[#B08D55]
    transition-all duration-300 font-medium cursor-pointer
  "
          >
            View More <IoArrowForwardOutline size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}
