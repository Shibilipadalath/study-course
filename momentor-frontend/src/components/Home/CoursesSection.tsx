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
    // {
    //   image: "/images/course4.png",
    //   title: "Lorem Ipsum",
    //   desc: "Lorem ipsum dolor sit amet consectetur. Granda facilisis enim non commodo.",
    // },
  ];

  return (
    <section className="w-full bg-[#FFEFEA] py-20">
      <div className="container mx-auto px-6 lg:px-24 text-center">

        {/* Tag */}
        <span className="bg-[#CF6943] text-white text-[11px] px-4 py-1 rounded-full shadow-md">
          Our Courses
        </span>

        {/* Title */}
        <h2 className="text-[28px] md:text-[34px] font-semibold text-[#070606] leading-snug mt-4">
          Choice Favourite Course <br /> From Top Categories
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-14">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>

        {/* View button */}
        {/* <button className="mt-10 flex items-center justify-center gap-2 mx-auto bg-[#CF6943] text-white text-sm px-6 py-3 rounded-lg hover:bg-[#b85a39] transition font-medium">
          View more →
        </button> */}
      </div>
    </section>
  );
}
