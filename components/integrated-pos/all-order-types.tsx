import { 
  LayoutGrid, 
  Users, 
  Gift, 
  CreditCard, 
  Eye, 
  Printer,
  Zap,
  Search,
  RotateCcw,
  BarChart3,
  Smartphone,
  Lock,
  UserCog,
  Settings,
  FileCheck,
  SplitSquareVertical,
  ListChecks,
  Package
} from "lucide-react";

const ORDER_TYPES = [
  {
    title: "Counter",
    icon: LayoutGrid,
    bullets: [
      "Fast one order one payment",
      "Dedicated station mode",
      "Available as button in tab mode",
    ],
  },
  {
    title: "Table Tabs",
    icon: Users,
    bullets: [
      "Open Table tabs",
      "Transfer tables",
      "Split payments",
    ],
  },
  {
    title: "Bar Tabs",
    icon: "bi-cup-straw",
    bullets: [
      "Open manual tabs with guest names",
      "Open card tabs with guest names",
      "Quick Access to order history",
    ],
  },
];

const FEATURE_ICONS = [
  { title: "Open Voids", desc: "See all items and transactions with open voids with quick search app", icon: Search, color: "blue" },
  { title: "Refund Orders", desc: "Refund sales and update inventory without losing out", icon: RotateCcw, color: "purple" },
  { title: "Comp Items", desc: "Manage comps and voids with custom comp/void reason", icon: Gift, color: "green" },
  { title: "TODAYS TM", desc: "Track orders, items, sales, and labor with real-time reporting", icon: BarChart3, color: "red" },
  { title: "Take Payments", desc: "Take payments quickly at the counter or tableside", icon: CreditCard, color: "orange" },
  { title: "View Orders", desc: "See orders and their status including dine-in and online orders", icon: Eye, color: "blue" },
  { title: "Print Receipts", desc: "Print kitchen tickets and customer receipts from any device", icon: Printer, color: "gray" },
  { title: "Lightning Fast", desc: "Fast customer service and quick checkout", icon: Zap, color: "yellow" },
  { title: "Table Side Payments", desc: "Reduce trips to the table with tableside payment mobile app", icon: Smartphone, color: "orange-featured" },
];

const FEATURE_BULLETS = [
  { title: "Secure Staff Pin login", sub: "Track orders and cash drawer opens for each staff", icon: Lock },
  { title: "POS Staff Manager", sub: "Quickly add and edit staff pins as a manager", icon: UserCog },
  { title: "Multiple Service modes", sub: "Configure each device for specific service modes", icon: Settings },
  { title: "Comp & Voids items on tabs", sub: "Track comp and voids track by servers", icon: FileCheck },
  { title: "Split Payments", sub: "Take partial cash, credit or gift card payments up to 8 ways", icon: SplitSquareVertical },
  { title: "Item options", sub: "Support variant (size) selection and required or optional modifiers", icon: ListChecks },
  { title: "Limited Inventory Items", sub: "Set limited QOH on items that auto sell out as you take orders", icon: Package },
  { title: "Gift Cards Issue and Redeem", sub: "Delight guests with gift cards that you issue or sell and redeem", icon: Gift },
];

const colorClasses: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-[#FF6600]",
  yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
  gray: "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300",
  "orange-featured": "bg-[#FF6600] text-white",
};

export function AllOrderTypes() {
  return (
    <section id="all-order-types" className="py-10 sm:py-14 lg:py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[#FF6600] font-semibold tracking-widest uppercase text-xs">
            POS Built for Busy Restaurants
          </span>
          <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 sm:mb-3">
            All Order Types In One <span className="text-[#FF6600]">System</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            One fast, clean interface your team can learn in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {ORDER_TYPES.map((type, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 min-w-0"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3">
                {typeof type.icon === "string" ? (
                  <i className={`${type.icon} text-xl sm:text-2xl text-[#FF6600] flex-shrink-0`} />
                ) : (
                  <type.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6600] flex-shrink-0" />
                )}
                <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">{type.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {type.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
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
            const Icon = item.icon;
            const isFeatured = item.color === "orange-featured";
            return (
              <div
                key={i}
                className={`group p-3 sm:p-4 rounded-xl border transition-all min-w-0 ${
                  isFeatured
                    ? "bg-[#FF6600] to-[#E65C00] text-white border-[#E65C00]"
                    : "bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 border-gray-100 dark:border-gray-800 hover:border-[#FF6600]/30"
                }`}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isFeatured ? "bg-white/20" : colorClasses[item.color]
                    }`}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isFeatured ? "text-white" : ""}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`font-bold text-xs sm:text-sm mb-0.5 ${isFeatured ? "text-white" : "text-gray-900 dark:text-white"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-[10px] sm:text-xs leading-snug ${isFeatured ? "text-white/90" : "text-gray-600 dark:text-gray-400"}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-5">
            {FEATURE_BULLETS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 min-w-0 group"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF6600]/10 text-[#FF6600] group-hover:bg-[#FF6600]/20 transition-colors">
                    <Icon className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
