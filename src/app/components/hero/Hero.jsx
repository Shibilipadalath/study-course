"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 bg-gradient-to-b from-[#FFF7F2] to-white pb-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        
        {/* ---- LEFT CONTENT ---- */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Transform Your Future <br />
            <span className="text-orange-500">With Knowledge</span>
          </h1>

          <p className="text-gray-600 max-w-md">
            We provide accessible and effective education designed to help learners grow with confidence.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Join Now
            </button>

            <button className="border border-orange-500 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition">
              Our Courses
            </button>
          </div>

          {/* ---- STATS ---- */}
          <div className="flex gap-8 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-500">28K+</p>
              <span className="text-sm text-gray-600">Active Students</span>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-orange-500">35K+</p>
              <span className="text-sm text-gray-600">Video Classes</span>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-orange-500">120+</p>
              <span className="text-sm text-gray-600">Online Courses</span>
            </div>
          </div>
        </div>

        {/* ---- RIGHT IMAGE ---- */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/student.png"
            alt="Student"
            width={450}
            height={450}
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
