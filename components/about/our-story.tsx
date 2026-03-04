import {
  Coffee,
  Smartphone,
  Users,
  Globe,
  ShoppingBag,
  Monitor,
  Heart,
} from "lucide-react";

const TIMELINE = [
  {
    year: "2017",
    icon: Coffee,
    side: "right",
    highlight: "The spark",
    title: "A Pancake House in Amsterdam",
    text: "It all started with a visit to our favorite pancake house. Our waiter used a mobile device to take our order — fast and efficient for him, but it didn't help us get his attention later. We couldn't order more coffee. The tables around us had the same problem. One table clearly wanted to order, another wanted to pay. That's when we realized: we need to connect our phones to the restaurant's system.",
  },
  {
    year: "2018",
    icon: Smartphone,
    side: "left",
    highlight: "The first app",
    title: "Three Buttons",
    text: "We built a simple app with three buttons: call the server, I need refills, and I need the check. We tested it in several restaurants in Amsterdam. Customers loved it. Businesses did not. The problem we were solving had only one solution in their eyes: hire more staff. But there's far more service demand than restaurants can afford to staff up for.",
  },
  {
    year: "2019",
    icon: Users,
    side: "right",
    highlight: "The pivot",
    title: "Listening to Restaurants",
    text: "What restaurants told us overwhelmingly was that they wanted something to take orders. They wanted to cut back on staff costs while preserving the ability to provide great service. They wanted guests to place orders and pay with their phones. So that's what we set out to build.",
  },
  {
    year: "2020",
    icon: Globe,
    side: "left",
    highlight: "Going online",
    title: "COVID Changes Everything",
    text: "Servi was growing with Dutch payment provider CCV NL, gaining traction in the Netherlands and Florida. Then COVID hit. Every restaurant we were in shut down. This brought us to pivot to online ordering — turning a global crisis into an opportunity to serve restaurants in a new way.",
  },
  {
    year: "2022",
    icon: ShoppingBag,
    side: "right",
    highlight: "A new problem",
    title: "The Delivery App Trap",
    text: "After COVID, we moved operations to America. We discovered that restaurants had become dependent on delivery apps — with no access to customer data, no way to build loyalty, and spinning their wheels paying high commissions. We created an affordable, results-oriented marketing program that most mom-and-pop restaurants can actually afford.",
  },
  {
    year: "2024",
    icon: Monitor,
    side: "left",
    highlight: "Full platform",
    title: "Rethinking the POS",
    text: "Restaurant owners came to us unhappy with their POS systems. We spent time understanding their pain points and built a better, more integrated POS solution — easier to use, more reliable, and more robust than what the market offers today.",
  },
  {
    year: "Today",
    icon: Heart,
    side: "right",
    highlight: "Our mission",
    title: "Why We're Called Ser.vi",
    text: "Ser.vi is short for service. It's about connecting customers to businesses in a meaningful way. Taking the order is important, but we do more — table-side service calls, email and SMS communication, online ordering, and a full POS. We don't just take orders. Our mission is to elevate the service experience and scale it through growth.",
  },
];

export function OurStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-[#FF6600] font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-3">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2937] leading-tight">
            The <span className="text-[#FF6600]">Ser.vi</span> Story
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            From a pancake house in Amsterdam to a full restaurant platform —
            here&apos;s how we got here.
          </p>
        </div>

        {/* ── Desktop: alternating layout ── */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Center spine */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-[#FF6600] via-[#FF6600]/30 to-transparent" />

            <div className="space-y-0">
              {TIMELINE.map((item, index) => {
                const Icon = item.icon;
                const isRight = item.side === "right";

                return (
                  <div
                    key={index}
                    className={`relative grid grid-cols-2 gap-0 items-center min-h-[180px] ${
                      index !== TIMELINE.length - 1 ? "mb-6" : ""
                    }`}
                  >
                    {/* Left cell */}
                    <div className={`pr-14 ${isRight ? "flex justify-end" : "flex justify-start"}`}>
                      {!isRight && (
                        <TimelineCard item={item} Icon={Icon} />
                      )}
                      {isRight && (
                        <YearLabel year={item.year} align="right" />
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-[#FF6600]/40 flex items-center justify-center shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[#FF6600]/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#FF6600]" />
                        </div>
                      </div>
                    </div>

                    {/* Right cell */}
                    <div className={`pl-14 ${isRight ? "flex justify-start" : "flex justify-end"}`}>
                      {isRight && (
                        <TimelineCard item={item} Icon={Icon} />
                      )}
                      {!isRight && (
                        <YearLabel year={item.year} align="left" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Mobile / Tablet: single-column ── */}
        <div className="lg:hidden">
          <div className="relative pl-10 sm:pl-14">
            {/* Left spine */}
            <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6600] via-[#FF6600]/30 to-transparent" />

            <div className="space-y-6 sm:space-y-8">
              {TIMELINE.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[34px] sm:-left-[42px] top-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#FF6600]/40 flex items-center justify-center shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center">
                        <Icon className="w-3 h-3 text-[#FF6600]" />
                      </div>
                    </div>

                    <TimelineCard item={item} Icon={Icon} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Closing quote */}
        <div className="mt-20 sm:mt-24 max-w-2xl mx-auto text-center">
          <div className="w-8 h-0.5 bg-[#FF6600] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed italic">
            &ldquo;We don&apos;t just take orders. Our mission is to elevate the
            service experience and scale it through growth.&rdquo;
          </p>
          <p className="mt-4 text-xs sm:text-sm font-bold text-[#FF6600] tracking-wide uppercase">
            — The Ser.vi Team
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ── */

function TimelineCard({
  item,
  Icon,
}: {
  item: (typeof TIMELINE)[number];
  Icon: React.ElementType;
}) {
  return (
    <div className="group w-full max-w-md rounded-2xl border border-gray-100 bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:border-[#FF6600]/20 hover:-translate-y-0.5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] sm:text-xs font-bold text-[#FF6600] bg-[#FF6600]/10 px-2.5 py-1 rounded-full">
          {item.year}
        </span>
        <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">
          {item.highlight}
        </span>
      </div>
      <h3 className="text-sm sm:text-base lg:text-[17px] font-bold text-[#1F2937] mb-2 group-hover:text-[#FF6600] transition-colors duration-200">
        {item.title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
        {item.text}
      </p>
    </div>
  );
}

function YearLabel({
  year,
  align,
}: {
  year: string;
  align: "left" | "right";
}) {
  return (
    <div className={`flex items-center ${align === "right" ? "justify-end" : "justify-start"}`}>
      <span
        className={`text-[64px] xl:text-[80px] font-black leading-none select-none
          bg-gradient-to-b from-[#FF6600]/20 to-[#FF6600]/5 bg-clip-text text-transparent
          ${align === "right" ? "text-right" : "text-left"}`}
      >
        {year}
      </span>
    </div>
  );
}
