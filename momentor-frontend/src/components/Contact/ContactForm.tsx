"use client";

import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaLocationDot,
} from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="w-full py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[30px] md:text-[34px] font-semibold text-[#070606]">
              Let’s Get in Touch
            </h2>

            <p className="text-gray-600 text-[15px] mt-4 leading-[1.75] max-w-md">
              Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat
              adipiscing. Pulvinar sit aliquam ipsum rhoncus turpis
              pellentesque vestibulum condimentum.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              <div className="flex gap-4 items-start">
                <FaPhone className="text-[#CF6943] mt-1" />
                <span className="text-[15px] text-[#070606] font-medium">
                  +91 98898 898000
                </span>
              </div>

              <div className="flex gap-4 items-start">
                <FaEnvelope className="text-[#CF6943] mt-1" />
                <span className="text-[15px] text-[#070606]">
                  example2@gmail.com
                </span>
              </div>

              <div className="flex gap-4 items-start">
                <FaLocationDot className="text-[#CF6943] mt-1" />
                <span className="text-[15px] text-[#070606] leading-[1.6]">
                  Hilite Business Park <br /> Calicut, Kerala
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-12">
              <h4 className="font-semibold text-[16px] mb-4">
                Follow Us
              </h4>

              <div className="bg-[#FDF0EB] rounded-xl px-6 py-4 flex gap-5 w-fit">
                {[FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter].map(
                  (Icon, i) => (
                    <Icon
                      key={i}
                      className="text-[#CF6943] text-[20px] cursor-pointer hover:scale-110 transition"
                    />
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 shadow-xl rounded-2xl px-10 py-12"
          >
            <form className="space-y-7">

              {/* ROW 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    className="w-full h-11 border rounded-lg px-4 text-sm
                    focus:outline-none focus:ring-1 focus:ring-[#CF6943]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    className="w-full h-11 border rounded-lg px-4 text-sm
                    focus:outline-none focus:ring-1 focus:ring-[#CF6943]"
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full h-11 border rounded-lg px-4 text-sm
                    focus:outline-none focus:ring-1 focus:ring-[#CF6943]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mobile Number
                  </label>
                  <input
                    className="w-full h-11 border rounded-lg px-4 text-sm
                    focus:outline-none focus:ring-1 focus:ring-[#CF6943]"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border rounded-lg px-4 py-3 text-sm
                  focus:outline-none focus:ring-1 focus:ring-[#CF6943]"
                />
              </div>

              {/* BUTTON */}
              <button
                className="w-full mt-4 bg-[#CF6943] text-white py-3 rounded-lg
                font-medium hover:bg-[#b95b38] transition"
              >
                Submit Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
