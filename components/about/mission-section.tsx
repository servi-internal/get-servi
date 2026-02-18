import { Heart, Users, Utensils, Shield } from "lucide-react";

const PILLARS = [
  {
    icon: Heart,
    title: "Hospitality First",
    description:
      "Technology should be invisible. We build tools that stay out of the way so owners can focus on food and people.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Independent restaurants are the soul of every neighborhood. We exist to keep them thriving.",
  },
  {
    icon: Utensils,
    title: "Built for Restaurants",
    description:
      "Every feature is designed by people who understand the chaos of a kitchen and the demands of service.",
  },
  {
    icon: Shield,
    title: "No Hidden Fees",
    description:
      "Transparent pricing, no commissions, no data hostage. You own your customers and your revenue.",
  },
];

export function MissionSection() {
  return (
    <section id="mission" className="py-10 sm:py-14 lg:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mission statement */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[#FF6600] font-bold uppercase tracking-wider text-[10px] sm:text-xs">
            Our Mission
          </span>
          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1F2937] leading-tight">
            We believe technology should serve hospitality,{" "}
            <span className="text-[#FF6600]">not replace it.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            We started Ser.vi with a simple belief: independent restaurants are the
            soul of our communities. In a world dominated by chains and costly delivery apps,
            we provide the tools local owners need to compete, survive, and flourish.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl sm:rounded-2xl border border-gray-100 bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FF6600]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF6600] transition-colors duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6600] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#1F2937] mb-1.5 group-hover:text-[#FF6600] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <div className="mt-10 sm:mt-14 text-center max-w-2xl mx-auto">
          <div className="w-10 h-0.5 bg-[#FF6600] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic">
            &ldquo;Too often, technology creates a barrier between the host and the guest.
            We build invisible tools that handle the chaos of the kitchen and the
            complexity of the back office, so owners can focus on what matters most:
            the food and the people.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
