// "use client";

// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="hero-blobs min-h-dvh pt-20 md:pt-32 pb-12 md:pb-24 bg-[#FFEFEA] relative overflow-hidden flex items-center">

//       {/* Floating Light Background Glow */}
//       <div className="absolute left-20 top-10 w-72 h-72 bg-[#CF6943]/15 rounded-full blur-[100px] animate-pulse" />
//       <div className="absolute right-32 bottom-16 w-96 h-96 bg-[#CF6943]/10 rounded-full blur-[120px]" />

//       <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14 px-6 md:px-10 lg:px-24 w-full">

//         {/* -------- LEFT CONTENT -------- */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex-1 space-y-6"
//         >
//           {/* Heading */}
//           <h1 className="font-semibold text-[#070606] leading-[1.15] tracking-tight">
//             <span className="block text-[34px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-semibold md:whitespace-nowrap">
//               Where Guidance Meets 
//             </span>
//             <span className="block text-[34px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-[#CF6943]">
//               The Future
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-[#070606] text-lg max-w-lg leading-relaxed">
//             India’s Most Relevant Career Mentorship Platform + Next-Gen Future Skills Career Academy
//           </p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.15, duration: 0.7 }}
//             viewport={{ once: true }}
//             className="flex gap-5"
//           >
//             <button className="flex items-center gap-2 bg-[#CF6943] text-white px-6 md:px-10 py-3 rounded-lg text-sm md:text-base font-medium shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:brightness-110 transition">
//               Admission <ArrowRight className="w-4 h-4" />
//             </button>

//             <button className="border border-[#CF6943] text-[#CF6943] px-6 md:px-10 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-[#FDEEE8] transition">
//               Get Free Trial
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* -------- RIGHT IMAGE -------- */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="flex-1 flex justify-center md:justify-end"
//         >
//           <Image
//             src="/images/student.png"
//             alt="Student"
//             width={600}
//             height={550}
//             priority
//             className="object-contain drop-shadow-xl mask-gradient w-full max-w-[400px] md:max-w-none"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-blobs min-h-dvh pt-20 md:pt-32 pb-12 md:pb-24 bg-[#FFEFEA] relative overflow-hidden flex items-center">
      
      {/* Floating Light Background Glow */}
      <div className="absolute left-20 top-10 w-72 h-72 bg-[#CF6943]/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute right-32 bottom-16 w-96 h-96 bg-[#CF6943]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14 px-6 md:px-10 lg:px-24 w-full">

        {/* -------- LEFT CONTENT -------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <h1 className="font-semibold text-[#070606] leading-[1.15] tracking-tight">
            <span className="block text-[34px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-semibold md:whitespace-nowrap">
              Where Guidance Meets
            </span>
            <span className="block text-[34px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-[#CF6943]">
              The Future
            </span>
          </h1>

          <p className="text-[#070606] text-lg max-w-lg leading-relaxed">
            India’s Most Relevant Career Mentorship Platform + Next-Gen Future Skills Career Academy
          </p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex gap-5"
          >
            <button className="flex items-center gap-2 bg-[#CF6943] text-white px-6 md:px-10 py-3 rounded-lg text-sm md:text-base font-medium shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:brightness-110 transition">
              Admission <ArrowRight className="w-4 h-4" />
            </button>

            <button className="border border-[#CF6943] text-[#CF6943] px-6 md:px-10 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-[#FDEEE8] transition">
              Get Free Trial
            </button>
          </motion.div>
        </motion.div>

        {/* -------- RIGHT IMAGE -------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.9, ease: "easeOut" },
            scale: { duration: 0.9, ease: "easeOut" },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <Image
            src="/images/student.png"
            alt="Student"
            width={600}
            height={550}
            priority
            className="object-contain drop-shadow-xl mask-gradient w-full max-w-[400px] md:max-w-none"
          />
        </motion.div>

      </div>
    </section>
  );
}
