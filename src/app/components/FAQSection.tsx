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
    <section className="py-28 bg-[#F4F4F4]">
      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT TEXT SECTION */}
        <div>
          <span className="bg-[#CF6943] text-white text-xs px-4 py-1 rounded-full shadow-sm">
            FAQ
          </span>

          <h2 className="text-[30px] md:text-[36px] font-semibold text-[#070606] mt-4">
            Frequently Asked <br /> Questions
          </h2>

          <p className="text-gray-600 text-[15px] leading-[1.7] mt-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Vel nisl mus erat adipiscing.
            Pulvinar sit aliquam ipsum rhoncus turpis pellentesque vestibulum condimentum orci.
          </p>
        </div>

        {/* FAQ CARD */}
        <div className="bg-white p-6 rounded-xl shadow-md max-w-lg">
          {faqs.map((item, index) => (
            <div key={index}>
              
              {/* Question Row */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="text-[14px] font-medium text-[#070606]">
                  {item.q}
                </span>
                <span className="text-[#CF6943] p-1 rounded-full hover:bg-[#F4F4F4] transition">
                  {openIndex === index ? <IoRemove size={18} /> : <IoAdd size={18} />}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p className="text-[13px] text-gray-500 pb-4 leading-relaxed">
                  {item.a}
                </p>
              )}

              {/* Divider */}
              {index !== faqs.length - 1 && <hr className="border-gray-200" />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
