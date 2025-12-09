"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="py-12 bg-[#F4F4F4] relative overflow-hidden">

      {/* Background Circular Pattern */}
      <svg
        className="absolute right-0 top-10 opacity-30 -z-10 hidden md:block"
        width="550"
        height="550"
        viewBox="0 0 600 600"
      >
        <circle cx="300" cy="300" r="260" stroke="#CF694345" strokeWidth="1" fill="none" />
        <circle cx="300" cy="300" r="210" stroke="#CF694345" strokeWidth="1" fill="none" />
        <circle cx="300" cy="300" r="160" stroke="#CF694345" strokeWidth="1" fill="none" />
        <circle cx="300" cy="300" r="110" stroke="#CF694345" strokeWidth="1" fill="none" />
      </svg>

      {/* Decorative Orange Dot */}
      <div className="absolute left-16 md:left-32 top-32 w-12 h-12 bg-[#CF6943] rounded-full opacity-90 -z-10" />

      <div className="container mx-auto px-6 lg:px-24 text-center relative z-10">

        {/* Small Tag */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#CF6943] text-white text-[12px] px-4 py-1 rounded-full inline-block shadow-md"
        >
          Testimonials
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-4 text-[30px] md:text-[36px] font-semibold text-[#070606]"
        >
          See Why We are Rated #1
        </motion.h2>

        {/* Sub Heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[#CF6943] text-[20px] font-semibold mt-1"
        >
          Our Students Says
        </motion.p>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white mt-14 rounded-xl shadow-lg 
                    max-w-6xl mx-auto 
                    px-14 py-12"
        >
          <h3 className="text-[18px] font-semibold text-[#070606] mb-4">
            Lorem Ipsum
          </h3>

          <p className="text-[15px] text-gray-600 text-justify tracking-tight leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Dolor ipsum vel porta mauris ornare pretium eu tortor.
            Facilisis cras cras egestas turpis turpis quis nibh. Ultramcorper vitae id posuere senectus
            facilisis. Facilisis elementum potenti mattis orci id tincidunt dui. Eget volutpat aenean non
            blandit dictum purus tempor. Nibh malesuada eget consectetur pellentesque a neque pellentesque
            placerat. Neque venenatis odio integer nisi ipsum mauris ac. Nec leo suscipit commodo habitasse
            fusce enim diam odio tellus. Tristique pretium gravida adipiscing nisi turpis dui volutpat quis. 
            Non maecenas tellus euismod quis semper diam ultrices gravida. Fames bibendum cursus sagittis sed 
            volutpat. Maecenas ut varius sapien amet elit. Netus vestibulum a porttitor consequat. 
            Non vitae in aenean mattis ipsum. A vel vel libero bibendum a donec id ultrices.
          </p>

          {/* Profile */}
          <div className="mt-8 flex flex-col items-center">
            <Image
              src="/images/profile.jpeg"
              width={56}
              height={56}
              alt="Reviewer"
              className="rounded-full border-2 border-[#CF6943]"
            />
            <p className="mt-2 text-[15px] font-semibold text-[#070606]">
              John Wick
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
