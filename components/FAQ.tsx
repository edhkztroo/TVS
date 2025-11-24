
import React, { useState } from 'react';
import { Plus, Minus, Sparkles, Smile, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FAQItem {
  q: string;
  a: string;
}

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24 px-6 md:px-12 border-b border-white/10 relative overflow-hidden" data-nav-theme="dark">
      
      {/* --- DECORATIVE STICKERS --- */}
      <div className="absolute top-10 right-[10%] md:right-[20%] animate-pulse pointer-events-none z-0">
         <Sparkles className="text-[#d2ff00] w-24 h-24 opacity-50" strokeWidth={1} />
      </div>

      <div className="absolute bottom-10 left-[5%] rotate-12 pointer-events-none z-0">
          <div className="bg-white border-2 border-white/20 p-3 rounded-full opacity-20">
             <Star size={32} className="text-white fill-white" />
          </div>
      </div>
      {/* ------------------------- */}

      <div className="max-w-4xl mx-auto relative z-10">
        
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-white relative inline-block">
          {t.faq.title} 
          <span className="relative inline-block ml-4 align-middle">
             <span className="font-serif-elegant italic lowercase text-black bg-[#d2ff00] px-3 rounded-lg text-4xl md:text-5xl">{t.faq.subtitle}</span>
             {/* Sticker Badge on Title */}
             <div className="absolute -top-8 -right-8 bg-white border-2 border-black p-1.5 rounded-full shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] rotate-12">
                <Smile className="text-black" size={24} />
             </div>
          </span>
        </h2>

        <div className="flex flex-col">
          {(t.faq.items as FAQItem[]).map((item, index: number) => (
            <div 
              key={index} 
              className="border-b border-white/20 last:border-b-0"
            >
              <button 
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center py-8 text-left cursor-none group"
              >
                <span className={`text-xl md:text-3xl font-bold uppercase tracking-tight transition-colors duration-300 ${activeIndex === index ? 'text-[#d2ff00]' : 'text-white group-hover:text-gray-300'}`}>
                  {item.q}
                </span>
                <span className={`flex-shrink-0 ml-4 text-white transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  {activeIndex === index ? <Minus size={24} color="#d2ff00" /> : <Plus size={24} />}
                </span>
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${activeIndex === index ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="text-lg md:text-xl font-medium text-gray-400 leading-relaxed max-w-2xl">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
