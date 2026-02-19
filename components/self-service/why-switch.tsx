import { Check, HelpCircle, Users } from "lucide-react";
import Image from "next/image";

const QUESTIONS = [
  "Are long lines causing your customers to leave the line?",
  "Are you not turning tables fast enough?",
  "Is your staff cost too high to maintain service levels?",
];

const BENEFITS = [
  {
    title: "Uneven staffing requirements",
    description: "Take orders during unexpected spikes even when understaffed.",
  },
  {
    title: "Staff calls out",
    description: "When your short staffed, customers can still order and pay.",
  },
  {
    title: "High cost of staffing",
    description: "A server can serve twice as many tables when guests can place orders themselves.",
  },
  {
    title: "Out of sight tables",
    description: "Customers can order from dining rooms and patios that are not easy to monitor.",
  },
];

export function WhySwitch() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl mb-2 sm:mb-3">
            Why Self-Service QR Ordering would be a{" "}
            <span className="text-[#FF6600]">good fit for your restaurant.</span>
          </h2>
        </div>

        {/* Questions */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          {QUESTIONS.map((question, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm"
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

        {/* It's Not a Fix, it's an Upgrade */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl">
            It&apos;s Not a Fix, it&apos;s an{" "}
            <span className="text-[#FF6600]">Upgrade.</span>
          </h2>
        </div>

        {/* Handle More Orders — two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 lg:items-center mb-8 sm:mb-10">

          {/* Left — Image */}
          <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dxax8yrgb/image/upload/v1771503371/crouded-restaurant_yzulae.webp"
              alt="Fully packed restaurant birds eye view"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right — Content */}
          <div className="min-w-0">
            <div className="flex items-center gap-2.5 mb-3">
              <Users className="w-5 h-5 text-[#FF6600]" />
              <span className="text-[#FF6600] font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                Staffing Solution
              </span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
              Handle More Orders With <span className="text-[#FF6600]">Less Staff</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              About 30% of guests will use self service when available, which allows your staff to spend more time with the other 70% who prefer traditional order taking service.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {BENEFITS.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#FF6600]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
