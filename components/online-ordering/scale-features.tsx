import {
  FileText,
  TabletSmartphone,
  Printer,
  CreditCard,
  Store,
} from "lucide-react";

const FEATURES = [
  {
    icon: FileText,
    title: "Send us your existing menus",
    description:
      "We provide full data entry from your PDF or delivery app links.",
  },
  {
    icon: TabletSmartphone,
    title: "Receive orders with our app and tablet",
    description:
      "Automatically print orders handsfree, view order histories, and run reports.",
  },
  {
    icon: Printer,
    title: "Print orders with your existing printers",
    description: "Works with all network printer makes and models.",
  },
  {
    icon: CreditCard,
    title: "Your own credit card processing",
    description:
      "Use your existing credit card processing, or ours, and you get paid out daily.",
  },
  {
    icon: Store,
    title: "Multi Location support",
    description:
      "Manage a single menu and settings across multiple location ordering links.",
  },
];

export function ScaleFeatures() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 overflow-x-hidden bg-[#FAFAFA]"
      aria-labelledby="scale-features-heading"
    >
      {/* Subtle background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#FF6600 0.5px, transparent 0.5px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#FF6600]/5 to-transparent rounded-full blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-12 text-center max-w-3xl mx-auto">
          <h2
            id="scale-features-heading"
            className="text-xl font-bold text-[#333333] tracking-tight sm:text-2xl md:text-3xl lg:text-4xl"
          >
            A Complete and Professional{" "}
            <span className="text-[#FF6600]">Online Ordering System</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Everything you need to sell online—menus, orders, printers, payments, and multi-location support.
          </p>
        </div>

        {/* Grid layout - all cards visible without scrolling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isHighlight = index === 1;

            return (
              <article
                key={index}
                className={`group relative rounded-2xl p-6 sm:p-8 flex flex-col border shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl ${
                  isHighlight
                    ? "bg-gradient-to-br from-[#FF6600] to-[#E65C00] border-white/20"
                    : "bg-[#1a1625] border-white/10"
                }`}
              >
                {/* Decorative icon in corner for highlight card */}
                {isHighlight && (
                  <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                    <TabletSmartphone className="w-20 h-20 text-white" />
                  </div>
                )}

                <div className="relative z-10 flex flex-col flex-1 min-w-0">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0 transition-colors duration-300 ${
                      isHighlight
                        ? "bg-white/20 border border-white/30 text-white"
                        : "bg-white/10 border border-white/15 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 leading-snug text-white">
                    {feature.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed flex-1 ${
                      isHighlight ? "text-white/95" : "text-gray-300"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
