"use client";

import { useState } from "react";
import { Check, CheckCircle } from "lucide-react";

export function MarketingAddons() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");

  const getPrice = (monthlyPrice: number) => {
    if (billingPeriod === "annual") {
      return Math.round(monthlyPrice * 0.8); // 20% discount
    }
    return monthlyPrice;
  };

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[#ff7043] font-bold tracking-wider uppercase text-sm mb-2">
            Optional Add-ons
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#263238] mb-6">
            Marketing Automation
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mb-8">
            Accelerate your growth. These optional plans automate your customer retention
            so you can focus on the food.
          </p>
          <div className="flex items-center bg-white p-1.5 rounded-full border border-[#e2e8f0] shadow-sm">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-[#263238] text-white shadow-md"
                  : "text-[#64748b] hover:text-[#263238]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${
                billingPeriod === "annual"
                  ? "bg-[#263238] text-white shadow-md"
                  : "text-[#64748b] hover:text-[#263238]"
              }`}
            >
              Annual{" "}
              <span className="text-[#fff3e0] text-xs font-normal ml-1">(-20%)</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Promote Plan */}
          <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-xl transition-all">
            <h3 className="text-lg font-bold text-[#263238]">Promote</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-black text-[#263238]">
                ${getPrice(249)}
              </span>
              <span className="text-sm font-medium text-[#64748b]">/mo</span>
            </div>
            <p className="mt-2 text-sm text-[#64748b]">
              Perfect for new venues building a database.
            </p>
            <hr className="my-6 border-[#e2e8f0]" />
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-sm text-[#263238]">
                <CheckCircle className="w-5 h-5 text-[#ff7043] flex-shrink-0" />
                Email Marketing (1k contacts)
              </li>
              <li className="flex gap-3 text-sm text-[#263238]">
                <CheckCircle className="w-5 h-5 text-[#ff7043] flex-shrink-0" />
                Basic Loyalty Points
              </li>
              <li className="flex gap-3 text-sm text-[#263238]">
                <CheckCircle className="w-5 h-5 text-[#ff7043] flex-shrink-0" />
                Auto-Review Requests
              </li>
            </ul>
            <button className="w-full py-2.5 rounded-lg border-2 border-[#e2e8f0] text-[#263238] font-bold hover:border-[#ff7043] hover:text-[#ff7043] transition-colors">
              Select Plan
            </button>
          </div>

          {/* Grow & Retain Plan - Featured */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#ff7043] shadow-xl relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-[#ff7043] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase">
              Recommended
            </div>
            <h3 className="text-lg font-bold text-[#263238]">Grow &amp; Retain</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-black text-[#263238]">
                ${getPrice(449)}
              </span>
              <span className="text-sm font-medium text-[#64748b]">/mo</span>
            </div>
            <p className="mt-2 text-sm text-[#64748b]">
              For established venues scaling operations.
            </p>
            <hr className="my-6 border-[#ff7043]/20" />
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-sm font-bold text-[#263238]">
                <CheckCircle className="w-5 h-5 text-[#ff7043] flex-shrink-0" />
                Everything in Promote
              </li>
              <li className="flex gap-3 text-sm text-[#263238]">
                <CheckCircle className="w-5 h-5 text-[#ff7043] flex-shrink-0" />
                SMS Marketing (5k msgs)
              </li>
              <li className="flex gap-3 text-sm text-[#263238]">
                <CheckCircle className="w-5 h-5 text-[#ff7043] flex-shrink-0" />
                Customer Segmentation
              </li>
              <li className="flex gap-3 text-sm text-[#263238]">
                <CheckCircle className="w-5 h-5 text-[#ff7043] flex-shrink-0" />
                Branded Mobile App
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-[#ff7043] text-white font-bold hover:bg-[#e64a19] transition-colors shadow-lg shadow-[#ff7043]/20">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-xl transition-all">
            <h3 className="text-lg font-bold text-[#263238]">Enterprise</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-black text-[#263238]">
                ${getPrice(749)}
              </span>
              <span className="text-sm font-medium text-[#64748b]">/mo</span>
            </div>
            <p className="mt-2 text-sm text-[#64748b]">
              Full power for franchises and groups.
            </p>
            <hr className="my-6 border-[#e2e8f0]" />
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-sm text-[#263238]">
                <CheckCircle className="w-5 h-5 text-[#ff7043] flex-shrink-0" />
                Everything in Grow
              </li>
              <li className="flex gap-3 text-sm text-[#263238]">
                <CheckCircle className="w-5 h-5 text-[#ff7043] flex-shrink-0" />
                Unlimited Marketing
              </li>
              <li className="flex gap-3 text-sm text-[#263238]">
                <CheckCircle className="w-5 h-5 text-[#ff7043] flex-shrink-0" />
                Dedicated Account Manager
              </li>
              <li className="flex gap-3 text-sm text-[#263238]">
                <CheckCircle className="w-5 h-5 text-[#ff7043] flex-shrink-0" />
                API Access
              </li>
            </ul>
            <button className="w-full py-2.5 rounded-lg border-2 border-[#e2e8f0] text-[#263238] font-bold hover:border-[#ff7043] hover:text-[#ff7043] transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

