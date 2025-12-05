import React from 'react';
import { AUTOMATION_FEATURES, SAFETY_FEATURES } from '../constants';
import { FeatureItem } from '../types';

const FeatureCard: React.FC<{ item: FeatureItem }> = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="bg-secondary/50 p-6 rounded-2xl border border-gray-800 hover:bg-secondary transition-all hover:shadow-xl hover:shadow-accent/5 group">
      <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors text-accent">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
      <p className="text-gray-400 mb-4 text-sm font-medium">{item.description}</p>
      <ul className="space-y-2">
        {item.details.map((detail, idx) => (
          <li key={idx} className="text-gray-500 text-sm flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-primary relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">實際應用場景</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            為家中電器及照明系統建立智能聯動，提升生活品質與安全。
          </p>
        </div>

        {/* Automation Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gray-700 flex-1"></div>
            <h3 className="text-2xl font-bold text-accent px-4 border border-accent/20 py-1 rounded-full bg-accent/5">
              電器自動化
            </h3>
            <div className="h-px bg-gray-700 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AUTOMATION_FEATURES.map((item, index) => (
              <FeatureCard key={index} item={item} />
            ))}
          </div>
          
          <div className="mt-8 rounded-2xl overflow-hidden h-64 md:h-80 shadow-2xl">
             <img 
                src="https://picsum.photos/seed/smartlivingroom/1200/600" 
                alt="Living Room Automation" 
                className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-sm font-medium text-center">場景：人體傳感器自動調節燈光與室溫</p>
             </div>
          </div>
        </div>

        {/* Safety Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-gray-700 flex-1"></div>
            <h3 className="text-2xl font-bold text-red-400 px-4 border border-red-500/20 py-1 rounded-full bg-red-500/5">
              警報安全
            </h3>
             <div className="h-px bg-gray-700 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAFETY_FEATURES.map((item, index) => (
              <FeatureCard key={index} item={item} />
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 h-48 md:h-64">
             <div className="rounded-xl overflow-hidden relative">
                 <img src="https://picsum.photos/seed/safety1/600/400" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Sensor" />
             </div>
             <div className="rounded-xl overflow-hidden relative">
                 <img src="https://picsum.photos/seed/rainwindow/600/400" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Rain Sensor" />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solutions;