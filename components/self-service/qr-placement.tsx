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
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-700">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div className="w-48 h-48 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex items-center justify-center border-4 border-[#FF6600]/20">
                  <div className="text-center">
                    <QrCode className="w-32 h-32 text-[#FF6600] mx-auto mb-3" />
                    <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                      Scan to Order
                    </p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">
                      Table 12
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
              <p className="text-xs font-bold text-[#FF6600] mb-1">No App Needed</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">
                Works with native camera
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

