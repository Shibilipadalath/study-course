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

      {/* Background Circles (Subtle Like Figma) */}
      <div className="absolute left-10 top-20 -z-10 opacity-30">
        <svg width="260" height="260">
          <circle cx="130" cy="130" r="120" stroke="#CF694350" strokeWidth="1.2" fill="none" />
          <circle cx="130" cy="130" r="90" stroke="#CF694350" strokeWidth="1.2" fill="none" />
          <circle cx="130" cy="130" r="60" stroke="#CF694350" strokeWidth="1.2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT TEXT */}
        <div className="max-w-md">
          <span className="bg-[#CF6943] text-white text-xs px-4 py-1 rounded-full shadow">
            FAQ
          </span>

          <h2 className="text-[36px] font-semibold text-[#070606] leading-tight mt-4">
            Frequently Asked <br /> Questions
          </h2>

          <p className="text-gray-600 text-[15px] mt-4 leading-[1.7]">
            Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing.
            Pulvinar sit aliquam ipsum rhoncus turpis pellentesque vestibulum condimentum orci.
          </p>
        </div>

        {/* RIGHT FAQ CARD */}
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl">
          {faqs.map((item, index) => (
            <div key={index}>
              {/* Question Row */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="text-[15px] font-medium text-[#070606]">
                  {item.q}
                </span>

                <span
                  className={`${
                    openIndex === index ? "bg-[#f89b84]" : "bg-[#F4B9AA]"
                  } text-[#000000] p-2 rounded-full transition`}
                >
                  {openIndex === index ? <IoRemove size={16} /> : <IoAdd size={16} />}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p className="text-[13px] text-gray-500 pb-4 leading-[1.65] mt-1">
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
