"use client";

import Image from "next/image";
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
              Delight guests with custom printed physical gift cards that promote your brand and restaurant to their friends and family.
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
              <CardBody className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto aspect-[16/10]">
                <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                  <Image
                    src="https://res.cloudinary.com/dxax8yrgb/image/upload/v1771408516/gift-card_wkuuln.png"
                    alt="Restaurant gift card"
                    fill
                    className="object-cover scale-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 448px, 512px"
                  />
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
