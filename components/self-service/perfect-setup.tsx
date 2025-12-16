import { UtensilsCrossed, Wine, Sandwich } from "lucide-react";
import Image from "next/image";

export function PerfectSetup() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-12 text-center">
          Perfect for Any Setup
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYJMqtlV3O27j796XynQME-Cqll9FXdja7tT08JS9p1xYB4fooFGd3Zv9_GZkFoQurnKF4-lm_s2GpAS73AeZsdDX2K0DK6E-pydE_uMIJAKcbgG756NIYJUiO_o9Pt-U04GAO-z9x5quHkAfc4vcj0hK4ZjBk394IG2J95LZXa76iPP82u-XczCt_k1z2ea0wZcxeEBi5DLhc8PsQEsX16qbcFU74Vid5rd-NA_UDUfe8BFLNsAGyWFIrgL1SzVYgsEzdD0elLU"
                alt="Table service restaurant interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <UtensilsCrossed className="w-5 h-5 text-[#FF6600]" />
                Table Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                Guests sit down, scan, and order without waiting for a server to bring a menu.
              </p>
              <div className="text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                Key Benefit: Faster Table Turns
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK9bKuNkF_jSCvewC_PAfVZptZF64uQXXwRC6ymiQDDiFcs8mrU4nT2YMPxtFjbV4gwJDPS6JjRsSnMemmquFigolC4EA0pZsGw7Y1cwU3dlaF3jIW7IVU9WyFI9Kqcm483BTmkOLIYfFLckauSqmdLDAOPBs_ANfK4MwNYwc5ohfEcIMYXMGjW8H-EHD26p2kzNEehlAG6Ncjw1xPMm8p_iUi4kluD8V7vnnm6rDXILlDw5Crw7XMafkt8RuDY4k1421HtVdcmBY"
                alt="Bar counter with stools"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <Wine className="w-5 h-5 text-[#FF6600]" />
                Bar &amp; Counter
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                Eliminate the crush at the bar. Patrons order rounds from their stools.
              </p>
              <div className="text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                Key Benefit: Reduced Crowding
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdtJ8zcVe6gKROVPy0Ei6vn8s7ITmiBHhClfXkk6j4NVs4D-xNwaJi7yHFNsBx7CHe9ez8xW-kTc-EsFMNzpA8B00ChJEu96Yb7KHAlpzaLVI4beomm1j_xAPJRM6o7phiL2LSu2OCqSXkLqZbSTFYBoJLeRo-RXtzAjqLrTQaFKpbJHace_x0aREhZY17ieS4PUFOWOZ_8jOT0Xf5E3TQyCcNHKROskhZi9wM2_wSmqizLSfOEiDJ2kd5W7w2sDlBu5L9IoK_gaY"
                alt="Fast casual burger joint"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <Sandwich className="w-5 h-5 text-[#FF6600]" />
                Quick Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                Perfect for food courts and fast casual. Order ahead or at the table to skip the line.
              </p>
              <div className="text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                Key Benefit: Line Busting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

