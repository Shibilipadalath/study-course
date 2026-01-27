// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { IoAdd, IoRemove } from "react-icons/io5";

// const faqs = [
//   {
//     q: "What is Momentor?",
//     a: "Momentor is India's first education journalism and future-skills mentorship platform designed to guide students through real career awareness, industry readiness, and global opportunities."
//   },
//   {
//     q: "Who is Momentor for?",
//     a: "Momentor is designed for youth aged 16–30 who want clarity, direction, employability skills, and exposure to real global career possibilities."
//   },
//   {
//     q: "What makes Momentor different?",
//     a: "Momentor blends education journalism, future-skills training, mentorship, and global internships — helping students understand careers, build skills, and access real-world opportunities."
//   },
//   {
//     q: "What future skills training do you provide?",
//     a: "Our programs include communication, etiquette, digital & AI literacy, leadership, sales, business development, workplace behaviour, and mindset development — all built with industry needs in mind."
//   },
//   {
//     q: "Do you offer global internship programs?",
//     a: "Yes. Our flagship program offers industry readiness + hospitality internships in Dubai and Vietnam, with more global pathways being added."
//   },
//   {
//     q: "Why education journalism?",
//     a: "Because students fail not due to lack of talent, but due to lack of awareness. Our journalism exposes career truths, industry realities, global trends, and opportunities the education system doesn’t reveal."
//   },
//   {
//     q: "How do I join Momentor?",
//     a: "Students can apply for mentorship, skills programs, and global internships by filling out the application form on our platform. A mentor will guide the next steps."
//   }
// ];




// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section className="py-20 bg-[#F4F4F4] relative overflow-hidden">
//       {/* Background Circles */}
//       <div className="absolute left-10 top-20 -z-10 opacity-30">
//         <svg width="260" height="260">
//           <circle cx="130" cy="130" r="120" stroke="#CF694350" strokeWidth="1.2" fill="none" />
//           <circle cx="130" cy="130" r="90" stroke="#CF694350" strokeWidth="1.2" fill="none" />
//           <circle cx="130" cy="130" r="60" stroke="#CF694350" strokeWidth="1.2" fill="none" />
//         </svg>
//       </div>

//       <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
//         {/* ---------- LEFT CONTENT WITH FULL-BG IMAGE ---------- */}
//         <div className="relative h-full overflow-hidden rounded-br-[120px]">
//           {/* Background image fills entire left column */}
//           <Image
//             src="/images/faq.jpg"
//             alt="FAQ background"
//             fill
//             className="object-cover"
//             priority
//           />

//           {/* CONTENT ON TOP OF IMAGE */}
//           <div className="relative z-10 px-8 py-10 md:px-10 md:py-12 max-w-xl">
//             {/* TAG */}
//             <span className="inline-block bg-[#CF6943] text-white text-xs px-5 py-1.5 rounded-full shadow-sm">
//               FAQ
//             </span>

//             {/* TITLE */}
//             <h2 className="mt-6 text-[32px] md:text-[40px] font-semibold text-[#070606] leading-snug">
//               Frequently Asked <br /> Questions
//             </h2>

//             {/* DESCRIPTION */}
//             <p className="mt-6 text-[16px] text-gray-700 leading-relaxed">
//               Find answers to the most common questions about Momentor — our mentorship, 
//               education journalism, future-skills training, and global internship programs. 
//               If you’re exploring your career direction or planning your next step, this 
//               section will help you understand how Momentor can guide your future.
//             </p>

//           </div>
//         </div>

//         {/* ---------- RIGHT FAQ CARD ---------- */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-2xl w-full self-center lg:self-stretch flex flex-col justify-center">
//           {faqs.map((item, index) => (
//             <div key={index}>
//               {/* Question */}
//               <button
//                 onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
//                 className="w-full flex justify-between items-center py-5 text-left"
//               >
//                 <span className="text-[16px] font-medium text-[#070606] leading-snug pr-6">
//                   {item.q}
//                 </span>

//                 <span
//                   className={`flex items-center justify-center w-8 h-8 rounded-full transition 
//                     ${openIndex === index ? "bg-[#f89b84]" : "bg-[#F4B9AA]"}`}
//                 >
//                   {openIndex === index ? <IoRemove size={16} /> : <IoAdd size={16} />}
//                 </span>
//               </button>

