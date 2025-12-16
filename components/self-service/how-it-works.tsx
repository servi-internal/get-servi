import { QrCode, Monitor } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FF6600 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-[#FF6600] font-bold tracking-wider uppercase text-xs mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
            From Scan to Kitchen in Seconds
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-start">
          <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-1 bg-gray-100 dark:bg-gray-800 z-0 rounded-full">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-[#FF6600]/50 to-transparent animate-pulse"></div>
          </div>
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center group z-10">
            <div className="relative mb-8 transition-transform duration-300 group-hover:-translate-y-2">
              <div className="w-28 h-48 bg-gray-900 rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden relative mx-auto">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-xl border-2 border-[#FF6600]/50 flex items-center justify-center animate-pulse">
                    <QrCode className="w-10 h-10 text-[#FF6600]" />
                  </div>
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-700 border-4 border-gray-50 dark:border-gray-800 flex items-center justify-center shadow-lg">
                <span className="text-[#FF6600] font-bold text-lg">1</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Scan QR Code
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-[250px]">
              No app download required. Customers use their native camera.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center group z-10">
            <div className="relative mb-8 transition-transform duration-300 group-hover:-translate-y-2">
              <div className="w-28 h-48 bg-white dark:bg-gray-800 rounded-[2rem] border-4 border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden relative mx-auto flex flex-col">
                <div className="h-16 bg-orange-50 dark:bg-gray-700 w-full mb-2 bg-gradient-to-br from-orange-100 to-orange-200 opacity-80"></div>
                <div className="px-2 space-y-2 flex-grow">
                  <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="h-2 w-1/2 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-4 w-4 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                    <div className="h-2 w-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </div>
                </div>
                <div className="p-2 mt-auto">
                  <div className="w-full h-6 bg-[#FF6600] rounded-lg flex items-center justify-center text-[8px] text-white font-bold">
                    PAY NOW
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF6600] border-4 border-white dark:border-gray-800 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">2</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Order &amp; Pay
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-[250px]">
              Guests browse a visual menu, customize orders, and pay instantly.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center group z-10">
            <div className="relative mb-8 transition-transform duration-300 group-hover:-translate-y-2">
              <div className="w-40 h-28 mt-10 bg-gray-800 rounded-xl border-b-8 border-gray-900 shadow-2xl overflow-hidden relative mx-auto p-1.5 grid grid-cols-2 gap-1">
                <div className="bg-orange-100 rounded p-1 flex flex-col gap-0.5">
                  <div className="flex justify-between items-center mb-0.5 border-b border-orange-200 pb-0.5">
                    <div className="w-4 h-1 bg-orange-800 rounded"></div>
                    <div className="w-2 h-1 bg-orange-300 rounded"></div>
                  </div>
                  <div className="w-full h-0.5 bg-orange-300 rounded"></div>
                  <div className="w-3/4 h-0.5 bg-orange-300 rounded"></div>
                </div>
                <div className="bg-green-100 rounded p-1 flex flex-col gap-0.5">
                  <div className="flex justify-between items-center mb-0.5 border-b border-green-200 pb-0.5">
                    <div className="w-4 h-1 bg-green-800 rounded"></div>
                    <div className="w-2 h-1 bg-green-300 rounded"></div>
                  </div>
                  <div className="w-full h-0.5 bg-green-300 rounded"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-700 border-4 border-gray-50 dark:border-gray-800 flex items-center justify-center shadow-lg">
                <span className="text-[#FF6600] font-bold text-lg">3</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Sent to Kitchen
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-[250px]">
              Orders fire directly to KDS or printers. No manual entry needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

