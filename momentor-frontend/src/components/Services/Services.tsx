"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Service } from "@/types/service-types";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";


export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/services`, {
          cache: "no-store",
        });

        if (!res.ok) {
          console.error("Failed to fetch services");
          return;
        }

        const data = await res.json();
        setServices(data.services || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

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
        {loading ? (
          <div className="mt-14 text-center">
            <p className="text-gray-600">Loading services...</p>
          </div>
        ) : services.length === 0 ? (
          <div className="mt-14 text-center">
            <p className="text-gray-600">No services available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {services.map((service, index) => {
              return (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <motion.div
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-xl min-h-[380px] transition-all duration-300 shadow-md cursor-pointer flex flex-col items-start justify-center
                      ${
                        hoveredCard === index
                          ? "bg-[#CF6943] text-white shadow-xl"
                          : "bg-[#FFEFEA] text-[#070606]"
                      }
                    `}
                  >
                  {/* Title */}
                  <h3 className="text-[18px] font-semibold  mb-2">
                    {service.title}
                  </h3>

                  {/* Description - Limited to 4 lines */}
                  <p
                    className={`text-[14px] leading-[1.6] transition text-justify ${
                      hoveredCard === index ? "text-white/90" : "text-gray-700"
                    }`}
                  >
                    {service.description.slice(0, 400)}...
                  </p>

                  {/* Bullet List with Tick */}
                  {service.points && service.points.length > 0 && (
                    <ul className="mt-5 space-y-2 text-[14px] w-full text-justify">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-justify">
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
                  )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
