"use client";

import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

const faqs = [
  {
    q: "How do I get started with your product?",
    a: "Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing. Pulvinar sit aliquam ipsum rhoncus turpis pretium eu vestibulum condimentum orci."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept debit cards, credit cards, PayPal, and international payments."
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, we offer a 14-day trial with full access to all features."
  },
  {
    q: "Is technical support available?",
    a: "Yes, we provide 24/7 customer support via chat, email, and helpdesk."
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, you can cancel anytime from your dashboard settings."
  },
  {
    q: "Is my data secure with your product?",
    a: "We use industry-standard encryption and GDPR-compliant security systems."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-28 bg-[#F4F4F4] relative overflow-hidden">

      {/* Background Circles */}
      <div className="absolute left-10 top-20 -z-10 opacity-30">
        <svg width="260" height="260">
          <circle cx="130" cy="130" r="120" stroke="#CF694350" strokeWidth="1.2" fill="none" />
          <circle cx="130" cy="130" r="90" stroke="#CF694350" strokeWidth="1.2" fill="none" />
          <circle cx="130" cy="130" r="60" stroke="#CF694350" strokeWidth="1.2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ---------- LEFT CONTENT ---------- */}
          <div className="relative max-w-xl pl-6 md:pl-0">

            {/* BACKGROUND ARC IMAGE */}
            <img
              src="/images/FAQdesign.png"
              alt="FAQ background"
              className="
                absolute
                -top-20
                -left-40
                w-[520px]
                opacity-[0.18]
                pointer-events-none
                z-0
              "
            />

            {/* CONTENT */}
            <div className="relative z-10">

              {/* TAG */}
              <span className="inline-block bg-[#CF6943] text-white text-xs px-5 py-1.5 rounded-full shadow-sm">
                FAQ
              </span>

              {/* TITLE */}
              <h2 className="mt-6 text-[36px] md:text-[40px] font-semibold text-[#070606] leading-snug">
                Frequently Asked <br /> Questions
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 text-[16px] text-gray-600 leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing.
                Pulvinar sit aliquam ipsum rhoncus turpis pellentesque vestibulum
                condimentum orci.
              </p>

            </div>
          </div>


        {/* ---------- RIGHT FAQ CARD ---------- */}
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl w-full">

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
              {index !== faqs.length - 1 && (
                <hr className="border-[#F2F2F2]" />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
