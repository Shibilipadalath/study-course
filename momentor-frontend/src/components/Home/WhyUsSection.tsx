"use client";

import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-6 lg:px-24 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT VISUAL BLOCK */}
        <div className="relative flex-1 flex justify-start -ml-4">
          {/*            ↑ move image a bit left */}

          {/* BACKGROUND CIRCLE */}
          <div className="absolute w-[480px] h-[480px] bg-[#FDEEE8] rounded-full opacity-70 -z-10 left-0"></div>

          {/* Outline Circles */}
          <div className="absolute -z-10 left-0">
            <svg width="500" height="500">
              <circle cx="250" cy="250" r="200" stroke="#CF694350" strokeWidth="1.2" fill="none" />
              <circle cx="250" cy="250" r="160" stroke="#CF694350" strokeWidth="1.2" fill="none" />
              <circle cx="250" cy="250" r="120" stroke="#CF694350" strokeWidth="1.2" fill="none" />
            </svg>
          </div>

          {/* IMAGE */}
          <Image
            src="/images/student2.png"
            alt="Student"
            width={500}
            height={700}
            className="relative z-20 
                      object-contain
                      drop-shadow-lg
                      w-[520px] h-auto
                      md:w-[580px]
                      lg:w-[630px]"
            priority
          />

        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="flex-1">

          <span className="bg-[#CF6943] text-white text-xs px-4 py-1 rounded-full">
            Why us
          </span>

          <h2 className="text-[36px] font-semibold text-[#070606] mt-4 leading-tight max-w-2xl">
            Why Learners Choose <br /> Momentor
          </h2>

          {/* ✅ Wider text block */}
          <p className="text-gray-600 text-[16px] leading-[1.8] mt-5 max-w-2xl text-left">
            Lorem ipsum dolor sit amet consectetur. Vitae et id aliquet risus ut odio.
            Consectetur velit mattis morbi imperdiet. Tellus a ut faucibus id ultrices.
            Amet nulla magna libero at maecenas accumsan diam. Laoreet ut convallis
            placerat adipiscing sed. Mauris amet ut integer sem a eget nibh sed nullam.
          </p>

          <button className="mt-8 flex items-center gap-2 bg-[#CF6943] text-white px-10 py-3 rounded-lg shadow hover:bg-[#B85A39] transition font-medium">
            View More <IoArrowForwardOutline size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
