import { UtensilsCrossed, Wine, Sandwich } from "lucide-react";
import Image from "next/image";

export function PerfectSetup() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-8 sm:mb-10 lg:mb-12 text-center">
        A Win-Win Solution for Restaurants and Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="h-40 sm:h-48 bg-gray-200 relative">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/table-service.png"
                alt="Table service restaurant interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600]" />
                Table Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                Guests sit down, scan, and order without waiting for a server to bring a menu.
              </p>
              <div className="text-[10px] sm:text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                Key Benefit: Faster Table Turns
              </div>
            </div>
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="h-40 sm:h-48 bg-gray-200 relative">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/bar-counter.png"
                alt="Bar counter with stools"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <Wine className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600]" />
                Bar &amp; Counter
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                Eliminate the crush at the bar. Patrons order rounds from their stools.
              </p>
              <div className="text-[10px] sm:text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                Key Benefit: Reduced Crowding
              </div>
            </div>
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="h-40 sm:h-48 bg-gray-200 relative">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/quick-service.png"
                alt="Fast casual burger joint"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <Sandwich className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600]" />
                Quick Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                Perfect for food courts and fast casual. Order ahead or at the table to skip the line.
              </p>
              <div className="text-[10px] sm:text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                Key Benefit: Line Busting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

