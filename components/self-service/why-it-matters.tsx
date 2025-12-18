import { Heart, TrendingUp, CheckCircle } from "lucide-react";

export function WhyItMatters() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FFF3EE] to-white dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Why It Matters
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            A win-win solution for restaurants and customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Customers Love It
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              No hidden costs, no app downloads, and complete control over their dining experience.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 text-center">
            <div className="w-12 h-12 rounded-full bg-[#FF6600]/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-[#FF6600]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Restaurants Save Money
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Reduce labor costs, eliminate dine-and-dash, and turn tables faster with the POS Bundle.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Everyone Wins
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Better service, higher revenue, and happier guests—all with one simple system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

