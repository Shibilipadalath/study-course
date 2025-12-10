"use client";

import { useState } from "react";
import Image from "next/image";
import { IoAdd, IoRemove } from "react-icons/io5";

const faqs = [
  {
    q: "How do I get started with your product?",
    a: "Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing. Pulvinar sit aliquam ipsum rhoncus turpis pretium eu vestibulum condimentum orci.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept debit cards, credit cards, PayPal, and international payments.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, we offer a 14-day trial with full access to all features.",
  },
  {
    q: "Is technical support available?",
    a: "Yes, we provide 24/7 customer support via chat, email, and helpdesk.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, you can cancel anytime from your dashboard settings.",
  },
  {
    q: "Is my data secure with your product?",
    a: "We use industry-standard encryption and GDPR-compliant security systems.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-[#F4F4F4] relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute left-10 top-20 -z-10 opacity-30">
        <svg width="260" height="260">
          <circle cx="130" cy="130" r="120" stroke="#CF694350" strokeWidth="1.2" fill="none" />
          <circle cx="130" cy="130" r="90" stroke="#CF694350" strokeWidth="1.2" fill="none" />
          <circle cx="130" cy="130" r="60" stroke="#CF694350" strokeWidth="1.2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
        {/* ---------- LEFT CONTENT WITH FULL-BG IMAGE ---------- */}
        <div className="relative h-full overflow-hidden rounded-br-[120px]">
          {/* Background image fills entire left column */}
          <Image
            src="/images/faq.jpg"
            alt="FAQ background"
            fill
            className="object-cover"
            priority
          />

          {/* CONTENT ON TOP OF IMAGE */}
          <div className="relative z-10 px-8 py-10 md:px-10 md:py-12 max-w-xl">
            {/* TAG */}
            <span className="inline-block bg-[#CF6943] text-white text-xs px-5 py-1.5 rounded-full shadow-sm">
              FAQ
            </span>

            {/* TITLE */}
            <h2 className="mt-6 text-[32px] md:text-[40px] font-semibold text-[#070606] leading-snug">
              Frequently Asked <br /> Questions
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[16px] text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing.
              Pulvinar sit aliquam ipsum rhoncus turpis pellentesque vestibulum
              condimentum orci.
            </p>
          </div>
        </div>

        {/* ---------- RIGHT FAQ CARD ---------- */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-2xl w-full self-center lg:self-stretch flex flex-col justify-center">
          {faqs.map((item, index) => (
            <div key={index}>
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex justify-between items-center py-5 text-left"
              >
                <span className="text-[16px] font-medium text-[#070606] leading-snug pr-6">
                  {item.q}
                </span>

                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full transition 
                    ${openIndex === index ? "bg-[#f89b84]" : "bg-[#F4B9AA]"}`}
                >
                  {openIndex === index ? <IoRemove size={16} /> : <IoAdd size={16} />}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p className="text-[14px] text-gray-500 pb-5 leading-[1.75] pr-10">
                  {item.a}
                </p>
              )}

              {/* Divider */}
              {index !== faqs.length - 1 && <hr className="border-[#F2F2F2]" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
