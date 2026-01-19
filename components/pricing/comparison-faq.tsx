"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export function ComparisonFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the cost of the program?",
      answer:
        "The program is performance based so it depends on how much business you get from the Google ads. Overall, it often costs around 20% of the new, top line revenue generated in a given month. Then it costs you nothing for returning customers.",
    },
    {
      question: "Do you have a free trial?",
      answer:
        "There is a small program setup fee, however you don't pay for the first month until after ads have run and orders and revenue is realized.",
    },
    {
      question: "Is there a contract?",
      answer:
        "No. You can cancel any time. We are ready to earn your business every month.",
    },
    {
      question: "Do you provide hardware?",
      answer:
        "Yes, for restaurants that need it, we can provide tablets and printers at cost. If you own an Android tablet, you can use it. Our app prints to most existing printers so you can use your own printers as well.",
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
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-bold text-[#263238] mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3">
              <span className="p-1.5 sm:p-2 bg-gray-100 rounded-lg text-[#263238]">
                <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
              Frequently Asked Questions
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl border border-[#e2e8f0] overflow-hidden open:shadow-md transition-all duration-300"
                  open={openFAQ === index}
                  onToggle={(e) => {
                    const target = e.target as HTMLDetailsElement;
                    setOpenFAQ(target.open ? index : null);
                  }}
                >
                  <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer text-sm sm:text-base font-bold text-[#263238] hover:bg-gray-50 transition-colors duration-200 list-none">
                    {faq.question}
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-2" />
                  </summary>
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-[#64748b] text-xs sm:text-sm leading-relaxed border-t border-[#e2e8f0] pt-3 sm:pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                </details>
              ))}
        </div>
      </div>
    </section>
  );
}

