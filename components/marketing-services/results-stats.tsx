import { TrendingUp, UserPlus, DollarSign, Repeat } from "lucide-react";
import Image from "next/image";

export function ResultsStats() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-gray-900 text-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Real Results from <span className="text-[#FF6600]">Real Restaurants</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Average performance metrics after 6 months with Ser.vi
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-gray-800/50 border border-gray-700 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-3xl sm:text-4xl font-bold text-[#FF6600]">40%</span>
              <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Increase in direct orders volume
            </p>
            <div className="h-10 w-full flex items-end gap-1">
              <div className="bg-[#FF6600]/20 hover:bg-[#FF6600] w-full rounded-t-sm h-[40%] transition-all"></div>
              <div className="bg-[#FF6600]/20 hover:bg-[#FF6600] w-full rounded-t-sm h-[55%] transition-all"></div>
              <div className="bg-[#FF6600]/20 hover:bg-[#FF6600] w-full rounded-t-sm h-[45%] transition-all"></div>
              <div className="bg-[#FF6600]/20 hover:bg-[#FF6600] w-full rounded-t-sm h-[70%] transition-all"></div>
              <div className="bg-[#FF6600]/20 hover:bg-[#FF6600] w-full rounded-t-sm h-[60%] transition-all"></div>
              <div className="bg-[#FF6600] w-full rounded-t-sm h-[90%] shadow-[0_0_10px_#FF6600]"></div>
            </div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-3xl sm:text-4xl font-bold text-[#FF6600]">2.5x</span>
              <UserPlus className="w-5 h-5 text-green-400 mb-2" />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Customer database growth
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image
                alt="Gaetano Gisone"
                className="h-8 w-8 rounded-full object-cover flex-shrink-0"
                src="/testimonials/testimonial_rosas.webp"
                width={32}
                height={32}
              />
              <span className="text-xs text-gray-400">Rosa&apos;s Pizzeria</span>
            </div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-3xl sm:text-4xl font-bold text-[#FF6600]">$12k</span>
              <DollarSign className="w-5 h-5 text-green-400 mb-2" />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Saved in commissions / year
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image
                alt="Andrew Dimatos"
                className="h-8 w-8 rounded-full object-cover flex-shrink-0"
                src="/testimonials/testimonial_midland.webp"
                width={32}
                height={32}
              />
              <span className="text-xs text-gray-400">Midland Bagels</span>
            </div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-3xl sm:text-4xl font-bold text-[#FF6600]">15%</span>
              <Repeat className="w-5 h-5 text-green-400 mb-2" />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Higher repeat customer rate
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image
                alt="Pablo Rosales"
                className="h-8 w-8 rounded-full object-cover flex-shrink-0"
                src="/testimonials/testimonial_dangelos.webp"
                width={32}
                height={32}
              />
              <span className="text-xs text-gray-400">D&apos;Angelos Gun Hill</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

