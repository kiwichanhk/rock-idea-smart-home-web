import React from 'react';
import { TAGLINE } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=2070&auto=format&fit=crop" 
          alt="Smart Home Dashboard Interface" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              丸石智能家居
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 mb-8 font-light">
            {TAGLINE}
          </p>
          <p className="text-md md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            專業安裝設定．智能聯動．安全監控．維護更新<br/>
            為您打造懂您的家
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#solutions" 
              onClick={(e) => handleScroll(e, 'solutions')}
              className="px-8 py-3 bg-accent hover:bg-cyan-400 text-primary font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.5)] cursor-pointer inline-block"
            >
              探索方案
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-8 py-3 border border-gray-500 hover:border-white text-gray-300 hover:text-white rounded-full transition-all hover:bg-white/10 cursor-pointer inline-block"
            >
              聯絡我們
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;