"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

type ServiceTab =
  | "google-ads"
  | "seo-website"
  | "social-media"
  | "mobile-app"
  | "email-sms";

export function ServicesDetail() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("google-ads");

  const tabs = [
    { id: "google-ads" as ServiceTab, label: "Google Ads Management" },
    { id: "seo-website" as ServiceTab, label: "SEO Optimized Website" },
    { id: "social-media" as ServiceTab, label: "Social Media Automation" },
    { id: "mobile-app" as ServiceTab, label: "Branded Mobile App" },
    { id: "email-sms" as ServiceTab, label: "Email & SMS Marketing" },
  ];

  const content = {
    "google-ads": {
      title: "Google Ads Management",
      badge: "Included in Pro",
      description:
        'Stop wasting money on ineffective boosts. Our AI-driven bidding system places your restaurant at the top of Google searches for high-intent keywords like "best italian food near me" or "pizza delivery open now".',
      features: [
        "Keyword research & optimization",
        "Geo-fencing (5-mile radius)",
        "Negative keyword filtering",
        "Monthly ROI reports",
      ],
    },
    "seo-website": {
      title: "SEO Optimized Website",
      badge: "Included in Pro",
      description:
        "Your digital storefront optimized for search engines. We build fast-loading, mobile-responsive websites that rank high on Google and convert visitors into customers without paying commission fees.",
      features: [
        "Mobile-first responsive design",
        "Lightning-fast page load speeds",
        "Local SEO optimization",
        "Schema markup for rich results",
      ],
    },
    "social-media": {
      title: "Social Media Automation",
      badge: "Included in Pro",
      description:
        "Keep your social media presence active without lifting a finger. Our AI creates and schedules mouth-watering content for Instagram, Facebook, and TikTok that keeps your restaurant top-of-mind.",
      features: [
        "Automated content creation",
        "Multi-platform scheduling",
        "Engagement tracking & analytics",
        "Hashtag optimization",
      ],
    },
    "mobile-app": {
      title: "Branded Mobile App",
      badge: "Premium Add-on",
      description:
        "Give your customers a dedicated app with your logo on their home screen. Enable one-click reordering, push notifications for promotions, and a built-in loyalty rewards program.",
      features: [
        "iOS & Android native apps",
        "Push notification campaigns",
        "Integrated loyalty system",
        "One-click reordering",
      ],
    },
    "email-sms": {
      title: "Email & SMS Marketing",
      badge: "Included in Pro",
      description:
        "Automated campaigns that bring customers back. We capture emails at checkout and send targeted messages based on customer behavior, preferences, and order history.",
      features: [
        "Automated welcome sequences",
        "Behavior-triggered campaigns",
        "SMS for time-sensitive offers",
        "A/B testing & optimization",
      ],
    },
  };

  const currentContent = content[activeTab];

  return (
    <section className="py-20 bg-[#f9fafb]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Everything You Need to Scale
          </h2>
          <p className="text-gray-600 mt-2">
            Comprehensive tools included in our marketing plans.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-lg cursor-pointer flex justify-between items-center transition-all text-left ${
                  activeTab === tab.id
                    ? "bg-white shadow-md border-l-4 border-[#FF6600]"
                    : "bg-transparent hover:bg-white border-l-4 border-transparent hover:border-gray-200"
                }`}
              >
                <span
                  className={
                    activeTab === tab.id
                      ? "font-bold text-gray-900"
                      : "font-medium text-gray-600"
                  }
                >
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <ArrowRight className="w-5 h-5 text-[#FF6600]" />
                )}
              </button>
            ))}
          </div>
          <div className="lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm min-h-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {currentContent.title}
                </h3>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${
                    currentContent.badge === "Premium Add-on"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {currentContent.badge}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {currentContent.description}
                  </p>
                  <ul className="space-y-3">
                    {currentContent.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm text-gray-900"
                      >
                        <CheckCircle className="w-5 h-5 text-[#FF6600] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center border border-gray-100">
                  {activeTab === "google-ads" && (
                    <div className="w-full space-y-3">
                      <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="p-3 bg-white shadow-sm rounded border border-gray-200">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 bg-black rounded-full"></div>
                          <div className="h-2 w-20 bg-gray-300 rounded"></div>
                        </div>
                        <div className="h-3 w-1/2 bg-blue-400 rounded mb-2"></div>
                        <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                        <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                      </div>
                      <div className="p-3 bg-white/50 rounded border border-dashed border-gray-200">
                        <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                        <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  )}
                  {activeTab === "seo-website" && (
                    <div className="w-full space-y-3">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="h-3 w-3/4 bg-gray-200 rounded mb-3"></div>
                        <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
                        <div className="h-2 w-5/6 bg-gray-100 rounded mb-4"></div>
                        <div className="flex gap-2">
                          <div className="h-8 w-20 bg-[#FF6600]/20 rounded"></div>
                          <div className="h-8 w-20 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Page Speed: 95/100</span>
                      </div>
                    </div>
                  )}
                  {activeTab === "social-media" && (
                    <div className="w-full space-y-3">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100"></div>
                        <div className="p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                            <div className="h-2 w-20 bg-gray-200 rounded"></div>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                          <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="flex gap-2 justify-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                        <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
                        <div className="w-8 h-8 bg-black rounded-full"></div>
                      </div>
                    </div>
                  )}
                  {activeTab === "mobile-app" && (
                    <div className="relative">
                      <div className="w-40 h-72 bg-gray-900 rounded-3xl border-4 border-gray-900 shadow-xl overflow-hidden">
                        <div className="bg-white h-full p-4">
                          <div className="h-8 bg-[#FF6600]/10 rounded-lg mb-4"></div>
                          <div className="space-y-3">
                            <div className="h-16 bg-gray-100 rounded-lg"></div>
                            <div className="h-16 bg-gray-100 rounded-lg"></div>
                            <div className="h-16 bg-gray-100 rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-[#FF6600] text-white text-xs font-bold px-2 py-1 rounded-full">
                        Your Logo
                      </div>
                    </div>
                  )}
                  {activeTab === "email-sms" && (
                    <div className="w-full space-y-3">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 bg-[#FF6600]/20 rounded flex items-center justify-center text-[#FF6600]">
                            <i className="bi bi-envelope-fill"></i>
                          </div>
                          <div>
                            <div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
                            <div className="h-2 w-32 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                        <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-600">
                            <i className="bi bi-chat-dots-fill"></i>
                          </div>
                          <div>
                            <div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
                            <div className="h-2 w-32 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                        <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
