import { Users, Clock, CreditCard, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhySwitch() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Decorative elements - scaled on mobile to avoid overflow */}
      <div className="absolute top-0 right-0 w-[min(500px,100vw)] h-[min(500px,80vh)] bg-gradient-to-bl from-[#FF6600]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[min(400px,100vw)] h-[min(400px,60vh)] bg-gradient-to-tr from-amber-200/30 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" aria-hidden />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FF6600\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-6 leading-tight break-words">
            Why Restaurants Choose
            <br />
            <span className="text-[#FF6600]">Self-Service QR Ordering</span>
          </h2>
        </div>

        {/* Main Feature Card */}
        <div className="mb-6 sm:mb-10">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FF6600] to-[#E65C00] p-5 sm:p-8 lg:p-12 text-white overflow-hidden shadow-2xl shadow-orange-500/20">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative z-10 min-w-0">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 lg:gap-12">
                {/* Left side - Title */}
                <div className="lg:w-1/3 min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 leading-tight break-words">
                    Handle More Orders With Less Staff
                  </h3>
                  <p className="text-white/80 text-base sm:text-lg">
                    Customers prefer to order with their own phone over waiting for service.
                  </p>
                </div>
                
                {/* Right side - Benefits grid */}
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 min-w-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#FF6600]" />
                      </div>
                      <h4 className="font-bold text-white">Uneven staffing requirements</h4>
                    </div>
                    <p className="text-white/80 text-sm">Take orders during unexpected spikes even when understaffed.</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#FF6600]" />
                      </div>
                      <h4 className="font-bold text-white">Outdoor Patios</h4>
                    </div>
                    <p className="text-white/80 text-sm">Improve guest experience immediately in hard to service dining areas.</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#FF6600]" />
                      </div>
                      <h4 className="font-bold text-white">Entertainment Venues</h4>
                    </div>
                    <p className="text-white/80 text-sm">Seamlessly take orders and payment while guests enjoy the entertainment.</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#FF6600]" />
                      </div>
                      <h4 className="font-bold text-white">Turn Tables Faster</h4>
                    </div>
                    <p className="text-white/80 text-sm">Self service means self pay and bill splitting in half the time.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

        {/* Secondary Cards Grid - Turn Tables Faster + Instant Digital Payments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto min-w-0">
          {/* Card 1 - Turn Tables Faster / Persistent open tabs */}
          <div className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-0.5 min-w-0">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Turn Tables Faster
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Remove the wait for the bill. Guests pay and leave when ready, freeing up tables for new diners.
              </p>
              <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
                <Check className="w-4 h-4" />
                <span>Persistent open tabs · 15% faster turnover</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Instant Digital Payments */}
          <div className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-0.5 min-w-0">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 text-[#FF6600]" />
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Instant Digital Payments
                </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Seamless checkout with Apple Pay, Google Pay, and all major cards. No cash handling—just tap and done.
                </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-full">
                  <i className="bi bi-apple text-sm text-gray-700"></i>
                  <span className="text-xs font-medium text-gray-700">Pay</span>
                </div>
                <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-full">
                  <i className="bi bi-google text-sm text-gray-700"></i>
                  <span className="text-xs font-medium text-gray-700">Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Link 
            href="/pricing" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6600] text-white font-bold rounded-xl hover:bg-[#E65C00] transition-colors shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30"
          >
            See Pricing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
