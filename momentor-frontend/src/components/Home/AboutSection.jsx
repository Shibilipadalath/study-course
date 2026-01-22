// "use client";

// import CountUp from "react-countup";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function AboutSection() {
//   return (
//     <section className="w-full pt-16 py-24 bg-[#F4F4F4] relative overflow-hidden">

//       <div className="relative z-10 container mx-auto px-6 lg:px-24">

//         {/* TAG */}
//         <div className="flex justify-center">
//           <span className="bg-[#CF6943] text-white text-sm font-medium px-6 py-2 rounded-full shadow-md">
//             About us
//           </span>
//         </div>

//         {/* TITLE — WIDER + CENTERED */}
//         <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="
//           max-w-5xl 
//           mx-auto 
//           mt-8 
//           text-center
//           text-[30px] 
//           md:text-[40px] 
//           font-semibold 
//           text-[#070606]
//           leading-[1.3]
//         "
//       >
//         We don’t just guide you we build your 
//         <br className="hidden md:block" />
//         future with you
//       </motion.h2>


//         {/* CONTENT — CENTERED BLOCK, LEFT TEXT */}
//         <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.15, duration: 0.6 }}
//         viewport={{ once: true }}
//         className="
//           max-w-5xl 
//           mx-auto 
//           mt-8 
//           text-[#474747]
//           text-[16px]
//           space-y-6
//           text-center tracking-tight leading-relaxed
//         "
//       >
//         <p>
//           Momentor is a blended platform of Career Mentorship, Future Skills Training, and Education Journalism.
//           We were born from a mission:
//           To bring clarity to students by telling the truth about careers, and preparing them for the future with the right skills.
//         </p>
//       </motion.div>

// {/* BUTTON */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex justify-center mt-10"
//         >
//           <Link href="/about">
//             <button className="bg-[#CF6943] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#b85a39] transition-all shadow-md">
//               Know More About Us
//             </button>
//           </Link>
//         </motion.div>
//         {/* STATS */}
//         {/* <div className="flex flex-col md:flex-row gap-16 justify-center mt-20">
//           <div className="text-center">
//             <p className=" text-[#CF6943] heading-text">
//               <CountUp className="text-[42px] font-semibold" end={28000} duration={2.5} separator="," />+
//             </p>
//             <p className="text-[#474747] mt-2">Active Students</p>
//           </div>

//           <div className="text-center">
//             <p className=" text-[#CF6943] heading-text">
//               <CountUp className="text-[42px] font-semibold" end={35000} duration={2.5} separator="," />+
//             </p>
//             <p className="text-[#474747] mt-2">Video Classes</p>
//           </div>

//           <div className="text-center">
//             <p className=" text-[#CF6943] heading-text">
//               <CountUp className="text-[42px] font-semibold" end={120} duration={2} />+
//             </p>
//             <p className="text-[#474747] mt-2">Online Courses</p>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }
"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full pt-16 py-24 bg-black relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 lg:px-24">

        {/* TAG */}
        <div className="flex justify-center">
          <span className="bg-[#CF6943] text-white text-sm font-medium px-6 py-2 rounded-full shadow-md">
            About us
          </span>
        </div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            max-w-5xl mx-auto mt-8 text-center
            text-[30px] md:text-[40px]
            font-semibold text-white leading-[1.3]
          "
        >
          We don’t just guide you we build your
          <br className="hidden md:block" />
          future with you
        </motion.h2>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="
            max-w-5xl mx-auto mt-8
            text-gray-300 text-[16px]
            space-y-6 text-center tracking-tight leading-relaxed
          "
        >
          <p>
            Momentor is a blended platform of Career Mentorship, Future Skills Training,
            and Education Journalism. We were born from a mission:
            To bring clarity to students by telling the truth about careers, and
            preparing them for the future with the right skills.
          </p>
        </motion.div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <Link href="/about">
            <button
              className="
                px-8 py-3 rounded-lg text-sm font-medium text-white
                bg-gradient-to-r from-[#CF6943] via-[#FF9A6B] to-[#CF6943]
                shadow-[0_8px_28px_rgba(207,105,67,0.4)]
                hover:from-[#CF6943] hover:via-[#E87A5A] hover:to-[#CF6943]
                transition-all duration-300 cursor-pointer
              "
            >
              Know More About Us
            </button>
          </Link>
        </motion.div>

        {/* STATS (kept commented) */}
      </div>
    </section>
  );
}
