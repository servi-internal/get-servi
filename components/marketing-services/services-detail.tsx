"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

type ServiceTab =
  | "google-ads"
  | "seo-website"
  | "engagement"
  | "mobile-app"
  | "email-sms"
  | "social-media"
  | "retargeting"
  | "photoshoot";

export function ServicesDetail() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("google-ads");

  const tabs = [
    { id: "google-ads" as ServiceTab, label: "Google Ads Management" },
    { id: "seo-website" as ServiceTab, label: "SEO Optimized Website" },
    { id: "engagement" as ServiceTab, label: "Engagement Package" },
    { id: "mobile-app" as ServiceTab, label: "Branded Mobile App" },
    { id: "retargeting" as ServiceTab, label: "Retargeting Ads" },
    { id: "email-sms" as ServiceTab, label: "Email Campaigns" },
    { id: "social-media" as ServiceTab, label: "Social Media (Optional)" },
    { id: "photoshoot" as ServiceTab, label: "Professional Photoshoot" },
  ];

  const content = {
    "google-ads": {
      title: "Google Ads Management",
      badge: "Included in Promote",
      description:
        'Stop wasting money on ineffective boosts. Our AI-driven system places your restaurant at the top of Google searches for high-intent keywords like "best italian food near me" or "pizza delivery open now".',
      features: [
        "Keyword research & optimization",
        "Geo-fencing (5-mile radius)",
        "Negative keyword filtering",
        "Monthly ROI reports",
      ],
    },
    "seo-website": {
      title: "SEO Optimized Website",
      badge: "Included in Promote",
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
      title: "Social Media Add-ons",
      badge: "Optional Add-ons",
      description:
        "Your social media presence is your brand's voice. We create and schedule mouth-watering content for Instagram, Facebook, TikTok & Youtube that keeps your restaurant top-of-mind.",
      features: [
        "Automated content creation",
        "Multi-platform scheduling (Facebook, Instagram, TikTok, Youtube)",
        "Engagement tracking & analytics",
        "Hashtag optimization",
        "Your brand is the face of the content",
      ],
    },
    "engagement": {
      title: "Engagement Package",
      badge: "Included in Grow & Retain",
      description:
        "Turn one-time visitors into loyal regulars with our complete engagement toolkit. Reward repeat customers, encourage sharing, and manage your online reputation — all from one dashboard.",
      features: [
        "Loyalty points program with customizable rewards",
        "Shareable digital gift cards",
        "Review Gate to boost positive reviews",
        "Capture negative reviews before posting",
      ],
    },
    "mobile-app": {
      title: "Branded Mobile App",
      badge: "Included in Grow & Retain",
      description:
        "Give your customers a dedicated app with your logo on their home screen. Enable most convenient ordering, push notifications for promotions, and a built-in loyalty rewards program.",
      features: [
        "iOS & Android native apps",
        "Push notifications for promotions",
        "Loyalty rewards program",
        "Your logo is the app icon",
      ],
    },
    "email-sms": {
      title: "Email Campaigns",
      badge: "Included in Grow & Retain",
      description:
        "Automated campaigns that bring customers back. We capture emails at checkout and send targeted messages based on customer behavior, preferences, and order history.",
      features: [
        "Automated welcome sequences",
        "Keep your customers engaged with your brand",
        "Send promotions & discount codes",
        "Track open & click rates",
      ],
    },
    "retargeting": {
      title: "Retargeting Ads for App Installs",
      badge: "Included in Grow & Retain",
      description:
        "Your branded app is only valuable if customers know it exists. We run targeted social media campaigns to promote your app to existing customers and website visitors — because without active promotion, app installs simply won't happen.",
      features: [
        "Facebook & Instagram app install ads",
        "Target your existing customer base",
        "Retarget website visitors",
        "Drive repeat orders through your app",
      ],
    },
    "photoshoot": {
      title: "Professional Photoshoot",
      badge: "One-Time Service",
      description:
        "First impressions matter. When you sign up with Ser.vi, we send a professional photographer to capture stunning images of your dishes, interior, and team — ready to use across all your marketing channels.",
      features: [
        "Professional food photography",
        "Interior & ambiance shots",
        "Team & action photos",
        "Full rights to all images",
      ],
    },
  };

  const currentContent = content[activeTab];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f9fafb]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Everything You Need to Scale
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Comprehensive tools included in our marketing plans.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Mobile: Horizontal scrolling tabs */}
          <div className="lg:hidden overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex gap-2 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#FF6600] text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Vertical tabs */}
          <div className="hidden lg:flex lg:w-1/3 flex-col gap-2">
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

          {/* Content area */}
          <div className="lg:w-2/3 bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col h-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {currentContent.title}
                </h3>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide w-fit ${
                    currentContent.badge === "Premium Add-on"
                      ? "bg-purple-100 text-purple-800"
                      : currentContent.badge === "One-Time Service"
                      ? "bg-blue-100 text-blue-800"
                      : currentContent.badge === "Optional Add-on"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {currentContent.badge}
                </span>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base">
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
                  {activeTab === "engagement" && (
                    <div className="w-full space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 text-center">
                          <div className="w-10 h-10 mx-auto mb-2 bg-yellow-100 rounded-full flex items-center justify-center">
                            <i className="bi bi-star-fill text-yellow-500"></i>
                          </div>
                          <div className="h-2 w-12 mx-auto bg-gray-200 rounded mb-1"></div>
                          <div className="text-xs font-bold text-[#FF6600]">250 pts</div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 text-center">
                          <div className="w-10 h-10 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
                            <i className="bi bi-gift-fill text-green-600"></i>
                          </div>
                          <div className="h-2 w-12 mx-auto bg-gray-200 rounded mb-1"></div>
                          <div className="text-xs font-bold text-green-600">$25</div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 text-center">
                          <div className="w-10 h-10 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                            <i className="bi bi-chat-quote-fill text-blue-600"></i>
                          </div>
                          <div className="h-2 w-12 mx-auto bg-gray-200 rounded mb-1"></div>
                          <div className="flex justify-center gap-0.5">
                            <i className="bi bi-star-fill text-yellow-400 text-xs"></i>
                            <i className="bi bi-star-fill text-yellow-400 text-xs"></i>
                            <i className="bi bi-star-fill text-yellow-400 text-xs"></i>
                            <i className="bi bi-star-fill text-yellow-400 text-xs"></i>
                            <i className="bi bi-star-fill text-yellow-400 text-xs"></i>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-gray-600">Review Gate</span>
                          <span className="text-xs text-green-600 font-bold">Active</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                        <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
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
                  {activeTab === "retargeting" && (
                    <div className="w-full space-y-3">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600">
                              <i className="bi bi-bullseye"></i>
                            </div>
                            <span className="text-xs font-medium text-gray-600">Retargeting Campaign</span>
                          </div>
                          <span className="text-xs text-green-600 font-bold">Active</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-lg font-bold text-gray-900">2.4k</div>
                            <div className="text-xs text-gray-500">Reached</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-lg font-bold text-[#FF6600]">312</div>
                            <div className="text-xs text-gray-500">Installs</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-lg font-bold text-green-600">$1.24</div>
                            <div className="text-xs text-gray-500">CPI</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 justify-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <i className="bi bi-facebook text-white text-sm"></i>
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <i className="bi bi-instagram text-white text-sm"></i>
                        </div>
                        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                          <i className="bi bi-google text-white text-sm"></i>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "photoshoot" && (
                    <div className="w-full space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                          <i className="bi bi-camera-fill text-3xl text-amber-600"></i>
                        </div>
                        <div className="space-y-2">
                          <div className="h-[calc(50%-4px)] bg-gradient-to-br from-red-100 to-pink-100 rounded-lg flex items-center justify-center">
                            <i className="bi bi-cup-hot-fill text-xl text-red-400"></i>
                          </div>
                          <div className="h-[calc(50%-4px)] bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                            <i className="bi bi-egg-fried text-xl text-green-500"></i>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <i className="bi bi-check-circle-fill text-green-500"></i>
                          <span className="text-sm font-medium text-gray-900">One-Time at Signup</span>
                        </div>
                        <p className="text-xs text-gray-500">Professional photographer visits your location</p>
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
