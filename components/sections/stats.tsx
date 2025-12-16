export function Stats() {
  return (
    <section className="w-full bg-[#333333] py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 text-center md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
          <div className="flex flex-col gap-2 p-4">
            <span className="text-5xl font-black tracking-tight text-white sm:text-6xl text-[#FF6600]">
              62%
            </span>
            <p className="text-base font-medium text-gray-300">
              of consumers discover new
              <br />
              restaurants on Google
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <span className="text-5xl font-black tracking-tight text-white sm:text-6xl text-[#FF6600]">
              $450M+
            </span>
            <p className="text-base font-medium text-gray-300">
              processed in commission-free
              <br />
              orders last year
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <span className="text-5xl font-black tracking-tight text-white sm:text-6xl text-[#FF6600]">
              2.5x
            </span>
            <p className="text-base font-medium text-gray-300">
              faster table turnover with
              <br />
              QR code payments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

