"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

interface Blog {
  id: string | number;
  title: string;
  image?: string | null;
  description: string;
}

export default function BlogsSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [page, setPage] = useState(1);

  const PER_PAGE = 4; // 4 blogs per "page"

  useEffect(() => {
    const fetchBlogs = async (): Promise<void> => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/blogs`, {
          cache: "no-store",
        });

        if (!res.ok) {
          console.error("Failed to fetch blogs");
          return;
        }

        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    void fetchBlogs();
  }, []);

  const getImageUrl = (raw?: string | null): string | null => {
    if (!raw) return null;
    if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
    return `${API_BASE_URL}${raw}`;
  };

  const toggleReadMore = (id: string): void => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Pagination calculations
  const totalPages = Math.ceil(blogs.length / PER_PAGE);
  const startIndex = (page - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return (
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-24 text-center">
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-24 text-center">
          <p className="text-gray-600">No blogs available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        <h2 className="text-[30px] md:text-[36px] font-semibold text-[#070606]">
          Explore Our Blog & Articles
        </h2>
        <p className="text-gray-600 text-[14px] md:text-[15px] mt-3 max-w-2xl mx-auto leading-[1.6]">
          Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing.
          Pulvinar sit aliquam ipsum rhoncus turpis pellentesque vestibulum
          condimentum orci.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14 text-left">
          {paginatedBlogs.map((blog) => {
            const imageUrl = getImageUrl(blog.image ?? null);
            const id = String(blog.id);
            const isExpanded = expanded[id] ?? false;
            const text = isExpanded
              ? blog.description
              : blog.description.length > 180
              ? `${blog.description.slice(0, 180)}...`
              : blog.description;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {/* IMAGE + OVERLAY – CLICKABLE TO DETAIL PAGE */}
                <div className="relative rounded-xl overflow-hidden">
                  <Link href={`/blogs/${id}`}>
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={blog.title}
                        width={650}
                        height={350}
                        className="rounded-xl object-cover w-full h-[230px] md:h-[350px]"
                      />
                    ) : (
                      <div className="w-full h-[230px] md:h-[350px] rounded-xl bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                        No image
                      </div>
                    )}
                  </Link>

                  <div className="absolute bottom-0 left-0 right-0 bg-white/30 px-4 py-4 flex justify-between text-[13px] text-[#333] items-center">
                    <div className="leading-tight">
                      <p className="font-semibold text-[14px]">Blog</p>
                    </div>
                    <div className="flex gap-4 text-gray-600">
                      <ThumbsUp
                        size={16}
                        className="cursor-pointer hover:text-[#CF6943] transition"
                      />
                      <MessageCircle
                        size={16}
                        className="cursor-pointer hover:text-[#CF6943] transition"
                      />
                      <Share2
                        size={16}
                        className="cursor-pointer hover:text-[#CF6943] transition"
                      />
                    </div>
                  </div>
                </div>

                {/* TEXT CONTENT + READ MORE (NO NAVIGATION) */}
                <h3 className="font-semibold text-[20px] md:text-[22px] text-[#070606] leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-[14px] leading-[1.7]">
                  {text}
                  {blog.description.length > 180 && (
                    <button
                      type="button"
                      onClick={() => toggleReadMore(id)}
                      className="text-[#CF6943] hover:underline ml-1 underline-offset-4"
                    >
                      {isExpanded ? "Show Less" : "Read More..."}
                    </button>
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* PAGINATION CONTROLS */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            type="button"
            onClick={handlePrev}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg border text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>

          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>

          <button
            type="button"
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-lg bg-[#CF6943] text-white text-sm shadow-md hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Load More →
          </button>
        </div>
      </div>
    </section>
  );
}
