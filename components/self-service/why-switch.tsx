import { Users, Check, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

const QUESTIONS = [
  "Are long lines causing your customers to leave the line?",
  "Are you not turning tables fast enough?",
  "Is your staff cost too high to maintain service levels?",
];

export function WhySwitch() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white relative overflow-hidden">

      <div className="mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl mb-2 sm:mb-3">
            Why Self-Service QR Ordering would be a{" "}
            <span className="text-[#FF6600]">good fit for your restaurant.</span>
          </h2>
        </div>

        {/* Questions */}
        <div className="max-w-2xl mx-auto mb-6 sm:mb-8 space-y-3">
          {QUESTIONS.map((question, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF6600]/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6600]" />
              </div>
              <p className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">
                {question}
              </p>
            </div>
          ))}
        </div>

        {/* Byline */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 text-center">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            The problem isn&apos;t your staff, it&apos;s the technology you&apos;re using. Unlock useful connectivity between your guest and your business with QR Ordering for self-service.
          </p>
        </div>

        {/* Heading: It's Not a Fix, it's an Upgrade */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl">
            It&apos;s Not a Fix, it&apos;s an{" "}
            <span className="text-[#FF6600]">Upgrade.</span>
          </h2>
        </div>

        {/* Main Feature Card (Orange Box) */}
        <div className="mb-6 sm:mb-10">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FF6600] via-[#FF5500] to-[#CC5200] p-5 sm:p-8 lg:p-10 text-white overflow-hidden shadow-2xl shadow-orange-600/30">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/15 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="relative z-10 min-w-0">
              <div className="flex flex-col lg:flex-row lg:items-start gap-5 sm:gap-6 lg:gap-10">
                {/* Left side - Title */}
                <div className="lg:w-1/3 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black mb-2 leading-tight break-words">
                    Handle More Orders With Less Staff
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base">
                    Customers prefer to order with their own phone over waiting for service.
                  </p>
                </div>

                {/* Right side - Benefits grid */}
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 min-w-0">
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#FF6600]" />
                      </div>
                      <h4 className="font-bold text-white text-sm">Uneven staffing requirements</h4>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm">Take orders during unexpected spikes even when understaffed.</p>
                  </div>

                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#FF6600]" />
                      </div>
                      <h4 className="font-bold text-white text-sm">Outdoor Patios</h4>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm">Improve guest experience immediately in hard to service dining areas.</p>
                  </div>

                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#FF6600]" />
                      </div>
                      <h4 className="font-bold text-white text-sm">Entertainment Venues</h4>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm">Seamlessly take orders and payment while guests enjoy the entertainment.</p>
                  </div>

                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/25 hover:bg-white/20 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#FF6600]" />
                      </div>
                      <h4 className="font-bold text-white text-sm">Turn Tables Faster</h4>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm">Self service means self pay and bill splitting in half the time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6 sm:mt-10">
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
