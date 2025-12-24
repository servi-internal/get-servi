import { Users, ShieldCheck, Clock, CreditCard, ArrowRight } from "lucide-react";

export function WhySwitch() {
  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#FF6600]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 bg-[#FF6600] rounded-full animate-pulse"></span>
            <span className="text-[#FF6600] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              The Benefits
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
            Why Restaurants Choose
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-orange-600">
              QR Code Ordering
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Handle more orders with less staff. Eliminate wait times and speed up service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1 - Featured Large */}
          <div className="lg:row-span-2 group relative rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF6600] to-[#E65C00] p-6 sm:p-8 text-white overflow-hidden shadow-xl hover:shadow-[#FF6600]/20 transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-black/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">
                Handle More Orders
                <br />
                With Less Staff
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 sm:mb-6">
                Serve peak hours seamlessly even when short-staffed. Let technology handle order-taking while your team focuses on food quality.
              </p>
              <div className="flex items-center gap-2 text-white font-bold group-hover:gap-3 transition-all text-xs sm:text-sm">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 p-5 sm:p-6 border-2 border-gray-100 dark:border-gray-700 hover:border-[#FF6600]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-green-100 dark:bg-green-900/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-green-500 transition-colors duration-300">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                Eliminate Dine &amp; Dash
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                Secure upfront payments mean zero walked tabs. Every order is already paid for—no more revenue loss.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 p-5 sm:p-6 border-2 border-gray-100 dark:border-gray-700 hover:border-[#FF6600]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                Turn Tables Faster
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                Remove the wait for the bill. Guests pay and leave when ready, freeing up tables for new diners.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="lg:col-span-2 group relative rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 text-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF6600]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
              <div className="flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#FF6600] transition-colors duration-300">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Instant Digital Payments
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Seamless checkout with Apple Pay, Google Pay, and all major cards. No cash handling—just tap and done.
                </p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-end">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <i className="bi bi-apple text-base sm:text-lg"></i>
                  <span className="text-[10px] sm:text-xs font-bold">Apple Pay</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <i className="bi bi-google text-base sm:text-lg"></i>
                  <span className="text-[10px] sm:text-xs font-bold">Google Pay</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <CreditCard className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="text-[10px] sm:text-xs font-bold">All Cards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

