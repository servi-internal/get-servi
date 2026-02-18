import { UtensilsCrossed, Wine, Sandwich, Tag, Sparkles } from "lucide-react";
import Image from "next/image";

export function PerfectSetup() {
  return (
    <section className="py-8 sm:py-14 lg:py-16 bg-gray-50 dark:bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-5 sm:mb-8 text-center break-words">
          A <span className="text-[#FF6600]">Win-Win Solution</span> for Restaurants and Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 min-w-0">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition-shadow min-w-0">
            <div className="h-28 sm:h-40 bg-gray-200 relative min-h-[112px]">
              <Image
                src="https://res.cloudinary.com/dxax8yrgb/image/upload/v1771403094/table-service_g49zl3.png"
                alt="Table service restaurant interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-bold mb-1.5 flex items-center gap-2 text-gray-900 dark:text-white">
                <UtensilsCrossed className="w-4 h-4 text-[#FF6600]" />
                Table Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2 flex-grow">
                Guests sit down, scan, and order without waiting for a server to bring a menu.
              </p>
              <div className="text-[10px] sm:text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                Key Benefit: Faster Table Turns
              </div>
            </div>
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition-shadow min-w-0">
            <div className="h-32 sm:h-40 bg-gray-200 relative">
              <Image
                src="https://res.cloudinary.com/dxax8yrgb/image/upload/v1771403093/counter-service_hfcbms.png"
                alt="Counter with stools"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-bold mb-1.5 flex items-center gap-2 text-gray-900 dark:text-white">
                <Wine className="w-4 h-4 text-[#FF6600]" />
                Counter
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2 flex-grow">
                Reduce long lines and reallocate staff to making and serving food and drink.
              </p>
              <div className="text-[10px] sm:text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                Key Benefit: Reduced Crowding
              </div>
            </div>
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition-shadow min-w-0">
            <div className="h-32 sm:h-40 bg-gray-200 relative">
              <Image
                src="https://res.cloudinary.com/dxax8yrgb/image/upload/v1771403268/quick-service_x3tma9.png"
                alt="Fast casual burger joint"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-bold mb-1.5 flex items-center gap-2 text-gray-900 dark:text-white">
                <Sandwich className="w-4 h-4 text-[#FF6600]" />
                Quick Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2 flex-grow">
                Perfect for food courts and fast casual. Order ahead or at the table to skip the line.
              </p>
              <div className="text-[10px] sm:text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                Key Benefit: Line Busting
              </div>
            </div>
          </div>
        </div>
        {/* Emphasize control: Sell out + Daily specials */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto min-w-0">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition-shadow min-w-0">
            <div className="h-28 sm:h-40 bg-gray-200 relative min-h-[112px]">
              <Image
                src="https://res.cloudinary.com/dxax8yrgb/image/upload/v1771403674/sold-out_xghwut.png"
                alt="Sold out menu control"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-bold mb-1.5 flex items-center gap-2 text-gray-900 dark:text-white">
                <Tag className="w-4 h-4 text-[#FF6600]" />
                Sell out
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2 flex-grow">
                Don&apos;t receive orders for things you can&apos;t make. One-click sell out and restock of any item on your menu.
              </p>
              <div className="text-[10px] sm:text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                Key Benefit: Menu control
              </div>
            </div>
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition-shadow min-w-0">
            <div className="h-28 sm:h-40 bg-gray-200 relative min-h-[112px]">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/special.jpeg"
                alt="Daily specials"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-bold mb-1.5 flex items-center gap-2 text-gray-900 dark:text-white">
                <Sparkles className="w-4 h-4 text-[#FF6600]" />
                Daily specials
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2 flex-grow">
                Set up on the fly—unscheduled special items at special prices to move your inventory.
              </p>
              <div className="text-[10px] sm:text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                Key Benefit: Move inventory
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

