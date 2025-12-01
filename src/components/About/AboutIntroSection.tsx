"use client";

import Image from "next/image";
import CountUp from "react-countup";

export default function AboutIntroSection() {
  return (
    <section className="w-full bg-[#FFFFFF] pt-12 pb-6">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Title + Paragraph */}
        <div className="mb-10">
          <h2 className="text-[26px] md:text-[32px] font-semibold text-[#070606]">
            About us
          </h2>
          <p className="text-sm md:text-[15px] text-gray-600 mt-2 max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing. Pulvinar sit aliquam ipsum rhoncus turpis pellentesque vestibulum condimentum orci. Cras tristique eros amet etiam quam purus morbi. Id ultricies sed placerat pellentesque et adipiscing nec. Commodo.
          </p>
        </div>

        {/* Image + Text Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <Image
            src="/images/about1.png"
            width={520}
            height={350}
            alt="About Section"
            className="rounded-xl object-cover w-full shadow-sm"
          />

          {/* Text Content */}
          <div>
            <h3 className="text-[22px] md:text-[26px] font-semibold text-[#070606] leading-tight">
              Shaping Learners. <br /> Empowering Futures
            </h3>

            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mt-4">
              Lorem ipsum dolor sit amet consectetur. Mi gravida eros sed tortor porttitor eu varius. 
              Gravida sem scelerisque id volutpat. Ultrices consectetur habitasse ultricies mattis velit. 
              Quis sodales est cras nibh in urna amet ullamcorper accumsan non molestie. Enim quis ultrices 
              arcu amet adipiscing massa commodo a libero egestas integer id placerat. Mi ut pharetra lorem 
              gravida tincidunt aliquet consectetur suspendisse. Integer sit elementum netus posuere volutpat 
              velit diam pretium. Tristique imperdiet nunc odio lorem ridiculus.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 text-center gap-6 mt-16">
          {/* Stat 1 */}
          <div>
            <p className="text-[28px] md:text-[32px] font-bold text-[#CF6943]">
              <CountUp end={28000} duration={2} separator="," />+
            </p>
            <p className="text-gray-700 text-[13px] mt-1">Lorem ipsum dolor sit</p>
            <p className="text-gray-500 text-[11px]">amet consectetur.</p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="text-[28px] md:text-[32px] font-bold text-[#CF6943]">
              <CountUp end={35000} duration={2} separator="," />+
            </p>
            <p className="text-gray-700 text-[13px] mt-1">Lorem ipsum dolor sit</p>
            <p className="text-gray-500 text-[11px]">amet consectetur.</p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-[28px] md:text-[32px] font-bold text-[#CF6943]">
              <CountUp end={120} duration={2} />+
            </p>
            <p className="text-gray-700 text-[13px] mt-1">Lorem ipsum dolor sit</p>
            <p className="text-gray-500 text-[11px]">amet consectetur.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
