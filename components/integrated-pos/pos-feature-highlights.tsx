const HIGHLIGHTS = [
  {
    title: "Limited Inventory Items",
    description:
      "Set limited QOH on items that auto sell out as you take orders",
    icon: "bi-box-seam",
    active: false,
  },
  {
    title: "Gift Cards Issue and Redeem",
    description:
      "Delight guests with gift cards that you issue or sell and redeem",
    icon: "bi-gift",
    active: false,
  },
  {
    title: "Fast table side payments",
    description:
      "Reduce trips to the table with tableside payment mobile app",
    icon: "bi-phone",
    active: true,
  },
];

export function POSFeatureHighlights() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl p-4 sm:p-5 border transition-shadow ${
                item.active
                  ? "bg-[#FF6600] border-[#E65C00] shadow-lg shadow-orange-500/20"
                  : "bg-white border-gray-200 hover:border-[#FF6600]/30 hover:shadow-md"
              }`}
            >
              <div
                className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl flex-shrink-0 ${
                  item.active ? "bg-white/20" : "bg-gray-100"
                }`}
                aria-hidden="true"
              >
                <i
                  className={`bi ${item.icon} text-lg sm:text-xl ${
                    item.active ? "text-white" : "text-gray-700"
                  }`}
                />
              </div>
              <div className="min-w-0">
                <h3
                  className={`font-bold text-sm sm:text-base leading-snug ${
                    item.active ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-snug mt-0.5 ${
                    item.active ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
