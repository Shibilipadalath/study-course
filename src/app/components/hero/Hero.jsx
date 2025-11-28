"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-blobs pt-28 pb-20 bg-[#FFEFEA] relative">
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-14 px-6 md:px-10 lg:px-24">

        {/* -------- LEFT CONTENT -------- */}
        <div className="flex-1 space-y-6">
          
          {/* Heading */}
          <h1 className="font-semibold text-[#1a1a1a] leading-[1.15] tracking-tight">
            <span className="block text-[38px] md:text-[64px] whitespace-nowrap">
              Transform Your Future
            </span>

            <span className="block text-[38px] md:text-[64px] text-[#CF6943]">
              With Knowledge
            </span>
          </h1>



          {/* Subtitle */}
          <p className="text-[#070606] text-lg max-w-lg leading-relaxed">
            We provide accessible and effective education designed to help
            learners grow with confidence.
          </p>


          {/* Buttons */}
          <div className="flex gap-5">
            <button className="flex items-center gap-2 bg-[#CF6943] text-white px-10 py-2 rounded-lg text-base font-medium shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:brightness-110 transition">
              Admission <ArrowRight className="w-4 h-4" />
            </button>

            <button className="border border-[#CF6943] text-[#CF6943] px-10 py-2 rounded-lg text-base font-medium hover:bg-[#FDEEE8] transition">
              Get Free Trial
            </button>
          </div>

          
        </div>

        {/* -------- RIGHT IMAGE -------- */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/images/Student.png"
            alt="Student"
            width={600}
            height={550}
            className="object-contain drop-shadow-2xl mask-gradient"
            priority
          />
          <div className="absolute bottom-0 w-[400px] h-[120px] blur-3xl rounded-full bg-[#CF6943]/20"></div>
        </div>

      </div>
    </section>
  );
}
