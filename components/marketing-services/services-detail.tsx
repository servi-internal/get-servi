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
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f9fafb] overflow-hidden" id="services">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Everything You Need to Scale
          </h2>
          <p className="text-gray-600 mt-2 text-xs sm:text-sm lg:text-base">
            Comprehensive tools included in our marketing plans.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 min-w-0">
          {/* Mobile: Horizontal scrolling tabs */}
          <div className="lg:hidden overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-1.5 sm:gap-2 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap text-xs sm:text-sm font-medium transition-all min-h-[36px] sm:min-h-[40px] ${
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
          <div className="lg:w-2/3 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-sm min-w-0">
            <div className="flex flex-col h-full min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
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
              <div className="flex flex-col gap-4 sm:gap-6">
                <div>
                  <p className="text-gray-600 mb-4 sm:mb-5 leading-relaxed text-xs sm:text-sm lg:text-base">
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
                      {/* Google Search Bar */}
                      <div className="bg-white rounded-full border border-gray-300 shadow-sm px-4 py-2 flex items-center gap-3">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="text-sm text-gray-400 flex-1">best pizza near me</span>
                        <i className="bi bi-search text-gray-400"></i>
                      </div>
                      
                      {/* Sponsored Ad Result */}
                      <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold text-white bg-[#1a73e8] px-1.5 py-0.5 rounded">Ad</span>
                          <span className="text-xs text-green-700">www.yourrestaurant.com</span>
                        </div>
                        <div className="text-sm font-semibold text-[#1a0dab] mb-1 hover:underline cursor-pointer">
                          Your Restaurant - Order Online Now
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Fresh, delicious food delivered to your door. Order online for pickup or delivery. No commission fees.
                        </p>
                        <div className="flex gap-4 mt-2">
                          <span className="text-xs text-[#1a73e8] cursor-pointer hover:underline">Menu</span>
                          <span className="text-xs text-[#1a73e8] cursor-pointer hover:underline">Order Now</span>
                          <span className="text-xs text-[#1a73e8] cursor-pointer hover:underline">Locations</span>
                        </div>
                      </div>
                      
                      {/* Organic Result (faded) */}
                      <div className="p-3 bg-gray-100/50 rounded-lg border border-dashed border-gray-200 opacity-60">
                        <div className="text-xs text-gray-500 mb-1">www.competitor.com</div>
                        <div className="text-xs text-gray-400">Competitor Restaurant - Page 2</div>
                      </div>
                    </div>
                  )}
                  {activeTab === "seo-website" && (
                    <div className="w-full space-y-3">
                      {/* Browser Window Mockup */}
                      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                        {/* Browser Header */}
                        <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex-1 bg-white rounded px-2 py-1 text-[10px] text-gray-500 flex items-center gap-1">
                            <i className="bi bi-lock-fill text-green-600"></i>
                            yourrestaurant.com
                          </div>
                        </div>
                        {/* Website Content */}
                        <div className="p-3">
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-16 h-4 bg-[#FF6600] rounded"></div>
                            <div className="flex gap-2">
                              <div className="w-8 h-2 bg-gray-200 rounded"></div>
                              <div className="w-8 h-2 bg-gray-200 rounded"></div>
                              <div className="w-8 h-2 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                          <div className="h-16 bg-gradient-to-r from-[#FF6600]/20 to-orange-100 rounded-lg mb-3 flex items-center justify-center">
                            <span className="text-xs font-bold text-[#FF6600]">Hero Section</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-8 bg-gray-100 rounded"></div>
                            <div className="h-8 bg-gray-100 rounded"></div>
                            <div className="h-8 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Performance Metrics */}
                      <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-xs font-bold text-green-600">95</span>
                          </div>
                          <span className="text-xs text-gray-600">Page Speed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-xs font-bold text-green-600">A+</span>
                          </div>
                          <span className="text-xs text-gray-600">SEO Score</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="bi bi-phone text-[#FF6600]"></i>
                          <span className="text-xs text-gray-600">Mobile Ready</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "social-media" && (
                    <div className="w-full flex flex-col items-center space-y-3">
                      {/* Instagram Posts Grid */}
                      <div className="flex gap-2 sm:gap-2.5 overflow-x-auto max-w-full">
                        {/* Post 1 */}
                        <div className="w-32 sm:w-40 flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                          <div className="flex items-center gap-2 p-2 border-b border-gray-100">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
                              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                <span className="text-[6px] font-bold text-gray-800">YR</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-[10px] font-bold text-gray-900">your_restaurant</div>
                            </div>
                          </div>
                          <div className="h-28 relative overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop" 
                              alt="Delicious pizza"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-2">
                            <div className="flex items-center gap-2 mb-1">
                              <i className="bi bi-heart-fill text-red-500 text-xs"></i>
                              <i className="bi bi-chat text-gray-700 text-xs"></i>
                              <i className="bi bi-send text-gray-700 text-xs"></i>
                            </div>
                            <div className="text-[10px] font-bold text-gray-900">2,847 likes</div>
                          </div>
                        </div>
                        
                        {/* Post 2 */}
                        <div className="w-32 sm:w-40 flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                          <div className="flex items-center gap-2 p-2 border-b border-gray-100">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
                              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                <span className="text-[6px] font-bold text-gray-800">YR</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-[10px] font-bold text-gray-900">your_restaurant</div>
                            </div>
                          </div>
                          <div className="h-28 relative overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" 
                              alt="Fresh salad"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-2">
                            <div className="flex items-center gap-2 mb-1">
                              <i className="bi bi-heart-fill text-red-500 text-xs"></i>
                              <i className="bi bi-chat text-gray-700 text-xs"></i>
                              <i className="bi bi-send text-gray-700 text-xs"></i>
                            </div>
                            <div className="text-[10px] font-bold text-gray-900">1,923 likes</div>
                          </div>
                        </div>
                        
                        {/* Post 3 */}
                        <div className="w-32 sm:w-40 flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                          <div className="flex items-center gap-2 p-2 border-b border-gray-100">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
                              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                <span className="text-[6px] font-bold text-gray-800">YR</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-[10px] font-bold text-gray-900">your_restaurant</div>
                            </div>
                          </div>
                          <div className="h-28 relative overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop" 
                              alt="Pancakes"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-2">
                            <div className="flex items-center gap-2 mb-1">
                              <i className="bi bi-heart-fill text-red-500 text-xs"></i>
                              <i className="bi bi-chat text-gray-700 text-xs"></i>
                              <i className="bi bi-send text-gray-700 text-xs"></i>
                            </div>
                            <div className="text-[10px] font-bold text-gray-900">3,156 likes</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Platform Icons */}
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-1.5 bg-[#1877f2] rounded-full px-3 py-1.5 shadow-sm">
                          <i className="bi bi-facebook text-white text-sm"></i>
                        </div>
                        <div className="flex items-center gap-1.5 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full px-3 py-1.5 shadow-sm">
                          <i className="bi bi-instagram text-white text-sm"></i>
                        </div>
                        <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1.5 shadow-sm">
                          <i className="bi bi-tiktok text-white text-sm"></i>
                        </div>
                        <div className="flex items-center gap-1.5 bg-red-600 rounded-full px-3 py-1.5 shadow-sm">
                          <i className="bi bi-youtube text-white text-sm"></i>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "engagement" && (
                    <div className="w-full flex flex-col items-center space-y-3">
                      {/* Dashboard Style Layout */}
                      <div className="w-full bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#FF6600] to-orange-500 px-4 py-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <i className="bi bi-graph-up-arrow text-white"></i>
                            <span className="text-white font-bold text-sm">Engagement Dashboard</span>
                          </div>
                          <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">Live</span>
                        </div>
                        
                        {/* Stats Row */}
                        <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
                          <div className="p-3 text-center">
                            <div className="text-xl font-black text-[#FF6600]">2,847</div>
                            <div className="text-[9px] text-gray-500">Total Members</div>
                          </div>
                          <div className="p-3 text-center">
                            <div className="text-xl font-black text-green-600">68%</div>
                            <div className="text-[9px] text-gray-500">Return Rate</div>
                          </div>
                          <div className="p-3 text-center">
                            <div className="text-xl font-black text-blue-600">4.8</div>
                            <div className="text-[9px] text-gray-500">Avg Rating</div>
                          </div>
                        </div>
                        
                        {/* Features Grid */}
                        <div className="p-3 grid grid-cols-2 gap-2">
                          {/* Loyalty Points */}
                          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 border border-amber-100">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-sm">
                                <i className="bi bi-star-fill text-white text-sm"></i>
                              </div>
                              <div>
                                <div className="text-[10px] font-bold text-gray-900">Loyalty Points</div>
                                <div className="text-[8px] text-gray-500">Reward repeat visits</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 mt-2">
                              <div className="flex-1 h-1.5 bg-amber-200 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                              </div>
                              <span className="text-[9px] font-bold text-amber-600">750 pts</span>
                            </div>
                          </div>
                          
                          {/* Gift Cards */}
                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 border border-green-100">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-sm">
                                <i className="bi bi-gift-fill text-white text-sm"></i>
                              </div>
                              <div>
                                <div className="text-[10px] font-bold text-gray-900">Gift Cards</div>
                                <div className="text-[8px] text-gray-500">Shareable digital</div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-lg font-black text-green-600">$25</span>
                              <span className="text-[8px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium">+12 sold</span>
                            </div>
                          </div>
                          
                          {/* Review Gate */}
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-100">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center shadow-sm">
                                <i className="bi bi-shield-check text-white text-sm"></i>
                              </div>
                              <div>
                                <div className="text-[10px] font-bold text-gray-900">Review Gate</div>
                                <div className="text-[8px] text-gray-500">Protect reputation</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 mt-2">
                              <i className="bi bi-star-fill text-yellow-400 text-[10px]"></i>
                              <i className="bi bi-star-fill text-yellow-400 text-[10px]"></i>
                              <i className="bi bi-star-fill text-yellow-400 text-[10px]"></i>
                              <i className="bi bi-star-fill text-yellow-400 text-[10px]"></i>
                              <i className="bi bi-star-fill text-yellow-400 text-[10px]"></i>
                              <span className="text-[9px] text-green-600 font-bold ml-1">Active</span>
                            </div>
                          </div>
                          
                          {/* Feedback Capture */}
                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 border border-purple-100">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                                <i className="bi bi-chat-heart-fill text-white text-sm"></i>
                              </div>
                              <div>
                                <div className="text-[10px] font-bold text-gray-900">Feedback</div>
                                <div className="text-[8px] text-gray-500">Capture privately</div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-[9px] text-purple-600 font-bold">23 this week</span>
                              <i className="bi bi-arrow-up-right text-green-500 text-[10px]"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "mobile-app" && (
                    <div className="w-full flex flex-col items-center space-y-3">
                      {/* Phone with App */}
                      <div className="relative">
                        {/* Phone Frame */}
                        <div className="w-36 h-64 sm:w-44 sm:h-80 bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] p-1.5 shadow-2xl">
                          {/* Phone Notch */}
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-20"></div>
                          
                          {/* Screen */}
                          <div className="bg-white h-full rounded-[2rem] overflow-hidden relative">
                            {/* Status Bar */}
                            <div className="h-7 bg-[#FF6600] flex items-center justify-between px-4 pt-1">
                              <span className="text-[9px] text-white font-medium">9:41</span>
                              <div className="flex items-center gap-1">
                                <i className="bi bi-wifi text-white text-[8px]"></i>
                                <i className="bi bi-battery-full text-white text-[8px]"></i>
                              </div>
                            </div>
                            
                            {/* App Header */}
                            <div className="bg-[#FF6600] px-3 pb-3 pt-1">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-white text-[11px] font-bold">Your Restaurant</div>
                                  <div className="text-white/70 text-[8px]">Delivery in 25-35 min</div>
                                </div>
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-[#FF6600] font-black text-[10px]">YR</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* App Content */}
                            <div className="p-2.5 space-y-2">
                              {/* Featured Item */}
                              <div className="relative rounded-xl overflow-hidden h-20">
                                <img 
                                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=150&fit=crop" 
                                  alt="Featured dish"
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-2 left-2 right-2">
                                  <div className="text-white text-[10px] font-bold">Today&apos;s Special</div>
                                  <div className="text-white/80 text-[8px]">20% off all pizzas</div>
                                </div>
                              </div>
                              
                              {/* Menu Items */}
                              <div className="flex gap-2">
                                <div className="flex-1 bg-gray-50 rounded-lg p-2">
                                  <div className="w-full h-10 rounded-md overflow-hidden mb-1.5">
                                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=80&fit=crop" alt="Salad" className="w-full h-full object-cover" />
                                  </div>
                                  <div className="text-[8px] font-bold text-gray-900">Caesar Salad</div>
                                  <div className="text-[8px] text-[#FF6600] font-bold">$12.99</div>
                                </div>
                                <div className="flex-1 bg-gray-50 rounded-lg p-2">
                                  <div className="w-full h-10 rounded-md overflow-hidden mb-1.5">
                                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=80&fit=crop" alt="Pancakes" className="w-full h-full object-cover" />
                                  </div>
                                  <div className="text-[8px] font-bold text-gray-900">Pancakes</div>
                                  <div className="text-[8px] text-[#FF6600] font-bold">$9.99</div>
                                </div>
                              </div>
                              
                              {/* Loyalty Banner */}
                              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-2 flex items-center gap-2">
                                <div className="w-6 h-6 bg-[#FF6600] rounded-full flex items-center justify-center">
                                  <i className="bi bi-star-fill text-white text-[8px]"></i>
                                </div>
                                <div className="flex-1">
                                  <div className="text-[8px] font-bold text-gray-900">250 Points</div>
                                  <div className="text-[7px] text-gray-600">Earn 50 more for $5 off!</div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Bottom Nav */}
                            <div className="absolute bottom-0 left-0 right-0 h-10 bg-white border-t border-gray-100 flex items-center justify-around px-4">
                              <i className="bi bi-house-fill text-[#FF6600] text-sm"></i>
                              <i className="bi bi-search text-gray-400 text-sm"></i>
                              <i className="bi bi-bag text-gray-400 text-sm"></i>
                              <i className="bi bi-person text-gray-400 text-sm"></i>
                            </div>
                          </div>
                        </div>
                        
                        {/* Your Logo Badge */}
                        <div className="absolute -top-3 -left-3 bg-green-500 text-white text-[9px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                          <i className="bi bi-check-circle-fill text-[8px]"></i>
                          Your Brand
                        </div>
                      </div>
                      
                      {/* App Store Badges */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-black rounded-lg px-2.5 py-1.5">
                          <i className="bi bi-apple text-white text-sm"></i>
                          <div className="text-[8px] text-white leading-tight">
                            <div className="text-[6px] text-gray-400">Download on</div>
                            <div className="font-semibold">App Store</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-black rounded-lg px-2.5 py-1.5">
                          <i className="bi bi-google-play text-white text-sm"></i>
                          <div className="text-[8px] text-white leading-tight">
                            <div className="text-[6px] text-gray-400">Get it on</div>
                            <div className="font-semibold">Google Play</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "email-sms" && (
                    <div className="w-full flex flex-col items-center space-y-3">
                      {/* Email Inbox Style */}
                      <div className="w-full bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                        {/* Inbox Header */}
                        <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-3 py-2 border-b border-gray-200 flex items-center gap-2">
                          <i className="bi bi-envelope-fill text-[#FF6600]"></i>
                          <span className="text-xs font-bold text-gray-700">Inbox</span>
                          <span className="ml-auto text-[10px] text-gray-500">3 new</span>
                        </div>
                        
                        {/* Email 1 - Welcome */}
                        <div className="flex items-start gap-2.5 p-2.5 border-b border-gray-100 bg-orange-50/50 hover:bg-orange-50 transition-colors cursor-pointer">
                          <div className="w-8 h-8 bg-[#FF6600] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <span className="text-white font-bold text-[9px]">YR</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <span className="text-[11px] font-bold text-gray-900">Your Restaurant</span>
                              <span className="text-[9px] text-gray-500">2h ago</span>
                            </div>
                            <div className="text-[10px] font-semibold text-gray-800 truncate">Welcome! Here&apos;s 10% off your first order</div>
                            <div className="text-[9px] text-gray-500 truncate">Thanks for signing up! Use code WELCOME10...</div>
                          </div>
                          <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&h=100&fit=crop" alt="Restaurant" className="w-full h-full object-cover" />
                          </div>
                        </div>
                        
                        {/* Email 2 - Win Back */}
                        <div className="flex items-start gap-2.5 p-2.5 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="w-8 h-8 bg-[#FF6600] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <span className="text-white font-bold text-[9px]">YR</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <span className="text-[11px] font-bold text-gray-900">Your Restaurant</span>
                              <span className="text-[9px] text-gray-500">1d ago</span>
                            </div>
                            <div className="text-[10px] font-semibold text-gray-800 truncate">We miss you! 15% off to come back</div>
                            <div className="text-[9px] text-gray-500 truncate">It&apos;s been a while since your last visit...</div>
                          </div>
                          <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop" alt="Pizza" className="w-full h-full object-cover" />
                          </div>
                        </div>
                        
                        {/* Email 3 - New Menu */}
                        <div className="flex items-start gap-2.5 p-2.5 hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="w-8 h-8 bg-[#FF6600] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <span className="text-white font-bold text-[9px]">YR</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <span className="text-[11px] font-bold text-gray-900">Your Restaurant</span>
                              <span className="text-[9px] text-gray-500">3d ago</span>
                            </div>
                            <div className="text-[10px] font-semibold text-gray-800 truncate">New dishes just dropped!</div>
                            <div className="text-[9px] text-gray-500 truncate">Check out our exciting new menu items...</div>
                          </div>
                          <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop" alt="Food" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Stats Row */}
                      <div className="flex items-center justify-center gap-4 bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#FF6600]">45%</div>
                          <div className="text-[10px] text-gray-500">Open Rate</div>
                        </div>
                        <div className="w-px h-8 bg-gray-200"></div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">12%</div>
                          <div className="text-[10px] text-gray-500">Click Rate</div>
                        </div>
                        <div className="w-px h-8 bg-gray-200"></div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">8%</div>
                          <div className="text-[10px] text-gray-500">Conversion</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "retargeting" && (
                    <div className="w-full flex flex-col items-center space-y-3">
                      {/* Social Media Ads Grid */}
                      <div className="flex gap-2 sm:gap-2.5 overflow-x-auto max-w-full">
                        {/* Ad 1 - Instagram */}
                        <div className="w-32 sm:w-40 flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                          <div className="flex items-center gap-2 p-2 border-b border-gray-100">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                              <i className="bi bi-instagram text-white text-[10px]"></i>
                            </div>
                            <div className="flex-1">
                              <div className="text-[10px] font-bold text-gray-900">your_restaurant</div>
                              <div className="text-[8px] text-gray-500">Sponsored</div>
                            </div>
                          </div>
                          <div className="relative h-28 overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop" 
                              alt="Food background"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center p-2">
                              <div className="w-10 h-10 mb-1.5 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-[#FF6600] font-black text-xs">YR</span>
                              </div>
                              <div className="text-[11px] font-bold drop-shadow-md">Download Our App!</div>
                            </div>
                          </div>
                          <div className="p-2 bg-gray-50">
                            <div className="bg-[#1877f2] text-white text-[10px] font-bold py-1.5 px-3 rounded-lg text-center flex items-center justify-center gap-1.5">
                              <i className="bi bi-download text-[10px]"></i>
                              Install
                            </div>
                          </div>
                        </div>
                        
                        {/* Ad 2 - Facebook */}
                        <div className="w-32 sm:w-40 flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                          <div className="flex items-center gap-2 p-2 border-b border-gray-100">
                            <div className="w-6 h-6 rounded-full bg-[#1877f2] flex items-center justify-center">
                              <i className="bi bi-facebook text-white text-[10px]"></i>
                            </div>
                            <div className="flex-1">
                              <div className="text-[10px] font-bold text-gray-900">Your Restaurant</div>
                              <div className="text-[8px] text-gray-500">Sponsored</div>
                            </div>
                          </div>
                          <div className="relative h-28 overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop" 
                              alt="Pizza background"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center p-2">
                              <div className="w-10 h-10 mb-1.5 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-[#FF6600] font-black text-xs">YR</span>
                              </div>
                              <div className="text-[11px] font-bold drop-shadow-md">Get 10% Off First Order</div>
                            </div>
                          </div>
                          <div className="p-2 bg-gray-50">
                            <div className="bg-[#1877f2] text-white text-[10px] font-bold py-1.5 px-3 rounded-lg text-center flex items-center justify-center gap-1.5">
                              <i className="bi bi-download text-[10px]"></i>
                              Install
                            </div>
                          </div>
                        </div>
                        
                        {/* Ad 3 - Instagram Story Style */}
                        <div className="w-32 sm:w-40 flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                          <div className="flex items-center gap-2 p-2 border-b border-gray-100">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                              <i className="bi bi-instagram text-white text-[10px]"></i>
                            </div>
                            <div className="flex-1">
                              <div className="text-[10px] font-bold text-gray-900">your_restaurant</div>
                              <div className="text-[8px] text-gray-500">Sponsored</div>
                            </div>
                          </div>
                          <div className="relative h-28 overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop" 
                              alt="Pancakes background"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center p-2">
                              <div className="w-10 h-10 mb-1.5 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-[#FF6600] font-black text-xs">YR</span>
                              </div>
                              <div className="text-[11px] font-bold drop-shadow-md">Earn Rewards!</div>
                            </div>
                          </div>
                          <div className="p-2 bg-gray-50">
                            <div className="bg-[#1877f2] text-white text-[10px] font-bold py-1.5 px-3 rounded-lg text-center flex items-center justify-center gap-1.5">
                              <i className="bi bi-download text-[10px]"></i>
                              Install
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Platform Icons */}
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 border border-gray-200 shadow-sm">
                          <i className="bi bi-facebook text-[#1877f2] text-sm"></i>
                          <span className="text-[10px] font-medium text-gray-600">Facebook</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 border border-gray-200 shadow-sm">
                          <i className="bi bi-instagram text-pink-500 text-sm"></i>
                          <span className="text-[10px] font-medium text-gray-600">Instagram</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "photoshoot" && (
                    <div className="w-full space-y-3">
                      {/* Photo Gallery Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {/* Main Food Shot */}
                        <div className="aspect-square rounded-xl overflow-hidden shadow-md relative group">
                          <img 
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop" 
                            alt="Food photography"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          <div className="absolute bottom-2 left-2 text-white text-[10px] font-medium flex items-center gap-1">
                            <i className="bi bi-camera-fill"></i>
                            Food
                          </div>
                        </div>
                        
                        {/* Interior & Team */}
                        <div className="space-y-2">
                          <div className="h-[calc(50%-4px)] rounded-xl overflow-hidden shadow-md relative group">
                            <img 
                              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=200&fit=crop" 
                              alt="Restaurant interior"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-1.5 left-1.5 text-white text-[9px] font-medium flex items-center gap-1">
                              <i className="bi bi-shop"></i>
                              Interior
                            </div>
                          </div>
                          <div className="h-[calc(50%-4px)] rounded-xl overflow-hidden shadow-md relative group">
                            <img 
                              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&h=200&fit=crop" 
                              alt="Chef at work"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-1.5 left-1.5 text-white text-[9px] font-medium flex items-center gap-1">
                              <i className="bi bi-people-fill"></i>
                              Team
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Info Badge */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                            <i className="bi bi-check-lg text-white text-lg"></i>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">Included at Signup</div>
                            <div className="text-xs text-gray-600">Professional photographer visits your location</div>
                          </div>
                        </div>
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

