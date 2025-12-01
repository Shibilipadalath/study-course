"use client";

import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-6 lg:px-24 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT VISUAL BLOCK */}
        <div className="relative flex-1 flex justify-center">

          {/* BACKGROUND CIRCLE SHAPE */}
          <div className="absolute w-[480px] h-[480px] bg-[#FDEEE8] rounded-full opacity-70 -z-10"></div>

          {/* Outline Circles */}
          <div className="absolute -z-10">
            <svg width="500px" height="500px">
              <circle cx="250" cy="250" r="200" stroke="#CF694350" strokeWidth="1.2" fill="none" />
              <circle cx="250" cy="250" r="160" stroke="#CF694350" strokeWidth="1.2" fill="none" />
              <circle cx="250" cy="250" r="120" stroke="#CF694350" strokeWidth="1.2" fill="none" />
            </svg>
          </div>

          {/* MAIN STUDENT PNG IMAGE */}
          <Image
            src="/images/student2.png"
            alt="Student"
            width={500}
            height={700}
            className="relative z-20 object-contain drop-shadow-lg"
            priority
          />

        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="flex-1">

          {/* Tag */}
          <span className="bg-[#CF6943] text-white text-xs px-4 py-1 rounded-full">
            Why us
          </span>

          {/* Heading */}
          <h2 className="text-[36px] font-semibold text-[#070606] mt-4 leading-tight">
            Why Learners Choose <br /> Momentor
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[16px] leading-[1.7] mt-5 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Vitae et id aliquet risus ut odio.
            Consectetur velit mattis morbi imperdiet. Tellus a ut faucibus id ultrices.
            Amet nulla magna libero at maecenas accumsan diam.
          </p>

          {/* CTA Button */}
          <button className="mt-8 flex items-center gap-2 bg-[#CF6943] text-white px-10 py-3 rounded-lg shadow hover:bg-[#B85A39] transition font-medium">
            View More <IoArrowForwardOutline size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
