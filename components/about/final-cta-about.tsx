export function FinalCTAAbout() {
  return (
    <section className="py-24 bg-[#f9fafb] dark:bg-[#18181b] text-center px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-[#1f2937] dark:text-white mb-6">
          Ready to modernize your restaurant?
        </h2>
        <p className="text-lg text-[#6b7280] dark:text-gray-400 mb-10">
          Let&apos;s chat about how Ser.vi can help you save time, reduce waste, and
          increase profits.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#ff6b00] text-white px-8 py-3.5 rounded-lg text-base font-bold hover:bg-[#ff6b00]/90 transition-colors shadow-lg shadow-[#ff6b00]/20">
            Book a Meeting
          </button>
          <button className="w-full sm:w-auto bg-white dark:bg-transparent border border-gray-300 dark:border-gray-600 text-[#1f2937] dark:text-white px-8 py-3.5 rounded-lg text-base font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

