"use client";

import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";

export function SavingsCalculator() {
  const [orderVolume, setOrderVolume] = useState(1250);
  const [ticketSize, setTicketSize] = useState(45);
  const [commissionRate, setCommissionRate] = useState(30);
  const [annualSavings, setAnnualSavings] = useState(0);

  useEffect(() => {
    // Calculate annual savings
    // Monthly revenue from third-party orders
    const monthlyRevenue = orderVolume * ticketSize;
    
    // Commission lost to third-party platforms
    const monthlyCommission = monthlyRevenue * (commissionRate / 100);
    
    // Ser.vi fee (assuming $0.99 per order for online ordering)
    const monthlyServiFee = orderVolume * 0.99;
    
    // Monthly savings
    const monthlySavings = monthlyCommission - monthlyServiFee;
    
    // Annual savings
    const annual = Math.max(0, monthlySavings * 12);
    
    setAnnualSavings(Math.round(annual));
  }, [orderVolume, ticketSize, commissionRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 bg-[#263238] text-white relative overflow-hidden" id="calculator">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff7043]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Controls */}
          <div>
            <span className="text-[#ff7043] font-bold tracking-wider uppercase text-sm mb-2 block">
              Savings Estimator
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How much can you save?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Traditional delivery apps take 30% of every order. See how much profit you
              reclaim by switching to Ser.vi&apos;s direct ordering channels.
            </p>

            <div className="space-y-8 pr-0 md:pr-12">
              {/* Order Volume Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-gray-200">Monthly Order Volume</label>
                  <span className="text-[#ff7043] font-mono font-bold">
                    {orderVolume.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={orderVolume}
                  onChange={(e) => setOrderVolume(parseInt(e.target.value))}
                  className="w-full h-1 bg-[#455a64] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>100</span>
                  <span>5,000+</span>
                </div>
              </div>

              {/* Ticket Size Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-gray-200">Average Ticket Size</label>
                  <span className="text-[#ff7043] font-mono font-bold">
                    ${ticketSize}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={ticketSize}
                  onChange={(e) => setTicketSize(parseInt(e.target.value))}
                  className="w-full h-1 bg-[#455a64] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>$10</span>
                  <span>$200+</span>
                </div>
              </div>

              {/* Commission Rate Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-gray-200">Current Commission Rate</label>
                  <span className="text-[#ff7043] font-mono font-bold">
                    {commissionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  step="1"
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(parseInt(e.target.value))}
                  className="w-full h-1 bg-[#455a64] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>0%</span>
                  <span>40%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Results */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#ff7043] blur-2xl opacity-20 rounded-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center">
              <p className="text-gray-300 text-lg font-medium mb-4">
                Estimated Annual Savings
              </p>
              <div className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight transition-all duration-300">
                {formatCurrency(annualSavings)}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-bold mb-8">
                <TrendingUp className="w-4 h-4" />
                That&apos;s pure profit
              </div>
              <button className="w-full py-4 bg-[#ff7043] hover:bg-[#e64a19] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#ff7043]/20">
                Start Saving Today
              </button>
              <p className="mt-4 text-xs text-gray-500">
                *Estimates based on converting 3rd party delivery volume to Ser.vi direct
                ordering.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff7043;
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(255, 112, 67, 0.2);
          transition: box-shadow 0.2s;
          margin-top: -8px;
        }

        .slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 0 8px rgba(255, 112, 67, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff7043;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 0 4px rgba(255, 112, 67, 0.2);
          transition: box-shadow 0.2s;
        }

        .slider::-moz-range-thumb:hover {
          box-shadow: 0 0 0 8px rgba(255, 112, 67, 0.2);
        }

        .slider::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: #455a64;
          border-radius: 2px;
        }

        .slider::-moz-range-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: #455a64;
          border-radius: 2px;
        }
      `}</style>
    </section>
  );
}

