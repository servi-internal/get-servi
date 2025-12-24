"use client";

import { useState } from "react";
import { ArrowLeftRight, HelpCircle, ChevronDown, Lock, X } from "lucide-react";

export function ComparisonFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is it really free?",
      answer:
        "Yes. You pay $0 in monthly software fees. The platform runs on devices you already own. A small convenience fee (4.0% for POS, 5.0% for Online & Self-Service) is added at checkout and paid by your customer. This includes both the Ser.vi fee and Zift card processing.",
    },
    {
      question: "Can I use my own hardware?",
      answer:
        "Absolutely. Use your iPads, Android tablets, phones, or PCs. No forced hardware purchases. We also offer a complete line of robust wired POS hardware to suit your needs and budget if you prefer.",
    },
    {
      question: "What happens if my internet goes down?",
      answer:
        "Ser.vi has an offline mode that allows you to continue taking orders and printing tickets. Data syncs automatically once your connection is restored.",
    },
    {
      question: "Are there hidden credit card fees?",
      answer:
        "No hidden fees. The customer pays a transparent convenience fee that covers everything: Ser.vi platform fee (1.5%-2.5%) + Zift card processing (2.5%). The breakdown is clearly shown in our pricing plans.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {/* Comparison Table */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#263238] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <span className="p-1.5 sm:p-2 bg-[#ff7043]/10 rounded-lg text-[#ff7043]">
                <ArrowLeftRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
              Why Choose Ser.vi?
            </h3>
            <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 bg-[#263238] text-white p-3 sm:p-4 items-center">
                <div className="col-span-1 font-bold text-xs sm:text-sm">Feature</div>
                <div className="col-span-1 text-center font-bold text-[#ff7043] text-base sm:text-lg">
                  Ser.vi
                </div>
                <div className="col-span-1 text-center font-medium text-gray-400 text-xs sm:text-sm">
                  Legacy POS
                </div>
              </div>
              <div className="grid grid-cols-3 p-3 sm:p-4 border-b border-[#e2e8f0] hover:bg-gray-50 items-center">
                <div className="col-span-1 text-xs sm:text-sm font-semibold text-[#263238]">
                  Monthly Software Cost
                </div>
                <div className="col-span-1 text-center font-black text-green-600 text-base sm:text-lg">
                  $0
                </div>
                <div className="col-span-1 text-center text-xs sm:text-sm text-gray-500">
                  $100 - $300
                </div>
              </div>
              <div className="grid grid-cols-3 p-3 sm:p-4 border-b border-[#e2e8f0] hover:bg-gray-50 items-center">
                <div className="col-span-1 text-xs sm:text-sm font-semibold text-[#263238]">
                  Setup Fees
                </div>
                <div className="col-span-1 text-center font-black text-green-600 text-base sm:text-lg">
                  $0
                </div>
                <div className="col-span-1 text-center text-xs sm:text-sm text-gray-500">
                  $1,000+
                </div>
              </div>
              <div className="grid grid-cols-3 p-3 sm:p-4 border-b border-[#e2e8f0] hover:bg-gray-50 items-center">
                <div className="col-span-1 text-xs sm:text-sm font-semibold text-[#263238]">
                  Hardware
                </div>
                <div className="col-span-1 text-center text-xs sm:text-sm font-bold text-[#263238]">
                  Any Device
                </div>
                <div className="col-span-1 text-center text-xs sm:text-sm text-gray-500">
                  Proprietary
                </div>
              </div>
              <div className="grid grid-cols-3 p-3 sm:p-4 border-b border-[#e2e8f0] hover:bg-gray-50 items-center">
                <div className="col-span-1 text-xs sm:text-sm font-semibold text-[#263238]">
                  Contracts
                </div>
                <div className="col-span-1 text-center flex justify-center">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
                <div className="col-span-1 text-center flex justify-center">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                </div>
              </div>
              <div className="grid grid-cols-3 p-3 sm:p-4 hover:bg-gray-50 items-center">
                <div className="col-span-1 text-xs sm:text-sm font-semibold text-[#263238]">
                  Updates
                </div>
                <div className="col-span-1 text-center text-xs sm:text-sm font-bold text-[#263238]">
                  Free Forever
                </div>
                <div className="col-span-1 text-center text-xs sm:text-sm text-gray-500">
                  Paid Upgrades
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#263238] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
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
        </div>
      </div>
    </section>
  );
}

