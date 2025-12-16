import { Rocket, UtensilsCrossed, TrendingUp, Globe } from "lucide-react";

export function JourneyTimeline() {
  const milestones = [
    {
      year: "2018",
      icon: Rocket,
      title: "Ser.vi Founded",
      description:
        "Launched in a small garage in Austin with a mission to simplify POS systems for food trucks.",
      side: "right",
    },
    {
      year: "2020",
      icon: UtensilsCrossed,
      title: "Pivot & Adapt",
      description:
        "Released contactless ordering to help restaurants survive the pandemic lockdowns.",
      side: "left",
    },
    {
      year: "2022",
      icon: TrendingUp,
      title: "Series A Funding",
      description:
        "Raised $15M to expand our engineering team and build the all-in-one kitchen display system.",
      side: "right",
    },
    {
      year: "2024",
      icon: Globe,
      title: "Global Expansion",
      description:
        "Opened offices in London and Sydney, serving over 500 independent restaurants worldwide.",
      side: "left",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-10 overflow-hidden bg-gray-50/50 dark:bg-black/10">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1f2937] dark:text-white text-center mb-20 tracking-tight">
          Our Journey
        </h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-200 via-[#ff6b00] to-gray-200 dark:from-gray-800 dark:via-[#ff6b00] dark:to-gray-800 md:-ml-0.5 rounded-full opacity-60"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 group ${
                index === milestones.length - 1 ? "mb-0" : ""
              }`}
            >
              {/* Content Card - Desktop Layout */}
              <div
                className={`ml-16 md:ml-0 md:w-[45%] ${
                  milestone.side === "right" ? "md:pr-16 md:text-right" : "md:pl-16"
                } ${milestone.side === "left" ? "md:order-3" : ""}`}
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group-hover:border-[#ff6b00]/30">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] text-xs font-bold mb-4">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1f2937] dark:text-white mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-[#6b7280] dark:text-gray-400 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Icon Circle */}
              <div className="absolute left-0 md:left-1/2 md:-ml-8 w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-gray-900 border-[3px] border-[#ff6b00] rounded-full flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300 text-[#ff6b00]">
                <milestone.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>

              {/* Spacer for Desktop */}
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

