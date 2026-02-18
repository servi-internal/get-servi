import Image from "next/image";

const BULLETS = [
  "Turn tables faster",
  "Auto process split payments",
  "Tip entry screen with custom tip",
  "Digital signature form",
];

export function TableSidePayments() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 lg:items-center">
          <div className="relative min-w-0 order-1 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[70vw] sm:max-w-sm lg:max-w-xl aspect-[4/3] max-h-[180px] sm:max-h-[220px] lg:max-h-[280px] rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 shadow-lg">
              <Image
                src="https://res.cloudinary.com/dxax8yrgb/image/upload/v1771410660/payment-table-side_nvkder.jpg"
                alt="Person holding mobile payment terminal at table"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 384px, 448px"
              />
            </div>
          </div>
          <div className="min-w-0 order-2 lg:order-2">
            <span className="text-[#FF6600] font-semibold tracking-widest uppercase text-xs">
              Tableside payments
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 sm:mb-3">
              Fast <span className="text-[#FF6600]">table side payments</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-xl">
              Save back and forth trips to process payment and tip by using our mobile payment terminal for an efficient payment processing experience.
            </p>
            <div className="rounded-2xl bg-white/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-4 sm:p-5">
              <ul className="space-y-2 sm:space-y-2.5">
                {BULLETS.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
