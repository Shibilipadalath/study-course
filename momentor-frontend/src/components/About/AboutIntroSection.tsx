// "use client";

// import Image from "next/image";
// import CountUp from "react-countup";

// export default function AboutIntroSection() {
//   return (
//     <section className="w-full bg-white pt-12 md:pt-20 pb-12">
//       <div className="container mx-auto px-6 md:px-10 lg:px-24">
//         {/* ---------- Title & Description ---------- */}
//         <div className="mb-14">
//           <h2 className="text-[30px] md:text-[36px] font-semibold text-[#070606]">
//             About Momentor
//           </h2>
//           <p className="text-[15px] text-gray-600 mt-3 max-w-2xl text-justify tracking-normal leading-relaxed">
//             Momentor is India’s first platform blending Future Skills Training,
//             Career Mentorship, Global Internships, and Education Journalism —
//             built to guide youth with clarity, confidence, awareness, and
//             real-world opportunity. We exist to fix the core problem students
//             face today: lack of direction, lack of skills, and lack of exposure
//             to the real world.
//           </p>
//         </div>

//         {/* ---------- Image + Text Content ---------- */}
//         <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-20">
//           {/* Image */}
//           <div className="w-full md:w-auto md:flex-1">
//             <Image
//               src="/images/about1.png"
//               width={560}
//               height={380}
//               alt="About section"
//               className="rounded-xl object-cover shadow-md w-full h-auto"
//             />
//           </div>

//           {/* Text */}
//           <div className="w-full md:flex-1 max-w-xl">
//             <h3 className="text-[28px] md:text-[32px] font-semibold text-[#070606] leading-tight">
//               Shaping Clarity. <br /> Building Skills
//             </h3>

//             <p className="text-gray-600 text-[15px] text-justify tracking-normal leading-relaxed mt-4">
//               Momentor was built on a simple idea — students don’t fail because
//               they lack talent, they fail because they lack awareness. We
//               empower youth with industry-ready skills, mentorship, exposure,
//               and real intelligence about careers and the future of work. From
//               future-skills programs to global internship pathways, we help
//               young people move from confusion to clarity, and from learning to
//               real opportunity.
//             </p>
//           </div>
//         </div>

//         {/* ---------- Stats with Soft Glow ---------- */}
//         <div className="relative mt-20 pb-10 flex justify-center">
//           {/* Background Glow */}
//           <div className="absolute inset-0 bg-[#FFEFEA] blur-[90px] rounded-full opacity-80"></div>

//           {/* Stats */}
//           <div className="relative flex flex-col sm:flex-row gap-16 sm:gap-28 text-center">
//             {/* Stat Item 1 */}
//             <div>
//               <p className="text-[#0A0A0A] heading-text">
//                 <CountUp
//                   className="text-[36px] font-bold"
//                   end={28000}
//                   duration={2}
//                   separator=","
//                 />
//                 +
//               </p>
//               <p className="text-gray-700 text-[14px] mt-2">Youth Reached</p>
//               <p className="text-gray-500 text-[12px]">
//                 across Kerala and beyond
//               </p>
//             </div>

//             {/* Stat Item 2 */}
//             <div>
//               <p className="text-[#0A0A0A] heading-text">
//                 <CountUp
//                   className="text-[36px] font-bold"
//                   end={35000}
//                   duration={2}
//                   separator=","
//                 />
//                 +
//               </p>
//               <p className="text-gray-700 text-[14px] mt-2">
//                 Hours of Learning Content
//               </p>
//               <p className="text-gray-500 text-[12px]">
//                 skills, mindset & communication
//               </p>
//             </div>

//             {/* Stat Item 3 */}
//             <div>
//               <p className="text-[#0A0A0A] heading-text">
//                 <CountUp
//                   className="text-[36px] font-bold"
//                   end={120}
//                   duration={2}
//                 />
//                 +
//               </p>
//               <p className="text-gray-700 text-[14px] mt-2">
//                 Training & Mentorship Programs
//               </p>
//               <p className="text-gray-500 text-[12px]">
//                 designed for real employability
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import CountUp from "react-countup";

export default function AboutIntroSection() {
  return (
    <section className="w-full bg-black pt-12 md:pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-24">

        {/* ---------- Title & Description ---------- */}
        <div className="mb-14 text-center">
          <h2 className="text-[30px] md:text-[36px] font-semibold text-white text-center">
            About Momentor
          </h2>
          <p className="text-[15px] text-gray-300 mt-3 w-full max-w-4xl mx-auto text-center tracking-normal leading-relaxed">
            Momentor is India’s first platform blending Future Skills Training,
            Career Mentorship, Global Internships, and Education Journalism —
            built to guide youth with clarity, confidence, awareness, and
            real-world opportunity. We exist to fix the core problem students
            face today: lack of direction, lack of skills, and lack of exposure
            to the real world.
          </p>
        </div>

        {/* ---------- Image + Text Content ---------- */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-20">

          {/* Image */}
          <div className="w-full md:w-auto md:flex-1">
            <Image
              src="/images/about1.png"
              width={560}
              height={380}
              alt="About section"
              className="rounded-xl object-cover shadow-md w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="w-full md:flex-1 max-w-xl">
            <h3 className="text-[28px] md:text-[32px] font-semibold text-[#CF6943] leading-tight">
              Shaping Clarity. <br /> Building Skills
            </h3>

            <p className="text-gray-300 text-[15px] text-justify tracking-normal leading-relaxed mt-4">
              Momentor was built on a simple idea — students don’t fail because
              they lack talent, they fail because they lack awareness. We
              empower youth with industry-ready skills, mentorship, exposure,
              and real intelligence about careers and the future of work. From
              future-skills programs to global internship pathways, we help
              young people move from confusion to clarity, and from learning to
              real opportunity.
            </p>
          </div>
        </div>

        {/* ---------- Stats with Soft Glow ---------- */}
        <div className="relative mt-20 pb-10 flex justify-center">

          {/* Background Glow (adjusted for dark bg) */}
          <div className="absolute inset-0 bg-[#CF6943]/20 blur-[90px] rounded-full"></div>

          {/* Stats */}
          <div className="relative flex flex-col sm:flex-row gap-16 sm:gap-28 text-center">

            {/* Stat Item 1 */}
            <div>
              <p className="text-white heading-text">
                <CountUp
                  className="text-[36px] font-bold"
                  end={28000}
                  duration={2}
                  separator=","
                />
                +
              </p>
              <p className="text-gray-300 text-[14px] mt-2">Youth Reached</p>
              <p className="text-gray-400 text-[12px]">
                across Kerala and beyond
              </p>
            </div>

            {/* Stat Item 2 */}
            <div>
              <p className="text-white heading-text">
                <CountUp
                  className="text-[36px] font-bold"
                  end={35000}
                  duration={2}
                  separator=","
                />
                +
              </p>
              <p className="text-gray-300 text-[14px] mt-2">
                Hours of Learning Content
              </p>
              <p className="text-gray-400 text-[12px]">
                skills, mindset & communication
              </p>
            </div>

            {/* Stat Item 3 */}
            <div>
              <p className="text-white heading-text">
                <CountUp
                  className="text-[36px] font-bold"
                  end={120}
                  duration={2}
                />
                +
              </p>
              <p className="text-gray-300 text-[14px] mt-2">
                Training & Mentorship Programs
              </p>
              <p className="text-gray-400 text-[12px]">
                designed for real employability
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
