"use client";

import Image from "next/image";
import CountUp from "react-countup";

export default function AboutIntroSection() {
  return (
    <section className="w-full bg-white pt-20 pb-12">
      <div className="container mx-auto px-6 lg:px-24">

        {/* ---------- Title & Description ---------- */}
        <div className="mb-14">
          <h2 className="text-[30px] md:text-[36px] font-semibold text-[#070606]">
            About us
          </h2>
          <p className="text-[15px] text-gray-600 mt-3 max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing. Pulvinar sit aliquam ipsum rhoncus 
            turpis pellentesque vestibulum condimentum orci. Cras tristique eros amet etiam quam purus morbi. 
            Id ultricies sed placerat pellentesque et adipiscing nec. Commodo.
          </p>
        </div>

        {/* ---------- Image + Text Content ---------- */}
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">
          
          {/* Image */}
          <Image
            src="/images/about1.png"
            width={560}
            height={380}
            alt="About section"
            className="rounded-xl object-cover shadow-md"
          />

          {/* Text */}
          <div className="max-w-xl">
            <h3 className="text-[28px] md:text-[32px] font-semibold text-[#070606] leading-tight">
              Shaping Learners. <br /> Empowering Futures
            </h3>

            <p className="text-gray-600 text-[15px] leading-[1.8] mt-4">
              Lorem ipsum dolor sit amet consectetur. Mi gravida eros sed tortor porttitor eu varius. Gravida arcu
              suscipit elit cursus volutpat sem. Eget purus auctor aliquet a volutpat cras at enim. In enim amet
              ullamcorper commodo ac lobortis tellus. Auctor vel nunc adipiscing massa facilisi commodo a laoreet
              dignissim. Imperdiet dis at pharetra sit pellentesque gravida rhoncus.
            </p>
          </div>
        </div>

        {/* ---------- Stats with Soft Glow ---------- */}
        <div className="relative mt-20 pb-10 flex justify-center">

          {/* Background Glow */}
          <div className="absolute inset-0 bg-[#FFEFEA] blur-[90px] rounded-full opacity-80"></div>

          {/* Stats */}
          <div className="relative flex flex-col sm:flex-row gap-16 sm:gap-28 text-center">
            
            {/* Stat Item */}
            <div>
              <p className="text-[36px] font-bold text-[#0A0A0A]">
                <CountUp end={28000} duration={2} separator="," />+
              </p>
              <p className="text-gray-700 text-[14px] mt-2">Lorem ipsum dolor sit</p>
              <p className="text-gray-500 text-[12px]">amet consectetur.</p>
            </div>

            <div>
              <p className="text-[36px] font-bold text-[#0A0A0A]">
                <CountUp end={35000} duration={2} separator="," />+
              </p>
              <p className="text-gray-700 text-[14px] mt-2">Lorem ipsum dolor sit</p>
              <p className="text-gray-500 text-[12px]">amet consectetur.</p>
            </div>

            <div>
              <p className="text-[36px] font-bold text-[#0A0A0A]">
                <CountUp end={120} duration={2} />+
              </p>
              <p className="text-gray-700 text-[14px] mt-2">Lorem ipsum dolor sit</p>
              <p className="text-gray-500 text-[12px]">amet consectetur.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
