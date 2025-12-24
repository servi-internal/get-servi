export function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-br from-white to-[#FFF3EE] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 sm:px-6 text-center">
        <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#333333]">
        Ready to <span className="text-[#FF6600]">Grow</span> your restaurant?
        </h2>
        <p className="mb-8 sm:mb-10 text-base sm:text-lg text-gray-600 max-w-2xl">
          Join restaurants using our zero-commission POS and online ordering system to boost profits.
        </p>
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full sm:w-auto sm:flex-row">
          <a 
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1FdI1lQhrxPqvmw6TinzfpcAShPOyjBFUzOMVH6euzWdzpx_bxTURwZElipfxthReLVfeylFVr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 sm:h-14 w-full sm:w-auto sm:min-w-[200px] cursor-pointer items-center justify-center rounded-lg bg-[#FF6600] px-6 sm:px-8 text-base sm:text-lg font-bold text-white shadow-xl shadow-[#FF6600]/25 transition-transform hover:bg-[#FF6600]/90 hover:scale-105 active:scale-95"
          >
            Book a Meeting
          </a>
          <a 
            href="/pricing"
            className="flex h-12 sm:h-14 w-full sm:w-auto sm:min-w-[200px] cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-6 sm:px-8 text-base sm:text-lg font-bold text-[#333333] transition-all hover:bg-gray-50 hover:border-[#FF6600]"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

