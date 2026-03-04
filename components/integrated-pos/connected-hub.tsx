export function ConnectedHub() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            The <span className="text-[#FF6600]">Connected</span> Hub
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600">
            Ser.vi sits at the center of your operation
          </p>
        </div>

        <div className="hidden md:block">
          <div className="relative flex justify-center items-center h-[360px] sm:h-[400px] lg:h-[440px]">
            <div className="relative z-20 w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-white shadow-xl flex flex-col items-center justify-center border-2 sm:border-4 border-[#FF6600] p-3 sm:p-4">
              <img src="/favicon.ico" alt="Ser.vi" className="w-9 h-9 sm:w-10 sm:h-10 mb-1 sm:mb-2 flex-shrink-0" />
              <span className="font-bold text-sm sm:text-base text-gray-900">
                Ser.vi POS
              </span>
            </div>
            <svg
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 800 500"
            >
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="400" y1="250" y2="80"></line>
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="650" y1="250" y2="150"></line>
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="650" y1="250" y2="350"></line>
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="150" y1="250" y2="350"></line>
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="150" y1="250" y2="150"></line>
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="400" y1="250" y2="420"></line>
            </svg>
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 flex items-center gap-2 w-48 sm:w-52">
              <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="bi bi-phone text-base sm:text-lg text-orange-600" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 truncate">Mobile Payments</span>
            </div>
            <div className="absolute top-20 right-[18%] z-20 bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 flex items-center gap-2 w-48 sm:w-52">
              <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="bi bi-qr-code-scan text-base sm:text-lg text-gray-600" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 truncate">Self-Service QR</span>
            </div>
            <div className="absolute bottom-20 right-[18%] z-20 bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 flex items-center gap-2 w-48 sm:w-52">
              <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="bi bi-credit-card text-base sm:text-lg text-green-600" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 truncate">Payment Processing</span>
            </div>
            <div className="absolute bottom-20 left-[18%] z-20 bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 flex items-center gap-2 w-40 sm:w-44">
              <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="bi bi-cart3 text-base sm:text-lg text-blue-600" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 truncate">Online Ordering</span>
            </div>
            <div className="absolute top-20 left-[18%] z-20 bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 flex items-center gap-2 w-40 sm:w-44">
              <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="bi bi-arrow-repeat text-base sm:text-lg text-red-600" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 truncate">Inventory Sync</span>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 flex items-center gap-2 w-40 sm:w-44">
              <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="bi bi-gift text-base sm:text-lg text-green-600" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 truncate">Gift Cards</span>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white shadow-xl flex flex-col items-center justify-center border-2 sm:border-4 border-[#FF6600] p-3">
              <img src="/favicon.ico" alt="Ser.vi" className="w-9 h-9 sm:w-10 sm:h-10 mb-1 flex-shrink-0" />
              <span className="font-bold text-sm sm:text-base text-gray-900">Ser.vi POS</span>
            </div>
            <div className="grid grid-cols-1 gap-3 w-full max-w-sm">
              <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 flex items-center gap-2">
                <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-phone text-base sm:text-lg text-orange-600" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900">Mobile Payments</span>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 flex items-center gap-2">
                <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-qr-code-scan text-base sm:text-lg text-gray-600" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900">Self-Service QR</span>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 flex items-center gap-2">
                <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-credit-card text-base sm:text-lg text-green-600" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900">Payment Processing</span>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 flex items-center gap-2">
                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-cart3 text-base sm:text-lg text-blue-600" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900">Online Ordering</span>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 flex items-center gap-2">
                <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-arrow-repeat text-base sm:text-lg text-red-600" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900">Inventory Sync</span>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 flex items-center gap-2">
                <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-gift text-base sm:text-lg text-green-600" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900">Gift Cards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