//               {/* Answer */}
//               {openIndex === index && (
//                 <p className="text-[14px] text-gray-500 pb-5 leading-[1.75] pr-10">
//                   {item.a}
//                 </p>
//               )}

//               {/* Divider */}
//               {index !== faqs.length - 1 && <hr className="border-[#F2F2F2]" />}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { IoAdd, IoRemove } from "react-icons/io5";

const faqs = [
  {
    q: "What is Momentor?",
    a: "Momentor is India's first education journalism and future-skills mentorship platform designed to guide students through real career awareness, industry readiness, and global opportunities."
  },
  {
    q: "Who is Momentor for?",
    a: "Momentor is designed for youth aged 16–30 who want clarity, direction, employability skills, and exposure to real global career possibilities."
  },
  {
    q: "What makes Momentor different?",
    a: "Momentor blends education journalism, future-skills training, mentorship, and global internships — helping students understand careers, build skills, and access real-world opportunities."
  },
  {
    q: "What future skills training do you provide?",
    a: "Our programs include communication, etiquette, digital & AI literacy, leadership, sales, business development, workplace behaviour, and mindset development — all built with industry needs in mind."
  },
  {
    q: "Do you offer global internship programs?",
    a: "Yes. Our flagship program offers industry readiness + hospitality internships in Dubai and Vietnam, with more global pathways being added."
  },
  {
    q: "Why education journalism?",
    a: "Because students fail not due to lack of talent, but due to lack of awareness. Our journalism exposes career truths, industry realities, global trends, and opportunities the education system doesn’t reveal."
  },
  {
    q: "How do I join Momentor?",
    a: "Students can apply for mentorship, skills programs, and global internships by filling out the application form on our platform. A mentor will guide the next steps."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute left-10 top-20 -z-10 opacity-30">
        <svg width="260" height="260">
          <circle cx="130" cy="130" r="120" stroke="#CF694350" strokeWidth="1.2" fill="none" />
          <circle cx="130" cy="130" r="90" stroke="#CF694350" strokeWidth="1.2" fill="none" />
          <circle cx="130" cy="130" r="60" stroke="#CF694350" strokeWidth="1.2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">

        {/* LEFT IMAGE + CONTENT (UNCHANGED STYLE) */}
        <div className="relative h-full overflow-hidden rounded-br-[120px]">
          <Image
            src="/images/faq.jpg"
            alt="FAQ background"
            fill
            className="object-cover"
            priority
          />

          <div className="relative z-10 px-8 py-10 md:px-10 md:py-12 max-w-xl">
            <span className="inline-block bg-[#B08D55] text-white text-xs px-5 py-1.5 rounded-full shadow-sm">
              FAQ
            </span>

            <h2 className="mt-6 text-[32px] md:text-[40px] font-semibold text-white leading-snug">
              Frequently Asked <br /> Questions
            </h2>

            <p className="mt-6 text-[16px] text-gray-200 leading-relaxed">
              Find answers to the most common questions about Momentor — our mentorship,
              education journalism, future-skills training, and global internship programs.
              If you’re exploring your career direction or planning your next step, this
              section will help you understand how Momentor can guide your future.
            </p>
          </div>
        </div>

        {/* RIGHT FAQ CARD — GOLD SEE-THROUGH */}
        <div className="bg-[#B08D55]/20 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 max-w-2xl w-full self-center lg:self-stretch flex flex-col justify-center border border-[#B08D55]/30">
          {faqs.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex justify-between items-center py-5 text-left cursor-pointer"
              >
                <span className="text-[16px] font-medium text-white leading-snug pr-6">
                  {item.q}
                </span>

                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full transition text-white
                    ${openIndex === index ? "bg-[#B08D55]/60" : "bg-[#B08D55]/40"}`}
                >
                  {openIndex === index ? <IoRemove size={16} /> : <IoAdd size={16} />}
                </span>
              </button>

              {openIndex === index && (
                <p className="text-[14px] text-gray-200 pb-5 leading-[1.75] pr-10">
                  {item.a}
                </p>
              )}

              {index !== faqs.length - 1 && <hr className="border-white/20" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
