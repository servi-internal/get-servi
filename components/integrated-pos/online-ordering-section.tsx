import { BarChart3, Package, CreditCard, UtensilsCrossed } from "lucide-react";

const BULLETS = [
  { icon: UtensilsCrossed, text: "Single menu to manage", color: "bg-orange-100 text-[#FF6600]" },
  { icon: BarChart3, text: "Sales reporting all in one place", color: "bg-blue-100 text-blue-600" },
  { icon: Package, text: "Inventory automatically syncs", color: "bg-green-100 text-green-600" },
  { icon: CreditCard, text: "Single payment processing account", color: "bg-purple-100 text-purple-600" },
];

export function OnlineOrderingSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-center">

          {/* Left — copy */}
          <div className="min-w-0">
            <span className="text-[#FF6600] font-semibold tracking-widest uppercase text-xs">
              Integrated online ordering
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 sm:mb-3">
              Take orders online with your{" "}
              <span className="text-[#FF6600]">Integrated POS</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-xl">
              Easily take orders online when you use the Integrated POS. We have a superior online ordering system experience your guests will love.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {BULLETS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-3 sm:p-4 hover:border-[#FF6600]/30 hover:shadow-md transition-all"
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 leading-snug mt-1">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — visual mockup */}
          <div className="flex justify-center lg:justify-end min-w-0">
            <div className="w-full max-w-sm sm:max-w-md rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-2 flex-1 bg-white dark:bg-gray-700 rounded-md px-2 py-0.5 text-[10px] text-gray-400 font-mono truncate">
                  order.yourrestaurant.com
                </div>
              </div>
              {/* Mock storefront */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center flex-shrink-0">
                    <UtensilsCrossed className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 dark:text-white">Demo Restaurant</div>
                    <div className="text-[10px] text-gray-500">Online Order</div>
                  </div>
                  <div className="ml-auto text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Open</div>
                </div>
                {/* Menu items */}
                {[
                  {
                    name: "Classic Burger",
                    price: "$14.99",
                    tag: "Popular",
                    icon: (
                      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
                        <rect width="32" height="32" rx="6" fill="#FFF7ED" />
                        <path d="M7 17h18v2c0 1.1-.9 2-2 2H9a2 2 0 01-2-2v-2z" fill="#F59E0B" />
                        <path d="M7 15h18a1 1 0 010 2H7a1 1 0 010-2z" fill="#22C55E" />
                        <path d="M7 13h18v2H7v-2z" fill="#EF4444" />
                        <path d="M9 9h14c1.1 0 2 .9 2 2v2H7v-2c0-1.1.9-2 2-2z" fill="#F59E0B" />
                        <circle cx="10" cy="10.5" r="0.5" fill="#FDE68A" />
                        <circle cx="14" cy="10" r="0.5" fill="#FDE68A" />
                        <circle cx="18" cy="10.5" r="0.5" fill="#FDE68A" />
                        <circle cx="22" cy="10" r="0.5" fill="#FDE68A" />
                      </svg>
                    ),
                  },
                  {
                    name: "Caesar Salad",
                    price: "$12.99",
                    tag: null,
                    icon: (
                      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
                        <rect width="32" height="32" rx="6" fill="#F0FDF4" />
                        <ellipse cx="16" cy="18" rx="9" ry="5" fill="#E5E7EB" />
                        <path d="M12 14c1-3 3-5 4-5s1 2 0 5" fill="#22C55E" />
                        <path d="M16 14c1-4 3-6 4-5s0 3-1 5" fill="#16A34A" />
                        <path d="M14 15c-1-3-2-5-1-5s2 1 2 4" fill="#4ADE80" />
                        <circle cx="13" cy="17" r="1" fill="#FDE68A" />
                        <circle cx="18" cy="16" r="1" fill="#FDE68A" />
                        <circle cx="16" cy="19" r="0.8" fill="#FDE68A" />
                      </svg>
                    ),
                  },
                  {
                    name: "Margherita Pizza",
                    price: "$17.99",
                    tag: "New",
                    icon: (
                      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
                        <rect width="32" height="32" rx="6" fill="#FEF9F0" />
                        <path d="M16 6L5 24h22L16 6z" fill="#F59E0B" />
                        <path d="M16 8L7 23h18L16 8z" fill="#EF4444" opacity="0.8" />
                        <circle cx="13" cy="18" r="2" fill="#FDE68A" />
                        <circle cx="18" cy="16" r="2" fill="#FDE68A" />
                        <circle cx="16" cy="21" r="1.5" fill="#FDE68A" />
                        <circle cx="14" cy="15" r="0.8" fill="#22C55E" />
                        <circle cx="19" cy="20" r="0.8" fill="#22C55E" />
                        <circle cx="16" cy="18" r="0.6" fill="#22C55E" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-xs font-semibold text-gray-900 dark:text-white">{item.name}</div>
                        {item.tag && (
                          <span className="text-[9px] font-bold text-[#FF6600] bg-[#FF6600]/10 px-1.5 py-0.5 rounded-full">{item.tag}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-900 dark:text-white">{item.price}</span>
                      <button className="w-5 h-5 rounded-full bg-[#FF6600] text-white text-xs flex items-center justify-center font-bold">+</button>
                    </div>
                  </div>
                ))}
                {/* CTA */}
                <div className="mt-3 sm:mt-4 rounded-xl bg-[#FF6600] text-white text-xs font-bold text-center py-2.5">
                  View Cart · $45.97
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
