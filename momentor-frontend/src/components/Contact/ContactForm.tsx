"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaLocationDot } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* ================= LEFT SIDE ================ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[32px] font-semibold text-[#070606]">
              Let’s Get in Touch
            </h2>

            <p className="text-gray-600 text-[15px] mt-3 leading-[1.7] max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing. Pulvinar sit aliquam ipsum rhoncus turpis pellentesque vestibulum condimentum.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#CF6943]" />
                <span className="text-[15px] text-[#070606] font-medium">+91 98898898000</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#CF6943]" />
                <span className="text-[15px] text-[#070606]">example2@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <FaLocationDot className="text-[#CF6943] text-lg" />
                <span className="text-[15px] text-[#070606] leading-[1.6]">
                  Hilite Business Park <br /> Calicut, Kerala
                </span>
              </div>
            </div>

            {/* Social media */}
            <div className="mt-10">
              <h4 className="font-semibold text-[16px] mb-3">Follow Us</h4>

              <div className="bg-[#FDF0EB] rounded-xl px-6 py-5 flex items-center gap-4 w-fit">
                <FaInstagram className="text-[#CF6943] text-[20px] cursor-pointer hover:scale-110 transition" />
                <FaFacebookF className="text-[#CF6943] text-[20px] cursor-pointer hover:scale-110 transition" />
                <FaLinkedinIn className="text-[#CF6943] text-[20px] cursor-pointer hover:scale-110 transition" />
                <FaXTwitter className="text-[#CF6943] text-[20px] cursor-pointer hover:scale-110 transition" />
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE FORM ================ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 shadow-lg rounded-xl px-8 py-10"
          >
            
            {/* FORM */}
            <form className="space-y-6">
              
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#CF6943]" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#CF6943]" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#CF6943]" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input type="text" className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#CF6943]" />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#CF6943]" />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#CF6943] text-white py-3 rounded-md font-medium hover:bg-[#b95b38] transition">
                Submit
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
