import { QrCode, Smartphone } from "lucide-react";
import Image from "next/image";

export function QRPlacement() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-2.5 sm:px-3 rounded-full bg-orange-50 text-[#FF6600] font-bold tracking-wider uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">
              Easy Setup
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
              QR Codes on Every Table
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 leading-relaxed">
              We provide QR codes on every table and convenient stickers throughout your restaurant, making ordering faster and easier than ever.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-5 h-5 text-[#FF6600]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    Table Toppers & Tent Cards
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Durable, branded QR code stands for every table in your dining room.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-[#FF6600]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    Wall & Counter Stickers
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Weatherproof stickers for bars, counters, and high-traffic areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            {/* Main QR Card with 3D perspective */}
            <div className="relative w-full max-w-xs">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-5 sm:p-6 border border-gray-100 dark:border-gray-700 transform hover:rotate-1 transition-all duration-500 hover:shadow-[#FF6600]/20 hover:shadow-2xl">
                {/* QR Code Icon - Large and Clean */}
                <div className="relative mb-4">
                  <div className="aspect-square bg-gradient-to-br from-[#FF6600]/5 to-[#FF6600]/10 rounded-xl p-5 flex items-center justify-center border-2 border-dashed border-[#FF6600]/30">
                    <QrCode className="w-full h-full text-[#FF6600]" strokeWidth={1.5} />
                  </div>
                  {/* Scan indicator dots */}
                  <div className="absolute -top-1.5 -right-1.5 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                    Scan to Order
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></div>
                    <p className="text-xs font-bold text-gray-600 dark:text-gray-300">
                      Table 12
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-br from-[#FF6600] to-[#FF8533] text-white p-3 sm:p-3.5 rounded-xl shadow-xl shadow-[#FF6600]/30 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  <p className="text-xs sm:text-sm font-bold">No App Needed</p>
                </div>
                <p className="text-[10px] text-white/90">
                  Works with native camera
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

