"use client";

import Image from "next/image";
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="w-full pb-28 pt-12 bg-white">
      <div className="container mx-auto px-6 lg:px-24 space-y-32">
        {/* ==================== MISSION ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Image Group */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full flex justify-center"
          >
            {/* Main Image */}
            <Image
              src="/images/about3.png"
              width={600}
              height={600}
              alt="Mission"
              className="rounded-2xl object-cover w-[540px] h-[440px]"
            />

            {/* Small Overlay Image */}
            <div className="absolute bottom-[-35px] right-[-35px] border-8 border-white rounded-2xl">
              <Image
                src="/images/about1.png"
                width={200}
                height={200}
                alt="overlay"
                className="rounded-xl object-cover w-[180px] h-[160px]"
              />
            </div>
          </motion.div>

          {/* Mission Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pl-4"
          >
            <h3 className="text-[26px] font-semibold text-[#070606]">
              Our Mission
            </h3>

            <p className="text-gray-600 text-[15px] leading-[1.8] mt-4 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Mi platea orci sed tortor
              porttitor eu vivamus. Gravida arcu suscipit elit cursus volutpat
              sem. Eget purus auctor aliquet a volutpat cras at enim. In enim
              amet ullamcorper commodo ac lobortis tellus. Arcu vel nunc
              adipiscing massa facilisi commodo a laoreet dignissim. Imperdiet
              dis at pharetra sit pellentesque gravida rhoncus. Ipsum cras
              pharetra cursus mi. Sodales pharetra molestie vestibulum aliquam
              mi habitasse lectus eget ut.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Lorem ipsum dolor sit amet consectetur. Mi pharetra sed tortor",
                "Lorem ipsum dolor sit amet consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet lorem pellentesque",
                "Lorem ipsum dolor sit amet consectetur adipiscing",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <IoCheckmarkCircle className="text-[#27C052] text-[22px]" />
                  <span className="text-gray-600 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ==================== VISION ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Vision Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 pr-4"
          >
            <h3 className="text-[26px] font-semibold text-[#070606]">
              Our Vision
            </h3>

            <p className="text-gray-600 text-[15px] leading-[1.8] mt-4 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Mi platea orci sed tortor
              porttitor eu vivamus. Gravida arcu suscipit elit cursus volutpat
              sem. Eget purus auctor aliquet a volutpat cras at enim. In enim
              amet ullamcorper commodo ac lobortis tellus. Arcu vel nunc
              adipiscing massa facilisi commodo a laoreet dignissim. Imperdiet
              dis at pharetra sit pellentesque gravida rhoncus. Ipsum cras
              pharetra cursus mi. Sodales pharetra molestie vestibulum aliquam
              mi habitasse lectus eget ut.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Lorem ipsum dolor sit amet consectetur. Mi pharetra sed tortor",
                "Lorem ipsum dolor sit amet consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet lorem pellentesque",
                "Lorem ipsum dolor sit amet consectetur adipiscing",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <IoCheckmarkCircle className="text-[#27C052] text-[22px]" />
                  <span className="text-gray-600 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image Group */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full flex justify-center order-1 md:order-2"
          >
            {/* Main Image */}
            <Image
              src="/images/about2.png"
              width={600}
              height={600}
              alt="Vision"
              className="rounded-2xl object-cover w-[540px] h-[440px]"
            />

            {/* Small Overlay Image (top left) */}
            <div className="absolute top-[-35px] left-[-35px] border-8 border-white rounded-2xl">
              <Image
                src="/images/about1.png"
                width={200}
                height={200}
                alt="overlay"
                className="rounded-xl object-cover w-[180px] h-[160px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
