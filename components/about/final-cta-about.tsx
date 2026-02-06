import Link from "next/link";

export function FinalCTAAbout() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f9fafb] text-center overflow-hidden">
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1f2937] mb-3 sm:mb-4 lg:mb-6">
          Ready to modernize your restaurant?
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[#6b7280] mb-6 sm:mb-8">
          Let&apos;s chat about how Ser.vi can help you save time, reduce waste, and
          increase profits.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/schedule-demo" className="w-full sm:w-auto bg-[#ff6b00] text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-bold hover:bg-[#ff6b00]/90 transition-colors shadow-lg shadow-[#ff6b00]/20 text-center min-h-[44px]">
            Request a Demo
          </Link>
          <button className="w-full sm:w-auto bg-white border border-gray-300 text-[#1f2937] px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-bold hover:bg-gray-50 transition-colors min-h-[44px]">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

