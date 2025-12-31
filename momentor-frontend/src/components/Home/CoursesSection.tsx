// "use client";

// import CourseCard from "./CoursesCard";

// export default function CoursesSection() {
//   const courses = [
//     {
//       image: "/images/course1.png",
//       title: "Lorem Ipsum",
//       desc: "Lorem ipsum dolor sit amet consectetur. Granda facilisis enim non commodo.",
//     },
//     {
//       image: "/images/course2.png",
//       title: "Lorem Ipsum",
//       desc: "Lorem ipsum dolor sit amet consectetur. Granda facilisis enim non commodo.",
//     },
//     {
//       image: "/images/course3.png",
//       title: "Lorem Ipsum",
//       desc: "Lorem ipsum dolor sit amet consectetur. Granda facilisis enim non commodo.",
//     },
//     // {
//     //   image: "/images/course4.png",
//     //   title: "Lorem Ipsum",
//     //   desc: "Lorem ipsum dolor sit amet consectetur. Granda facilisis enim non commodo.",
//     // },
//   ];

//   return (
//     <section className="w-full bg-[#FFEFEA] py-20">
//       <div className="container mx-auto px-6 lg:px-24 text-center">

//         {/* Tag */}
//         <span className="bg-[#CF6943] text-white text-[11px] px-4 py-1 rounded-full shadow-md">
//           Our Courses
//         </span>

//         {/* Title */}
//         <h2 className="text-[28px] md:text-[34px] font-semibold text-[#070606] leading-snug mt-4">
//           Choice Favourite Course <br /> From Top Categories
//         </h2>

//         {/* Card Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-14">
//           {courses.map((course, i) => (
//             <CourseCard key={i} {...course} />
//           ))}
//         </div>

//         {/* View button */}
//         {/* <button className="mt-10 flex items-center justify-center gap-2 mx-auto bg-[#CF6943] text-white text-sm px-6 py-3 rounded-lg hover:bg-[#b85a39] transition font-medium">
//           View more →
//         </button> */}
//       </div>
//     </section>
//   );
// }
"use client";

import CourseCard from "./CoursesCard";

export default function CoursesSection() {
  const courses = [
    {
      image: "/images/course1.png",
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur. Granda facilisis enim non commodo.",
    },
    {
      image: "/images/course2.png",
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur. Granda facilisis enim non commodo.",
    },
    {
      image: "/images/course3.png",
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur. Granda facilisis enim non commodo.",
    },
  ];

  return (
    <section className="w-full bg-black py-20">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        {/* Tag */}
        <span className="bg-[#CF6943] text-white text-[11px] px-4 py-1 rounded-full shadow-md">
          Our Courses
        </span>

        {/* Title */}
        <h2 className="text-[28px] md:text-[34px] font-semibold text-white leading-snug mt-4">
          Choice Favourite Course <br /> From Top Categories
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-14">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>

        {/* View button (kept commented as requested) */}
        {/*
        <button className="mt-10 flex items-center justify-center gap-2 mx-auto
          bg-gradient-to-r from-[#FF9A6B] via-[#CF6943] to-[#2A2A2A]
          text-white text-sm px-6 py-3 rounded-lg font-medium
          shadow-[0_8px_28px_rgba(255,154,107,0.35)]
          hover:from-[#2A2A2A] hover:via-[#CF6943] hover:to-[#FF9A6B]
          transition-all duration-300">
          View more →
        </button>
        */}
      </div>
    </section>
  );
}
