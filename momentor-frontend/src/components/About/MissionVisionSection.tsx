"use client";

import Image from "next/image";
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-white pt-10 pb-20 md:pt-12 md:pb-28">
      <div className="container mx-auto px-6 lg:px-24 space-y-14 md:space-y-32">

        {/* ==================== MISSION ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* IMAGE BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Main Image – always visible */}
            <Image
              src="/images/about3.png"
              width={600}
              height={600}
              alt="Mission"
              className="rounded-2xl object-cover w-full max-w-[540px] h-auto"
            />

            {/* Overlay Image – DESKTOP ONLY */}
            <div className="hidden md:block absolute bottom-[-35px] right-[-35px] border-8 border-white rounded-2xl">
              <Image
                src="/images/about1.png"
                width={200}
                height={200}
                alt="overlay"
                className="rounded-xl object-cover w-[180px] h-40"
              />
            </div>
          </motion.div>

          {/* TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[24px] md:text-[26px] font-semibold text-[#070606]">
              Our Mission
            </h3>

            <p className="text-gray-600 text-[15px] mt-4 leading-relaxed max-w-md text-justify">
              Lorem ipsum dolor sit amet consectetur. Mi platea orci sed tortor
              porttitor eu vivamus. Gravida arcu suscipit elit cursus volutpat
              sem. Eget purus auctor aliquet a volutpat cras at enim.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Lorem ipsum dolor sit amet consectetur",
                "Lorem ipsum dolor sit amet adipiscing elit",
                "Lorem ipsum dolor sit amet lorem pellentesque",
                "Lorem ipsum dolor sit amet consectetur",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <IoCheckmarkCircle className="text-[#27C052] text-[22px]" />
                  <span className="text-gray-600 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ==================== VISION ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="text-[24px] md:text-[26px] font-semibold text-[#070606]">
              Our Vision
            </h3>

            <p className="text-gray-600 text-[15px] mt-4 leading-relaxed max-w-md text-justify">
              Lorem ipsum dolor sit amet consectetur. Mi platea orci sed tortor
              porttitor eu vivamus. Gravida arcu suscipit elit cursus volutpat
              sem. Eget purus auctor aliquet a volutpat cras at enim.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Lorem ipsum dolor sit amet consectetur",
                "Lorem ipsum dolor sit amet adipiscing elit",
                "Lorem ipsum dolor sit amet lorem pellentesque",
                "Lorem ipsum dolor sit amet consectetur",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <IoCheckmarkCircle className="text-[#27C052] text-[22px]" />
                  <span className="text-gray-600 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* IMAGE BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center order-1 md:order-2"
          >
            {/* Main Image – always visible */}
            <Image
              src="/images/about2.png"
              width={600}
              height={600}
              alt="Vision"
              className="rounded-2xl object-cover w-full max-w-[540px] h-auto"
            />

            {/* Overlay Image – DESKTOP ONLY */}
            <div className="hidden md:block absolute top-[-35px] left-[-35px] border-8 border-white rounded-2xl">
              <Image
                src="/images/about1.png"
                width={200}
                height={200}
                alt="overlay"
                className="rounded-xl object-cover w-[180px] h-40"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
