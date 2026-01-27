// "use client";

// import { motion } from "framer-motion";

// const benefits = [
//   {
//     number: "01",
//     title: "Career Clarity",
//     desc: "Guidance that helps students understand who they are, what they want, and how to build a future around it.",
//   },
//   {
//     number: "02",
//     title: "Future-Skills Training",
//     desc: "Programs designed with industry input to build communication, leadership, mindset, AI & digital skills.",
//   },
//   {
//     number: "03",
//     title: "Global Internship Pathways",
//     desc: "Opportunities in Dubai, Vietnam, and beyond that build confidence, cultural exposure, and real-world experience.",
//   },
//   {
//     number: "04",
//     title: "Education Journalism",
//     desc: "Career truth, industry insights, and real student stories that create awareness — not assumptions.",
//   },
//   {
//     number: "05",
//     title: "Mentorship That Transforms",
//     desc: "1:1 and group mentorship that guides youth with direction, emotional support, and structured learning.",
//   },
//   {
//     number: "06",
//     title: "Industry Readiness",
//     desc: "Programs built for the real world: etiquette, behaviour, professionalism, interview prep, and workplace culture.",
//   },
// ];

// export default function OurBenefitsSection() {
//   return (
//     <section className="w-full pb-16 md:pb-24 bg-white">
//       <div className="container mx-auto px-6 md:px-10 lg:px-24 text-center">
//         <h2 className="text-[32px] md:text-[38px] font-semibold text-[#070606]">
//           Why Momentor Works
//         </h2>

//         <p className="text-gray-600 text-[15px] mt-3 max-w-2xl mx-auto leading-[1.7]">
//           We don’t just teach skills — we build clarity, confidence, and
//           direction. Our programs are designed to prepare youth for the real
//           world with awareness, mentorship, industry relevance, and global
//           exposure.
//         </p>

//         {/* Benefit Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
//           {benefits.map((item, i) => {
//             const isWhiteCard = (i + 1) % 2 === 0; // 2,4,6 white background
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`rounded-xl px-7 py-8 shadow-md border transition 
//                   ${
//                     isWhiteCard
//                       ? "bg-white border-gray-200"
//                       : "bg-[#FDF0EB] border-[#F7DCCF]"
//                   }`}
//               >
//                 {/* NUMBER BADGE DESIGN */}
//                 <div className="relative w-12 h-12">
//                   {/* Faint geometric background */}
//                   <div className="absolute inset-0 bg-[#F2DCD3] opacity-60 rounded-full blur-sm"></div>

//                   {/* Number */}
//                   <span className="relative z-10 font-bold text-[26px] text-[#CF6943]">
//                     {item.number}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <h4 className="font-semibold text-[18px] mt-5 text-[#333]">
//                   {item.title}
//                 </h4>

//                 <p className="text-gray-600 text-[14px] leading-[1.7] mt-3">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Career Clarity",
    desc: "Guidance that helps students understand who they are, what they want, and how to build a future around it.",
  },
  {
    number: "02",
    title: "Future-Skills Training",
    desc: "Programs designed with industry input to build communication, leadership, mindset, AI & digital skills.",
  },
  {
    number: "03",
    title: "Global Internship Pathways",
    desc: "Opportunities in Dubai, Vietnam, and beyond that build confidence, cultural exposure, and real-world experience.",
  },
  {
    number: "04",
    title: "Education Journalism",
    desc: "Career truth, industry insights, and real student stories that create awareness — not assumptions.",
  },
  {
    number: "05",
    title: "Mentorship That Transforms",
    desc: "1:1 and group mentorship that guides youth with direction, emotional support, and structured learning.",
  },
  {
    number: "06",
    title: "Industry Readiness",
    desc: "Programs built for the real world: etiquette, behaviour, professionalism, interview prep, and workplace culture.",
  },
];

export default function OurBenefitsSection() {
  return (
    <section className="w-full pb-16 md:pb-24 bg-black">
      <div className="container mx-auto px-6 md:px-10 lg:px-24 text-center">

        <h2 className="text-[32px] md:text-[38px] font-semibold text-[#B08D55]">
          Why Momentor Works
        </h2>


        <p className="text-gray-300 text-[15px] mt-3 max-w-2xl mx-auto leading-[1.7]">
          We don’t just teach skills — we build clarity, confidence, and
          direction. Our programs are designed to prepare youth for the real
          world with awareness, mentorship, industry relevance, and global
          exposure.
        </p>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {benefits.map((item, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl px-7 py-8 shadow-md border border-[#333] transition hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: "linear-gradient(180deg, #2A2A2A 0%, #000000 100%)",
                }}
              >
                {/* NUMBER BADGE */}
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-[#333] rounded-full blur-sm"></div>
                  <span className="relative z-10 font-bold text-[26px] text-[#B08D55]">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <h4 className="font-semibold text-[18px] mt-5 text-white">
                  {item.title}
                </h4>

                <p className="text-gray-300 text-[14px] leading-[1.7] mt-3">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
