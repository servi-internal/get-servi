import { Users, ShieldCheck, Clock, CreditCard } from "lucide-react";

export function WhySwitch() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Why Restaurants Switch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Boost efficiency and revenue with features specifically designed to handle the rush.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#FF6600]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6 group-hover:bg-[#FF6600] transition-colors duration-300">
              <Users className="w-8 h-8 text-[#FF6600] dark:text-orange-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Short Staff Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Handle peak hours seamlessly even with fewer servers on the floor. Let technology handle the taking, you handle the making.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#FF6600]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6 group-hover:bg-[#FF6600] transition-colors duration-300">
              <ShieldCheck className="w-8 h-8 text-[#FF6600] dark:text-orange-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              No Dine &amp; Dash
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Secure upfront payments eliminate walked tabs completely. Every order sent to the kitchen is already paid for.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#FF6600]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6 group-hover:bg-[#FF6600] transition-colors duration-300">
              <Clock className="w-8 h-8 text-[#FF6600] dark:text-orange-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Reduce Long Lines
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Turn tables faster by removing the wait for the bill. Customers leave when they are ready, freeing up space for new diners.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#FF6600]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-[#FF6600]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF6600] transition-colors duration-300">
              <CreditCard className="w-8 h-8 text-[#FF6600] dark:text-[#E65C00] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Speed Up Payment
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Instant digital transactions for seamless checkout. Support for Apple Pay, Google Pay, and all major cards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

