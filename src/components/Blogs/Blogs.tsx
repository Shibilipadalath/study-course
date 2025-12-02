"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";

const blogs = [
  { id: 1, img: "/images/blogs1.png", title: "Lorem ipsum dolor sit amet consectetur.", date: "01 Dec, 2025", author: "Demo name" },
  { id: 2, img: "/images/blogs2.png", title: "Lorem ipsum dolor sit amet consectetur.", date: "01 Dec, 2025", author: "Demo name" },
  { id: 3, img: "/images/blogs3.png", title: "Lorem ipsum dolor sit amet consectetur.", date: "01 Dec, 2025", author: "Demo name" },
  { id: 4, img: "/images/blogs4.png", title: "Lorem ipsum dolor sit amet consectetur.", date: "01 Dec, 2025", author: "Demo name" },
];

export default function BlogsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-24 text-center">

        {/* -------- Heading -------- */}
        <h2 className="text-[30px] md:text-[36px] font-semibold text-[#070606]">
          Explore Our Blog & Articles
        </h2>
        <p className="text-gray-600 text-[14px] md:text-[15px] mt-3 max-w-2xl mx-auto leading-[1.6]">
          Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing. Pulvinar sit aliquam ipsum rhoncus turpis pellentesque vestibulum condimentum orci.
        </p>

        {/* -------- Blogs Grid -------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14 text-left">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* IMAGE + OVERLAY */}
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={650}
                  height={350}
                  className="rounded-xl object-cover w-full h-[230px] md:h-[350px]"
                />

                {/* Overlay bottom bar - LESS blur, more readable */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/30 backdrop-blur-none px-4 py-4 flex justify-between text-[13px] text-[#333] items-center">
                  <div className="leading-tight">
                    <p className="font-semibold text-[14px]">{blog.author}</p>
                    <p className="text-gray-700 text-[12px]">{blog.date}</p>
                  </div>

                  {/* Icons */}
                  <div className="flex gap-4 text-gray-600">
                    <ThumbsUp size={16} className="cursor-pointer hover:text-[#CF6943] transition" />
                    <MessageCircle size={16} className="cursor-pointer hover:text-[#CF6943] transition" />
                    <Share2 size={16} className="cursor-pointer hover:text-[#CF6943] transition" />
                  </div>
                </div>
              </div>

              {/* TEXT CONTENT — BOLDER & STRONGER LIKE FIGMA */}
              <h3 className="font-semibold text-[20px] md:text-[22px] text-[#070606] leading-snug">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-[14px] leading-[1.7]">
                Lorem ipsum dolor sit amet consectetur. Sed orci scelerisque neque condimentum vitae non. Mauris malesuada
                velit aliquet diam donec posuere suspendisse vitae luctus. Sit bibendum aliquet dui nibh. <span className="text-[#CF6943] cursor-pointer hover:underline">Read More...</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* -------- Load More Button -------- */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 text-white bg-[#CF6943] rounded-lg shadow-md hover:brightness-110 transition">
            Load More →
          </button>
        </div>

      </div>
    </section>
  );
}
