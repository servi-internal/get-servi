import { Check, Star } from "lucide-react";

export function SocialMediaTable() {
  const plans = [
    {
      name: "Pro",
      popular: true,
      bestFor: "Add videos to engage and extend your reach",
      price: "$199",
      features: [
        "10 Posts",
        "10 Stories",
        "10 Videos",
        "Comment responses",
        "2 Networks"
      ]
    },
    {
      name: "Premium",
      popular: false,
      bestFor: "Increase your content, reach and boost with ads",
      price: "$399",
      features: [
        "15 posts a month",
        "15 Stories a month",
        "15 Videos",
        "Comment responses",
        "3 Networks",
        "1 Network Ad Boost",
        "Add'l boost <strong>$99</strong>"
      ]
    },
    {
      name: "Max",
      popular: false,
      bestFor: "Best value and honestly the most we could imagine",
      price: "$799",
      features: [
        "20 posts a month",
        "20 Stories a month",
        "20 Videos",
        "Comment responses",
        "4 Networks",
        "4 Network Ad Boosts"
      ]
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gradient-to-b from-white to-[#f8fafc] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#263238] mb-2 sm:mb-3">
            Social Media Plans
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#64748b] max-w-2xl mx-auto">
            Professional social media management to grow your online presence
            <br />and engage with customers
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-xl sm:rounded-2xl border-2 p-5 sm:p-6 lg:p-8 transition-all hover:shadow-xl ${
                plan.popular
                  ? "border-[#ff7043] bg-white shadow-lg scale-100 sm:scale-105"
                  : "border-[#e2e8f0] bg-white hover:border-[#ff7043]/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff7043] text-white px-4 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1 whitespace-nowrap">
                  <Star className="w-3 h-3 fill-current" />
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#263238] mb-1.5 sm:mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed min-h-[40px]">
                  {plan.bestFor}
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#ff7043]">
                    {plan.price}
                  </span>
                  <span className="text-sm text-[#64748b]">/mo</span>
                </div>
              </div>

              <div className="mb-4 sm:mb-6 flex-1">
                <div className="text-[10px] sm:text-xs font-bold text-[#263238] uppercase tracking-wide mb-2 sm:mb-3">
                  What's Included
                </div>
                <ul className="space-y-2.5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#263238]">
                      <Check className="w-4 h-4 text-[#ff7043] flex-shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

