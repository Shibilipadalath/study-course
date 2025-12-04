"use client";

import { motion } from "framer-motion";

const benefits = [
  { number: "01", title: "Standardization", desc: "Lorem ipsum dolor sit amet consectetur. Id aliquam sit id mauris." },
  { number: "02", title: "Reduced Costs", desc: "Lorem ipsum dolor sit amet consectetur. In morbi nisl massa vitae consequat nisl ultrices nullam." },
  { number: "03", title: "More Customization", desc: "Lorem ipsum dolor sit amet consectetur. Habitasse purus at nisi hac ac turpis ante." },
  { number: "04", title: "Affordable Pricing", desc: "Lorem ipsum dolor sit amet consectetur. Blandit amet felis urna egestas." },
  { number: "05", title: "Learner Satisfaction", desc: "Lorem ipsum dolor sit amet consectetur. Nam mauris massa sagittis tortor feugiat morbi aliquet." },
  { number: "06", title: "Multimedia Materials", desc: "Lorem ipsum dolor sit amet consectetur. Facilisi tincidunt commodo tempus sed porta nulla amet." },
];

export default function OurBenefitsSection() {
  return (
    <section className="w-full pb-24 bg-white">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        
        {/* Title */}
        <h2 className="text-[32px] md:text-[38px] font-semibold text-[#070606]">Our Benefits</h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-[15px] mt-3 max-w-2xl mx-auto leading-[1.7]">
          Lorem ipsum dolor sit amet consectetur. Sit sapien sit maecenas egestas. 
          Tristique fermentum sollicitudin porta fermentum.
        </p>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {benefits.map((item, i) => {
            const isWhiteCard = (i + 1) % 2 === 0; // 2,4,6 white background
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl px-7 py-8 shadow-md border transition 
                  ${isWhiteCard ? "bg-white border-gray-200" : "bg-[#FDF0EB] border-[#F7DCCF]"}`}
              >
                
                {/* NUMBER BADGE DESIGN */}
                <div className="relative w-12 h-12">
                  {/* Faint geometric background */}
                  <div className="absolute inset-0 bg-[#F2DCD3] opacity-60 rounded-full blur-sm"></div>

                  {/* Number */}
                  <span className="relative z-10 font-bold text-[26px] text-[#CF6943]">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <h4 className="font-semibold text-[18px] mt-5 text-[#333]">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-[14px] leading-[1.7] mt-3">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
