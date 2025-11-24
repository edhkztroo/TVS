
import React from 'react';
import { ArrowUpRight, Star, Smile } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="pricing" 
      className="bg-white py-24 px-6 md:px-12 text-black border-b border-black/10 text-center relative z-10 overflow-hidden" 
      data-nav-theme="light"
    >
      {/* --- DECORATIVE STICKERS --- */}
      
      {/* Floating Star (Top Left) */}
      <div className="absolute top-12 left-4 md:left-24 animate-pulse pointer-events-none opacity-80 md:opacity-100">
         <div className="bg-[#5465ff] border-2 border-black p-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-12deg]">
            <Star size={40} className="text-white fill-white" />
         </div>
      </div>

      {/* Floating Smile (Bottom Right) */}
  <div className="absolute bottom-12 right-4 md:right-32 animate-spin-slow pointer-events-none opacity-80 md:opacity-100">
  <img 
    src="/assets/sticker_pricing_bottom.svg" 
    alt="Sticker Pricing Bottom"
    className="w-24 h-24"
  />
</div>



      {/* ------------------------- */}

      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        {/* Top Label */}
        <span className="font-bold tracking-widest uppercase text-sm mb-8 bg-black/5 px-4 py-1.5 rounded-full">
          {t.pricing.label}
        </span>
        
        {/* Headline */}
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9] max-w-4xl">
          {t.pricing.title}
        </h2>
        
        {/* Subhead with Price Highlight */}
        <h3 className="text-2xl md:text-4xl font-bold mb-8 max-w-3xl leading-tight">
          {t.pricing.subtitle} <span className="inline-block bg-[#d2ff00] px-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black ml-2 mt-2 md:mt-0">{t.pricing.price}</span>
        </h3>

        {/* Features List */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg md:text-xl font-bold text-black/70 mb-12 max-w-3xl">
           {t.pricing.features.map((feature: string, i: number) => (
             <span key={i} className="flex items-center">
               {feature}
               {i < t.pricing.features.length - 1 && <span className="ml-6 opacity-30 font-black text-black">•</span>}
             </span>
           ))}
        </div>

        {/* CTA Button */}
        <a 
          href="https://wa.me/5215654313905" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-xl font-bold uppercase tracking-wide overflow-hidden hover:scale-105 active:scale-95 transition-all duration-300 cursor-none shadow-[6px_6px_0px_0px_rgba(204,255,0,1)] border-2 border-black hover:bg-black hover:text-[#d2ff00]"
        >
          <span className="relative z-10">{t.pricing.cta}</span>
          <ArrowUpRight className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
};

export default Pricing;
