import React from 'react';
import { PRICING_LIST } from '../constants';
import { ChevronRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-secondary relative overflow-hidden scroll-mt-16">
      {/* Ambient Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">參考價目</h2>
          <div className="flex justify-center mb-4">
             <div className="bg-primary/80 border border-gray-700 rounded-full px-5 py-2 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <p className="text-gray-300 text-sm">
                   價錢已連工包料，按實際需求而定
                </p>
             </div>
          </div>
        </div>

        {/* Simplified List View */}
        <div className="bg-primary/60 backdrop-blur-xl rounded-3xl border border-gray-800 shadow-2xl overflow-hidden divide-y divide-gray-800/50">
          {PRICING_LIST.map((item) => {
             const Icon = item.icon!;
             return (
              <div 
                key={item.id} 
                className="group p-5 sm:p-6 hover:bg-white/5 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300 shrink-0 border border-gray-700/50 group-hover:border-accent/20">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{item.name}</h3>
                    {item.description && (
                      <p className="text-gray-500 text-sm mt-0.5 group-hover:text-gray-400 transition-colors">{item.description}</p>
                    )}
                  </div>
                </div>
                
                <div className="pl-[3.75rem] sm:pl-0 flex items-center justify-between sm:justify-end w-full sm:w-auto">
                   <div className="sm:hidden h-px bg-gray-800 flex-1 mr-4"></div>
                   <div className="text-lg sm:text-xl font-bold text-white font-mono whitespace-nowrap bg-gray-800/30 px-3 py-1 rounded-lg border border-transparent group-hover:border-gray-700 transition-colors">
                    {item.price}
                   </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6 text-sm">需要更精準的報價？我們提供免費上門評估服務。</p>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-cyan-400 text-primary font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer"
            >
              立即預約諮詢
              <ChevronRight className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;