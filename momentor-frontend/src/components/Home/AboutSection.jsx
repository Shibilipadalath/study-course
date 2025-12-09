"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full pt-16 py-24 bg-[#F4F4F4] relative overflow-hidden">

      <div className="relative z-10 container mx-auto px-6 lg:px-24">

        {/* TAG */}
        <div className="flex justify-center">
          <span className="bg-[#CF6943] text-white text-sm font-medium px-6 py-2 rounded-full shadow-md">
            About us
          </span>
        </div>

        {/* TITLE — WIDER + CENTERED */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            max-w-5xl 
            mx-auto 
            mt-8 
            text-center
            text-[30px] 
            md:text-[40px] 
            font-semibold 
            text-[#070606]
            leading-[1.3]
          "
        >
          We provide accessible and effective education designed to help learners
          grow with confidence.
        </motion.h2>

        {/* CONTENT — CENTERED BLOCK, LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="
            max-w-5xl 
            mx-auto 
            mt-8 
            text-[#474747]
            text-[16px]
            space-y-6
            text-justify tracking-tight leading-relaxed
          "
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae et id aliquet risus ut odio.
            Consectetur velit mattis morbi imperdiet. Tellus a ut faucibus id ultrices.
            Amet nulla magna libero at maecenas accumsan diam. Laoreet ut convallis
            placerat adipiscing sed. Mauris amet ut integer sem a eget nibh sed nullam.
            
            Mi ipsum vestibulum mollis laoreet. Integer faucibus eget vel viverra auctor.
            Sollicitudin purus sed nec aenean cras fermentum eget. Scelerisque lorem et
            dignissim pharetra faucibus amet tincidunt facilisis. Sit magna euismod amet,
            pharetra eget tempor bibendum.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="flex flex-col md:flex-row gap-16 justify-center mt-20">
          <div className="text-center">
            <p className="text-[42px] font-semibold text-[#CF6943]">
              <CountUp end={28000} duration={2.5} separator="," />+
            </p>
            <p className="text-[#474747] mt-2">Active Students</p>
          </div>

          <div className="text-center">
            <p className="text-[42px] font-semibold text-[#CF6943]">
              <CountUp end={35000} duration={2.5} separator="," />+
            </p>
            <p className="text-[#474747] mt-2">Video Classes</p>
          </div>

          <div className="text-center">
            <p className="text-[42px] font-semibold text-[#CF6943]">
              <CountUp end={120} duration={2} />+
            </p>
            <p className="text-[#474747] mt-2">Online Courses</p>
          </div>
        </div>
      </div>
    </section>
  );
}
