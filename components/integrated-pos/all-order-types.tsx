const ORDER_TYPES = [
  {
    title: "Counter",
    icon: "bi-grid-3x3-gap",
    bullets: [
      "Fast one order one payment",
      "Dedicated station mode",
      "Put guest names on orders",
    ],
  },
  {
    title: "Table Tabs",
    icon: "bi-people",
    bullets: [
      "Open table tabs",
      "Transfer tables",
      "Split payments",
    ],
  },
  {
    title: "Bar Tabs",
    icon: "bi-cup-straw",
    bullets: [
      "Supports name only and card retained tabs",
      "Support multiple bars per location",
      "Transfer tab to table when guest is seated",
    ],
  },
];

const FEATURE_ICONS = [
  { title: "Secure Staff Pin login", desc: "Track orders and cash drawer opens for each staff", icon: "bi-shield-lock", color: "blue" },
  { title: "POS Staff Manager", desc: "Quickly add and edit staff pins as a manager", icon: "bi-person-gear", color: "purple" },
  { title: "Multiple Service modes", desc: "Configure each device for specific service modes", icon: "bi-sliders", color: "green" },
  { title: "Comp & Voids items on tabs", desc: "Track comp and voids track by servers", icon: "bi-file-earmark-check", color: "red" },
  { title: "Split Payments", desc: "Take partial cash, credit or gift card payments up to 8 ways", icon: "bi-diagram-3", color: "orange" },
  { title: "Item options", desc: "Support variant (size) selection and required or optional modifiers", icon: "bi-list-check", color: "blue" },
  { title: "Limited Inventory Items", desc: "Set limited QOH on items that auto sell out as you take orders", icon: "bi-box-seam", color: "gray" },
  { title: "Gift Cards Issue and Redeem", desc: "Delight guests with gift cards that you issue or sell and redeem", icon: "bi-gift", color: "green" },
  { title: "Fast table side payments", desc: "Reduce trips to the table with tableside payment mobile app", icon: "bi-phone", color: "orange-featured" },
];

const colorClasses: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  orange: "bg-orange-100 text-[#FF6600]",
  gray: "bg-gray-200 text-gray-700",
  "orange-featured": "bg-[#FF6600] text-white",
};

export function AllOrderTypes() {
  return (
    <section id="all-order-types" className="py-10 sm:py-14 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[#FF6600] font-semibold tracking-widest uppercase text-xs">
            POS Built for Busy Restaurants
          </span>
          <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 mb-2 sm:mb-3">
            All Order Types In One <span className="text-[#FF6600]">System</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            One fast, clean interface your team can learn in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {ORDER_TYPES.map((type, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-xl bg-gray-50 border border-gray-100 min-w-0"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3">
                <i className={`bi ${type.icon} text-xl sm:text-2xl text-[#FF6600] flex-shrink-0`} />
                <h3 className="font-bold text-base sm:text-lg text-gray-900">{type.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {type.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {FEATURE_ICONS.map((item, i) => {
            const isFeatured = item.color === "orange-featured";
            return (
              <div
                key={i}
                className={`group p-3 sm:p-4 rounded-xl border transition-all min-w-0 ${
                  isFeatured
                    ? "bg-[#FF6600] text-white border-[#E65C00]"
                    : "bg-gradient-to-br from-gray-50 to-white border-gray-100 hover:border-[#FF6600]/30"
                }`}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isFeatured ? "bg-white/20" : colorClasses[item.color]
                    }`}
                  >
                    <i className={`bi ${item.icon} text-base sm:text-lg ${isFeatured ? "text-white" : ""}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`font-bold text-xs sm:text-sm mb-0.5 ${isFeatured ? "text-white" : "text-gray-900"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-[10px] sm:text-xs leading-snug ${isFeatured ? "text-white/90" : "text-gray-600"}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
