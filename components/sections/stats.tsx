export function Stats() {
  return (
    <section className="w-full bg-[#333333] py-16 sm:py-20 lg:py-24 text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 sm:gap-12 text-center md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
          <div className="flex flex-col gap-2 p-4 pt-0 md:pt-4">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white text-[#FF6600]">
              62%
            </span>
            <p className="text-sm sm:text-base font-medium text-gray-300">
              of consumers discover new
              <br />
              restaurants on Google
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 pt-8 md:pt-4">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white text-[#FF6600]">
              $200K+
            </span>
            <p className="text-sm sm:text-base font-medium text-gray-300">
              processed in commission-free
              <br />
              orders last year
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 pt-8 md:pt-4">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white text-[#FF6600]">
              2.5x
            </span>
            <p className="text-sm sm:text-base font-medium text-gray-300">
              faster table turnover
              <br />
              & service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

