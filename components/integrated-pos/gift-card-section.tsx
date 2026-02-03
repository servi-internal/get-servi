"use client";

import { CardContainer, CardBody } from "@/components/ui/3d-card";

const BULLETS = [
  "Issue custom printed gift cards in any denomination",
  "Redeem gift cards as a payment type",
  "Split payments with giftcards",
  "Add money to balances of giftcards",
  "One time or reusable physical cards",
];

export function GiftCardSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 lg:items-center">
          <div className="min-w-0">
            <span className="text-[#FF6600] font-semibold tracking-widest uppercase text-xs">
              Gift cards
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 sm:mb-3">
              Issue and redeem <span className="text-[#FF6600]">gift cards</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-xl">
              Delight guests with gift cards you issue or sell. Redeem as a payment type, split payments, and top up balances.
            </p>
            <div className="rounded-2xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-4 sm:p-5">
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
          <div className="flex justify-center lg:justify-end min-w-0">
            <CardContainer
              containerClassName="py-0 w-full flex justify-center lg:justify-end"
              className="w-full flex justify-center lg:justify-end"
            >
              <CardBody className="h-[220px] w-[352px] sm:h-[260px] sm:w-[416px] lg:h-[300px] lg:w-[480px] rounded-xl sm:rounded-2xl">
                <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-[#FF6600] to-[#E65C00] shadow-2xl shadow-[#FF6600]/25 border border-white/10">
                  <div className="absolute top-5 left-5 sm:top-6 sm:left-6 font-bold text-white/80 text-sm sm:text-base">
                    GIFT CARD
                  </div>
                  <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 font-bold text-white text-lg sm:text-xl tracking-widest">
                    &bull;&bull;&bull;&bull; 4829
                  </div>
                  <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 font-black text-white text-xl sm:text-2xl italic">
                    $50
                  </div>
                  <div className="absolute -right-10 -top-10 w-40 h-40 sm:w-48 sm:h-48 bg-white/20 rounded-full blur-xl" />
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
