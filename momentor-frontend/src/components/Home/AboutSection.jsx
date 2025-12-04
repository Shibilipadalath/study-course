"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full py-12 bg-[#F4F4F4] relative overflow-hidden">

      {/* Smooth Fade from Hero */}
      {/* Smooth Fade from Hero */}
<div className="absolute -top-10 left-0 w-full h-20 bg-linear-to-b from-[#FFEFEA] to-[#F4F4F4] pointer-events-none"></div>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-white/40 to-[#F4F4F4] opacity-70 pointer-events-none"></div>

      {/* Floating Soft Orange Blobs */}
      <div className="absolute left-24 top-12 w-44 h-44 bg-[#CF6943]/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute right-24 bottom-10 w-56 h-56 bg-[#CF6943]/10 rounded-full blur-[80px]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-24 text-center">

        {/* Tag Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <span className="bg-[#CF6943] text-white text-sm font-medium px-6 py-2 rounded-full shadow-md">
            About us
          </span>
        </motion.div>

        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-6 text-[28px] md:text-[36px] font-semibold text-[#070606] leading-[1.35]"
        >
          We provide accessible and effective education designed to help learners grow with confidence.
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-5 text-[#474747] text-[16px] leading-[1.7]"
        >
          Lorem ipsum dolor sit amet consectetur. Vitae et id aliquet risus ut odio. Consectetur velit mattis morbi imperdiet. Tellus a ut faucibus id ultrices.
          Amet nulla magna libero at maecenas accumsan diam. Laoreet ut convallis placerat adipiscing sed. Mauris amet ut integer sem a eget nibh sed nullam.
          Mi ipsum vestibulum mollis laoreet.
        </motion.p>

        {/* Stats with Counter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-14 justify-center items-center mt-20"
        >

          <div className="text-center">
            <p className="text-[42px] font-semibold text-[#CF6943]">
              <CountUp end={28000} duration={2.5} separator="," />+
            </p>
            <p className="text-[#474747] text-[15px] mt-2">Active Students</p>
          </div>

          <div className="text-center">
            <p className="text-[42px] font-semibold text-[#CF6943]">
              <CountUp end={35000} duration={2.5} separator="," />+
            </p>
            <p className="text-[#474747] text-[15px] mt-2">Video Classes</p>
          </div>

          <div className="text-center">
            <p className="text-[42px] font-semibold text-[#CF6943]">
              <CountUp end={120} duration={2} />+
            </p>
            <p className="text-[#474747] text-[15px] mt-2">Online Courses</p>
          </div>

        </motion.div>
      </div>
      <div className="mt-20 mb-2 w-full flex justify-center">
      <div className="h-px w-[90%] max-w-[1030px] border border-transparent"
          style={{
            borderImage: "linear-gradient(90deg, #F2F0F0 0%, #000000 50%, #F2F0F0 100%) 1"
          }}>
      </div>
    </div>

    </section>
    
  );
}
