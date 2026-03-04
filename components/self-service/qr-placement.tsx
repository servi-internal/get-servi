import { QrCode, Smartphone } from "lucide-react";
import Image from "next/image";

const QR_IMAGE_URL = "https://assets2.ser.vi/brand/saltestco/feature_image/QR-Code.jpg";

export function QRPlacement() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-w-0">
          <div className="relative flex items-center justify-center order-2 lg:order-1 min-w-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-square">
              <Image
                src={QR_IMAGE_URL}
                alt="QR code for ordering"
                fill
                className="object-contain rounded-xl sm:rounded-2xl"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 min-w-0">
            <span className="inline-block py-1 px-2.5 sm:px-3 rounded-full bg-orange-50 text-[#FF6600] font-bold tracking-wider uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">
              Easy Setup
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3 sm:mb-6 break-words">
              QR Codes on Every <span className="text-[#FF6600]">Table & Counter</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 leading-relaxed">
              We provide QR codes & stickers on every table and counter throughout your restaurant, making ordering faster and easier than ever.
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
        </div>
      </div>
    </section>
  );
}

