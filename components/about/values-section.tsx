import { BookOpen, Lightbulb, Handshake } from "lucide-react";

const VALUES = [
  {
    icon: BookOpen,
    title: "Transparency",
    description:
      "No hidden fees, no data holding. We believe restaurant owners should own their data and understand exactly what they're paying for.",
    color: "#FF6600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We don't just copy what exists. We rethink workflows from the ground up to solve the specific pain points of modern kitchens.",
    color: "#10B981",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We are not just a vendor; we are a partner in your success. When you grow, we grow. Our support team is an extension of your staff.",
    color: "#3B82F6",
  },
];

export function ValuesSection() {
  return (
    <section id="values" className="py-10 sm:py-14 lg:py-20 bg-[#1a1625] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[#FF6600] font-bold uppercase tracking-wider text-[10px] sm:text-xs">
            What We Stand For
          </span>
          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3">
            Core <span className="text-[#FF6600]">Values</span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-gray-400">
            The principles that guide every feature we build and every support
            ticket we answer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:-translate-y-0.5"
              >
                {/* Accent line at top */}
                <div
                  className="absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: value.color }}
                />

                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <Icon
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    style={{ color: value.color }}
                  />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
