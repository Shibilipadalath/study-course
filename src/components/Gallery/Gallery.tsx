"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const tabs = ["Alumni", "Events", "Sports", "Students"];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("Alumni");

  const images = [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/gallery4.png",
    "/images/gallery5.png",
    "/images/gallery6.png",
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">

        {/* Heading */}
        <h2 className="text-[30px] md:text-[36px] font-semibold text-[#070606]">
          Explore Our Gallery
        </h2>
        <p className="text-gray-600 text-[13px] md:text-[14px] mt-3 max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing. Pulvinar quis justo
          nunc turpis penatibus vestibulum condimentum orci. Cras tristique cras amet etiam quam
          purus morbi. Id ipsum sed placerat phasellus a est adipiscing cras. Commodo.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm md:text-[15px] pb-2 border-b-2 transition ${
                activeTab === tab
                  ? "border-[#CF6943] text-[#CF6943] font-medium"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ---- 3x2 Grid Layout (all cards aligned) ---- */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={src + index}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt=""
                width={450}
                height={350}
                className="w-full h-[260px] md:h-80 object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
