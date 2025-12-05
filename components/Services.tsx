import React from 'react';
import { Cpu, PenTool, RefreshCw } from 'lucide-react';

const Services: React.FC = () => {
  const deviceList = [
    "智能門鎖 (連遙距功能)",
    "燈具開關",
    "電器聯動 (冷氣, 電視, 浴室寶, 投影機等)",
    "窗簾 / 窗戶 (配雨水感應)",
    "人體存在感應",
    "智能關閉來水 / 斷阻電源"
  ];

  return (
    <section id="services" className="py-20 bg-secondary relative scroll-mt-16">
       {/* Decorative gradient blob */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">主要業務</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Service Cards */}
          <div className="space-y-6">
            <div className="bg-primary/50 p-6 rounded-xl border border-gray-800 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/30 rounded-lg text-accent">
                  <PenTool className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">安裝及設定</h3>
                  <p className="text-gray-400">
                    為您的家居度身訂造智能系統，從硬件安裝到軟件聯動設定，一站式專業服務。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/50 p-6 rounded-xl border border-gray-800 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/30 rounded-lg text-accent">
                  <RefreshCw className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">更新及維護</h3>
                  <p className="text-gray-400">
                    確保系統時刻保持最新狀態，提供定期檢查與維護，讓智能生活無後顧之憂。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Device List Image/Graphic */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-primary p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                 <Cpu className="w-6 h-6 text-accent" />
                 <h3 className="text-xl font-bold text-white scroll-mt-24" id="devices">現有聯動設備</h3>
              </div>
              <ul className="space-y-3">
                {deviceList.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-lg overflow-hidden h-48">
                 <img 
                    src="https://images.unsplash.com/photo-1535982330050-f1c2fb970584?auto=format&fit=crop&w=600&q=80" 
                    alt="Smart Home Controller" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;