
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const partners = [
//   { id: 1, name: "Partner 1", logo: "/images/partner1.jpg" },
//   { id: 2, name: "Partner 2", logo: "/images/partner2.jpg" },
//   { id: 3, name: "Partner 3", logo: "/images/partner3.jpg" },
//   { id: 4, name: "Partner 4", logo: "/images/partner4.jpg" },
//   { id: 5, name: "Partner 5", logo: "/images/partner5.jpg" },
//   { id: 6, name: "Partner 6", logo: "/images/partner1.jpg" },
//   { id: 7, name: "Partner 7", logo: "/images/partner2.jpg" },
//   { id: 8, name: "Partner 8", logo: "/images/partner3.jpg" },
//   { id: 9, name: "Partner 9", logo: "/images/partner4.jpg" },
//   { id: 10, name: "Partner 10", logo: "/images/partner5.jpg" },

//   { id: 1, name: "Partner 1", logo: "/images/partner4.jpg" },
//   { id: 2, name: "Partner 2", logo: "/images/partner4.jpg" },
//   { id: 3, name: "Partner 3", logo: "/images/partner3.jpg" },
//   { id: 4, name: "Partner 4", logo: "/images/partner4.jpg" },
//   { id: 5, name: "Partner 5", logo: "/images/partner5.jpg" },


// ];

// export default function PartnerSection() {
//   return (
//     <section className="w-full py-24 bg-white">
//       <div className="container mx-auto px-6 lg:px-24">

//         {/* TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center text-[32px] md:text-[40px] font-semibold text-[#070606]"
//         >
//             Our Trusted Partners
//         </motion.h2>

//         {/* SUBTITLE */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center text-[#474747] mt-4 max-w-3xl mx-auto leading-relaxed"
//         >
//          We collaborate with industry leaders and institutions to build
//    meaningful career opportunities for students.
//         </motion.p>

//         {/* LOGO GRID */}
//       <motion.div
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   transition={{ delay: 0.2, duration: 0.6 }}
//   viewport={{ once: true }}
//   className="
//     mt-12
//     grid
//     grid-cols-2
//     sm:grid-cols-3
//     md:grid-cols-5
//     gap-x-3
//     gap-y-2
//     justify-items-center
//     max-w-[1000px]   /* 👈 KEY FIX */
//     mx-auto          /* 👈 centers grid */
//   "
// >




//   {partners.map((partner) => (
//    <div
//   key={partner.id}
//   className="
//     flex items-center justify-center
//     bg-white
//     rounded-lg
//     border border-[#CF6943]/20
//     w-[160px]
//     h-[70px]
//     p-2
//     transition-all duration-300
//     hover:border-[#CF6943]
//     hover:shadow-[0_6px_16px_rgba(207,105,67,0.25)]
//   "
// >
//   <Image
//     src={partner.logo}
//     alt={partner.name}
//     width={180}
//     height={55}
//     className="object-contain max-h-[48px]"
//   />
// </div>


//   ))}
// </motion.div>


//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "Partner 1", logo: "/images/partner1.jpg" },
  { id: 2, name: "Partner 2", logo: "/images/partner2.jpg" },
  { id: 3, name: "Partner 3", logo: "/images/partner3.jpg" },
  { id: 4, name: "Partner 4", logo: "/images/partner4.jpg" },
  { id: 5, name: "Partner 5", logo: "/images/partner5.jpg" },
  { id: 6, name: "Partner 6", logo: "/images/partner1.jpg" },
  { id: 7, name: "Partner 7", logo: "/images/partner2.jpg" },
  { id: 8, name: "Partner 8", logo: "/images/partner3.jpg" },
  { id: 9, name: "Partner 9", logo: "/images/partner4.jpg" },
  { id: 10, name: "Partner 10", logo: "/images/partner5.jpg" },

  { id: 11, name: "Partner 11", logo: "/images/partner4.jpg" },
  { id: 12, name: "Partner 12", logo: "/images/partner4.jpg" },
  { id: 13, name: "Partner 13", logo: "/images/partner3.jpg" },
  { id: 14, name: "Partner 14", logo: "/images/partner4.jpg" },
  { id: 15, name: "Partner 15", logo: "/images/partner5.jpg" },
];

export default function PartnerSection() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-24">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[32px] md:text-[40px] font-semibold text-white"
        >
          Our Trusted Partners
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed"
        >
          We collaborate with industry leaders and institutions to build
          meaningful career opportunities for students.
        </motion.p>

        {/* LOGO GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mt-12
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-5
            gap-x-3
            gap-y-2
            justify-items-center
            max-w-[1000px]
            mx-auto
          "
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="
                flex items-center justify-center
                bg-[#111]
                rounded-lg
                border border-[#B08D55]/30
                w-full
                h-[70px]
                p-2
                transition-all duration-300
                hover:border-[#B08D55]
                hover:shadow-[0_6px_16px_rgba(176,141,85,0.35)]
              "
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={55}
                className="object-contain max-h-[48px] w-auto h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
