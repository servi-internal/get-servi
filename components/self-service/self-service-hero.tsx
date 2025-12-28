import { ArrowRight, PlayCircle, Check } from "lucide-react";

export function SelfServiceHero() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-orange-50 dark:bg-orange-900/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gray-50 dark:bg-gray-800/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-4 sm:gap-6 max-w-2xl z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white">
              Zero Wait.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-orange-600">
                Scan. Order.
              </span>
              <br />
              Enjoy.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
              QR code ordering for dine-in & counter service. Reduce losing customers due to long lines and wait times. Take more orders & speed up payment processing even when short staffed. Your guests can just scan, order, and pay from their own phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a href="#how-it-works" className="flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 bg-[#FF6600] hover:bg-[#E65C00] text-white text-sm sm:text-base font-bold rounded-full transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5">
                See How It Works <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#video-demo" className="group flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white text-sm sm:text-base font-bold rounded-full transition-all hover:border-[#FF6600] hover:text-[#FF6600] dark:hover:border-[#FF6600] dark:hover:text-[#FF6600]">
                <PlayCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600] group-hover:scale-110 transition-transform" />{" "}
                View Demo
              </a>
            </div>
          </div>
          <div className="relative lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full aspect-square max-w-[400px] sm:max-w-[500px] flex items-center justify-center">
              <div className="absolute right-0 top-10 w-36 h-48 sm:w-48 sm:h-64 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transform rotate-12 z-0 animate-float opacity-80">
                <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 mb-2"></div>
                  <div className="h-1.5 sm:h-2 w-full bg-gray-100 rounded"></div>
                  <div className="h-1.5 sm:h-2 w-2/3 bg-gray-100 rounded"></div>
                  <div className="h-1.5 sm:h-2 w-3/4 bg-gray-100 rounded"></div>
                </div>
              </div>
              <div className="relative z-20 w-[220px] sm:w-[260px] h-[440px] sm:h-[520px] bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] border-6 sm:border-8 border-gray-900 shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-500">
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-30 rounded-b-xl w-32 mx-auto"></div>
                <div className="w-full h-full bg-white relative">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900">
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-48 h-48 border-2 border-white/60 rounded-3xl relative backdrop-blur-[2px]">
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#FF6600] rounded-tl-lg -mt-1 -ml-1"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#FF6600] rounded-tr-lg -mt-1 -mr-1"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#FF6600] rounded-bl-lg -mb-1 -ml-1"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#FF6600] rounded-br-lg -mb-1 -mr-1"></div>
                      <div className="absolute top-1/2 left-2 right-2 h-0.5 bg-[#FF6600] shadow-[0_0_15px_rgba(255,87,34,1)] animate-pulse"></div>
                    </div>
                    <div className="mt-8 px-5 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wide border border-white/20 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Scanning Table 12...
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex justify-between text-white text-xs opacity-80">
                      <span>Flash: Auto</span>
                      <span>Tap to focus</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-16 sm:bottom-20 -left-6 sm:-left-10 z-30 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 flex items-center gap-3 sm:gap-4 animate-bounce max-w-[180px] sm:max-w-[220px]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                    Menu Loaded
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-gray-500">
                    Redirecting to order...
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

