import { CheckCircle } from "lucide-react";

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
            Social Media <span className="text-[#ff7043]">Plans</span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#64748b] max-w-2xl mx-auto">
            Professional social media management to grow your online presence
            <br />and engage with customers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 transition-all ${
                plan.popular
                  ? "border-2 border-[#ff7043] bg-white shadow-xl"
                  : "border border-[#e2e8f0] bg-white hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#ff7043] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-bl-lg rounded-tr-xl sm:rounded-tr-2xl uppercase">
                  Most Popular
                </div>
              )}

              <h3 className="text-base sm:text-lg font-bold text-[#263238]">
                {plan.name}
              </h3>
              <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-[#263238]">
                  {plan.price}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#64748b]">/mo</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-[#64748b]">
                {plan.bestFor}
              </p>
              <hr className={`my-5 sm:my-6 ${plan.popular ? "border-[#ff7043]/20" : "border-[#e2e8f0]"}`} />
              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
