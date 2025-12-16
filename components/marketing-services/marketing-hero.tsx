import Image from "next/image";
import { TrendingUp, UserPlus, Repeat } from "lucide-react";

export function MarketingHero() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left z-10">
            <h1 className="text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              Grow &amp; Retain: Marketing That Actually Works
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Drive direct orders and turn one-time diners into loyal regulars
              with our automated marketing engine that connects the dots for
              you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white text-base font-bold h-12 px-8 rounded-lg shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-0.5">
                See Plans &amp; Pricing
              </button>
              <button className="bg-white border border-gray-200 text-gray-900 text-base font-bold h-12 px-8 rounded-lg hover:bg-gray-50 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
          <div className="relative w-full lg:h-[600px] flex items-center justify-center select-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6600]/20 via-orange-50 to-blue-50/50 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] z-0"></div>
            <div className="relative w-[340px] sm:w-[420px] bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-6 z-10 transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1 border-t-white/80">
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-[#FF6600]/10 rounded-lg flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-5 h-5 text-[#FF6600]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      Marketing ROI
                    </h3>
                    <p className="text-xs text-gray-500">Last 30 Days</p>
                  </div>
                </div>
                <span className="flex items-center text-green-700 bg-green-50 px-3 py-1.5 rounded-full text-xs font-bold border border-green-100 shadow-sm">
                  <TrendingUp className="w-3 h-3 mr-1" /> +124%
                </span>
              </div>
              <div className="h-48 flex items-end justify-between gap-2 mb-8 px-2 relative">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
                  <div className="border-t border-dashed border-gray-300 w-full"></div>
                  <div className="border-t border-dashed border-gray-300 w-full"></div>
                  <div className="border-t border-dashed border-gray-300 w-full"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm h-[30%] relative group cursor-pointer hover:bg-[#FF6600]/30 transition-all duration-300 z-10"></div>
                <div className="w-full bg-gray-100 rounded-t-sm h-[45%] relative group cursor-pointer hover:bg-[#FF6600]/30 transition-all duration-300 z-10"></div>
                <div className="w-full bg-gray-100 rounded-t-sm h-[35%] relative group cursor-pointer hover:bg-[#FF6600]/30 transition-all duration-300 z-10"></div>
                <div className="w-full bg-[#FF6600]/30 rounded-t-sm h-[60%] relative group cursor-pointer hover:bg-[#FF6600]/40 transition-all duration-300 z-10"></div>
                <div className="w-full bg-[#FF6600]/50 rounded-t-sm h-[50%] relative group cursor-pointer hover:bg-[#FF6600]/60 transition-all duration-300 z-10"></div>
                <div className="w-full bg-[#FF6600]/70 rounded-t-sm h-[75%] relative group cursor-pointer hover:bg-[#FF6600]/80 transition-all duration-300 z-10"></div>
                <div className="w-full bg-[#FF6600] rounded-t-sm h-[90%] relative group cursor-pointer shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300 z-10 hover:h-[95%]">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none shadow-lg font-bold">
                    $8,450 Revenue
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:bg-white hover:border-blue-100 group">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                      <UserPlus className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-gray-700">
                      New Diners
                    </span>
                  </div>
                  <span className="text-sm font-black text-gray-900">482</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:bg-white hover:border-orange-100 group">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-white border border-orange-100 flex items-center justify-center text-orange-600 shadow-sm group-hover:scale-110 transition-transform">
                      <Repeat className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-gray-700">
                      Repeat Rate
                    </span>
                  </div>
                  <span className="text-sm font-black text-gray-900">38%</span>
                </div>
              </div>
            </div>
            <div className="absolute top-[5%] left-[5%] sm:-left-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-48 animate-float z-20 backdrop-blur-sm bg-white/95">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="size-6 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm">
                    <span className="font-bold text-blue-500 text-xs">G</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                    Ad Click
                  </span>
                </div>
                <span className="flex size-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
              </div>
              <p className="text-xs font-bold text-gray-800 mb-1">
                &quot;Pizza near me&quot;
              </p>
              <p className="text-[10px] text-gray-500 flex items-center gap-1">
                <span className="text-green-500">✓</span>
                Converted in 2m 30s
              </p>
            </div>
            <div className="absolute bottom-[10%] right-0 sm:-right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-60 animate-float-delayed z-20 backdrop-blur-sm bg-white/95">
              <div className="flex gap-3 items-start">
                <div className="size-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xs shadow-md ring-2 ring-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black"></div>
                  <span className="relative z-10">JD</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">
                    Welcome Back, John!
                  </div>
                  <div className="bg-[#FF6600]/5 rounded p-1.5 mt-1.5 border border-[#FF6600]/10">
                    <p className="text-[10px] text-gray-600 leading-tight">
                      <span className="font-bold text-[#FF6600]">Trigger:</span>{" "}
                      Email campaign sent. <br />
                      <span className="font-bold text-gray-900">Result:</span>{" "}
                      Order #2910 ($54.20)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

