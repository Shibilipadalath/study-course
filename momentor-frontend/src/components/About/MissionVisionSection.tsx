"use client";

import Image from "next/image";
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="w-full pb-16 md:pb-28 pt-12 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-24 space-y-16 md:space-y-32">
        {/* ==================== MISSION ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
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
              className="rounded-2xl object-cover w-full max-w-[540px] h-auto aspect-540/440"
            />

            {/* Small Overlay Image */}
            <div className="absolute -bottom-5 md:bottom-[-35px] -right-2.5 md:right-[-35px] border-4 md:border-8 border-white rounded-2xl hidden sm:block">
              <Image
                src="/images/about1.png"
                width={200}
                height={200}
                alt="overlay"
                className="rounded-xl object-cover w-[120px] md:w-[180px] h-20 md:h-40"
              />
            </div>
          </motion.div>

          {/* Mission Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:pl-4"
          >
            <h3 className="text-[26px] font-semibold text-[#070606]">
              Our Mission
            </h3>

            <p className="text-gray-600 text-[15px] mt-4 max-w-md text-justify tracking-normal leading-relaxed">
              Our mission is to empower youth with clarity, mindset, and
              future-ready skills — by exposing the truth about careers,
              building real awareness, and opening global opportunities that
              transform confidence, employability, and purpose. We exist to fix
              the core problem students face today: lack of direction, lack of
              exposure, and lack of understanding about how the world of work is
              changing.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Provide clarity and direction by telling the truth about careers and industries.",
                "Equip youth with future skills that make them confident and employable.",
                "Create pathways for global exposure, mentorship, and real opportunities.",
                "Build a movement that transforms the way young people learn, think, and grow.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Vision Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full order-2 md:order-1 md:pl-8 md:pr-4"
          >
            <h3 className="text-[26px] font-semibold text-[#070606]">
              Our Vision
            </h3>

            <p className="text-gray-600 text-[15px] mt-4 max-w-md text-justify tracking-normal leading-relaxed">
              Our vision is to build a generation that is confident,
              aspirational, globally competitive, and deeply aware of their
              career possibilities. We aim to reshape the education-to-career
              journey in India — so that every young person knows who they are,
              what they want, and how to succeed in the world of tomorrow.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Create an India where youth discover careers through awareness — not guesswork.",
                "Redefine employability with mindset, skill, exposure, and real-world readiness.",
                "Build the world’s most trusted education journalism and future-skills platform.",
                "Unlock access to global internships, industries, mentors, and opportunities.",
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
              className="rounded-2xl object-cover w-full max-w-[540px] h-auto aspect-540/440"
            />

            {/* Small Overlay Image (top left) */}
            <div className="absolute -top-5 md:top-[-35px] -left-2.5 md:left-[-35px] border-4 md:border-8 border-white rounded-2xl hidden sm:block">
              <Image
                src="/images/about1.png"
                width={200}
                height={200}
                alt="overlay"
                className="rounded-xl object-cover w-[120px] md:w-[180px] h-20 md:h-40"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
