import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      alert("感謝您的查詢！我們已收到您的訊息，團隊將會盡快透過 WhatsApp 或電郵聯絡您。");
      // Optional: Reset form here
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <footer id="contact" className="bg-primary pt-20 pb-10 border-t border-gray-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">聯絡我們</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              準備好升級您的家居了嗎？立即聯絡丸石智能家居，我們的專業團隊隨時為您提供諮詢與報價。
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-lg tracking-wide">6712 - 8323 (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="w-5 h-5 text-accent" />
                <span>kiwichan@planherohk.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="w-5 h-5 text-accent" />
                <span>香港</span>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-8 rounded-2xl border border-gray-800">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">姓名</label>
                <input required type="text" className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors" placeholder="您的稱呼" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">電話</label>
                <input required type="tel" className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors" placeholder="聯絡電話" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">查詢內容</label>
                <textarea required rows={4} className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors" placeholder="想了解關於..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-primary font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]"
              >
                {isSubmitting ? '發送中...' : (
                  <>
                    發送訊息
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;