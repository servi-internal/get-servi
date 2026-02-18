"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export function ComparisonFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does the POS cost?",
      answer:
        "The POS has no monthly subscription fee. You only pay 1.5% of the order total plus credit card processing fees. Tax and tips only pay credit card fees. You can use your existing credit card provider or one of our value priced partners for the best deal.",
    },
    {
      question: "What does the customer pay?",
      answer:
        "A small convenience fee of 4-5% is added at checkout and paid by your customer. This covers the Ser.vi platform fee and credit card processing. You pay $0 in monthly software fees.",
    },
    {
      question: "What are the Online Ordering & Marketing plans?",
      answer:
        "We offer three optional plans to grow your business: Promote ($249/mo) for direct ordering with phone ordering service, SEO website, and Google Ads; Grow & Retain ($449/mo) adds engagement programs, email marketing, branded mobile app, and retargeting; Inspire & Connect ($749/mo) adds professional social content, review responses, and custom campaigns.",
    },
    {
      question: "Is there a contract?",
      answer:
        "No. You can cancel any time. We are ready to earn your business every month.",
    },
    {
      question: "Do you provide hardware?",
      answer:
        "Yes, for restaurants that need it, we can provide tablets and printers at cost. You can also use your own iPads, Android tablets, phones, or PCs. Our app prints to most existing printers so you can use your own printers as well.",
    },
    {
      question: "Do you provide credit card processing?",
      answer:
        "We have a partnership with Zift who provides a great flat rate of 2.5% and 15 cents per transaction. They also have a simple online application and most merchants are approved the next day.",
    },
    {
      question: "Can I use my own credit card processor?",
      answer:
        "Yes. We do not make any money on credit card processing. Merchants can choose any processor to get the lowest rate possible.",
    },
    {
      question: "Does this replace the delivery apps?",
      answer:
        "If you do not do in-house delivery, then you will want to continue with the delivery apps to provide this service. Ser.vi can take delivery orders and automatically send Doordash drivers to pick up the orders.",
    },
    {
      question: "How fast can I get set up?",
      answer:
        "We guarantee a 1 week setup from the time we receive all required information from you. We will have your program live and ready to take orders.",
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#263238] mb-5 sm:mb-6 lg:mb-8 flex items-center justify-center gap-2 sm:gap-3">
          <span className="p-1.5 sm:p-2 bg-gray-100 rounded-lg text-[#263238]">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </span>
          Frequently Asked Questions
        </h3>
        <div className="space-y-2.5 sm:space-y-3 lg:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border border-[#e2e8f0] overflow-hidden transition-shadow duration-300 ${
                  isOpen ? "shadow-md" : ""
                }`}
              >
                <button
                  onClick={() => setOpenFAQ(isOpen ? null : index)}
                  className="flex justify-between items-center w-full p-3 sm:p-4 lg:p-5 cursor-pointer text-xs sm:text-sm lg:text-base font-bold text-[#263238] hover:bg-gray-50 transition-colors duration-200 text-left"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 ml-2 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-3 sm:px-4 lg:px-5 pb-3 sm:pb-4 lg:pb-5 text-[#64748b] text-[11px] sm:text-xs lg:text-sm leading-relaxed border-t border-[#e2e8f0] pt-2.5 sm:pt-3 lg:pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
