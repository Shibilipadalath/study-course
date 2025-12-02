"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing. Pulvinar sit aliquam ipsum rhoncus turpis penatibus vestibulum condimentum orci.",
    points: [
      "Lorem ipsum dolor orci sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit turpis",
    ],
  },
];

const allServices = Array(9)
  .fill(null)
  .map((_, idx) => ({
    ...services[0],
    id: idx,
  }));

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        {/* ---------- Heading ---------- */}
        <h2 className="text-[30px] md:text-[36px] font-semibold text-[#070606]">
          See Our All Services
        </h2>
        <p className="text-gray-600 text-[14px] md:text-[15px] mt-3 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing.
          Pulvinar sit aliquam ipsum rhoncus turpis pellentesque vestibulum luctus.
        </p>

        {/* ---------- Grid ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl min-h-[380px] transition-all duration-300 shadow-md cursor-pointer text-left
                ${
                  hoveredCard === index
                    ? "bg-[#CF6943] text-white scale-[1.03] shadow-xl"
                    : "bg-[#FFEFEA] text-[#070606]"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300
                  ${hoveredCard === index ? "bg-white" : "bg-[#FFD4C6]"}
                `}
              >
                <img
                  src="/images/services-icon.png"
                  alt="Service Icon"
                  className="w-6"
                />
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold leading-snug mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-[14px] leading-[1.6] transition ${
                  hoveredCard === index ? "text-white/90" : "text-gray-700"
                }`}
              >
                {service.desc}
              </p>

              {/* Bullet List with Tick */}
              <ul className="mt-5 space-y-2 text-[14px]">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle
                      size={16}
                      className={`transition ${
                        hoveredCard === index
                          ? "text-white"
                          : "text-[#CF6943]"
                      }`}
                    />
                    <span
                      className={`transition ${
                        hoveredCard === index ? "text-white" : "text-black"
                      }`}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
