import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';

const SmartLinkage: React.FC = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">實現智能聯動</h2>
          <p className="text-gray-400">設備之間的智能對話，為您創造更便捷安全的生活</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Scenario 1: AC Automation (Page 5) */}
          <div className="bg-secondary/40 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 flex flex-col items-center text-center hover:border-accent/50 transition-all duration-300 group">
            <div className="flex items-center justify-center gap-4 mb-8 w-full">
              {/* AC Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-white/5 border border-gray-600 relative group-hover:border-accent/30 transition-colors">
                 <img 
                   src="https://plus.unsplash.com/premium_photo-1670984935550-5ce2e220977a?auto=format&fit=crop&w=400&q=80" 
                   alt="Air Conditioner" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs text-white py-1">冷氣機</div>
              </div>
              
              {/* Plus Sign */}
              <div className="relative">
                <Plus className="w-12 h-12 text-yellow-400 stroke-[3] drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
              </div>

              {/* Sensor Image - Using a generic white device representation */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-white/5 border border-gray-600 relative group-hover:border-accent/30 transition-colors">
                 <img 
                   src="https://images.unsplash.com/photo-1558089748-12969446d323?auto=format&fit=crop&w=400&q=80" 
                   alt="Motion Sensor" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs text-white py-1">人體感應器</div>
              </div>
            </div>

            <div className="bg-green-600 text-white font-bold px-6 py-2 rounded-full mb-6 text-lg shadow-lg transform group-hover:scale-105 transition-transform">
              實現智能聯動
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">冷氣自動化管理</h3>
            <div className="flex flex-wrap justify-center gap-2 text-gray-300 font-medium">
              <span className="px-3 py-1 bg-white/5 rounded-lg border border-gray-700">遠程控制</span>
              <span className="hidden sm:inline text-accent">|</span>
              <span className="px-3 py-1 bg-white/5 rounded-lg border border-gray-700">定時開關</span>
              <span className="hidden sm:inline text-accent">|</span>
              <span className="px-3 py-1 bg-white/5 rounded-lg border border-gray-700 text-accent">無人冷氣自動關閉</span>
            </div>
          </div>

          {/* Scenario 2: Leak Protection (Page 7) */}
          <div className="bg-secondary/40 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 flex flex-col items-center text-center hover:border-red-400/50 transition-all duration-300 group">
             <div className="flex items-center justify-center gap-4 mb-8 w-full">
              {/* Water Sensor Image - Abstract representation */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-white/5 border border-gray-600 relative group-hover:border-red-400/30 transition-colors">
                 <img 
                   src="https://images.unsplash.com/photo-1516937941348-c09645f875eb?auto=format&fit=crop&w=400&q=80" 
                   alt="Water Leak Sensor" 
                   className="w-full h-full object-cover"
                 />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs text-white py-1">水浸感應器</div>
              </div>
              
              {/* Plus Sign */}
              <div className="relative">
                <Plus className="w-12 h-12 text-yellow-400 stroke-[3] drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
              </div>

              {/* Valve Image - Industrial pipe representation */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-white/5 border border-gray-600 relative group-hover:border-red-400/30 transition-colors">
                 <img 
                   src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?auto=format&fit=crop&w=400&q=80" 
                   alt="Smart Valve" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs text-white py-1">智能出水閥</div>
              </div>
            </div>

            <div className="bg-green-600 text-white font-bold px-6 py-2 rounded-full mb-6 text-lg shadow-lg transform group-hover:scale-105 transition-transform">
              實現智能聯動
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">漏水自動防護</h3>
            <div className="flex items-center justify-center gap-3 text-gray-300 font-medium bg-red-500/10 px-4 py-2 rounded-xl border border-red-500/20">
              <span>偵測到地面有水</span>
              <ArrowRight className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-400 font-bold">自動關閉來水喉</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartLinkage;
