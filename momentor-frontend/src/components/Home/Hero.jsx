"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-blobs pt-32 pb-24 bg-[#FFEFEA] relative overflow-hidden">

      {/* Floating Light Background Glow */}
      <div className="absolute left-20 top-10 w-72 h-72 bg-[#CF6943]/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute right-32 bottom-16 w-96 h-96 bg-[#CF6943]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-14 px-6 md:px-10 lg:px-24">

        {/* -------- LEFT CONTENT -------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          {/* Heading */}
          <h1 className="font-semibold text-[#070606] leading-[1.15] tracking-tight">
            <span className="block text-[34px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-semibold whitespace-nowrap">
              Transform Your Future
            </span>
            <span className="block text-[34px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-[#CF6943]">
              With Knowledge
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#070606] text-lg max-w-lg leading-relaxed">
            We provide accessible and effective education designed to help
            learners grow with confidence.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex gap-5"
          >
            <button className="flex items-center gap-2 bg-[#CF6943] text-white px-10 py-3 rounded-lg text-base font-medium shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:brightness-110 transition">
              Admission <ArrowRight className="w-4 h-4" />
            </button>

            <button className="border border-[#CF6943] text-[#CF6943] px-10 py-3 rounded-lg text-base font-medium hover:bg-[#FDEEE8] transition">
              Get Free Trial
            </button>
          </motion.div>
        </motion.div>

        {/* -------- RIGHT IMAGE -------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <Image
            src="/images/student.png"
            alt="Student"
            width={600}
            height={550}
            priority
            className="object-contain drop-shadow-xl mask-gradient"
          />
        </motion.div>
      </div>
    </section>
  );
}
