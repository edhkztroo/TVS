import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VideoHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full h-screen bg-[#F3F3F3] p-1 md:p-2" data-nav-theme="dark">
      <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-end justify-center text-white pb-12 md:pb-16 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
        
        {/* Background Image - Professional Studio/Agency Vibe */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
            alt="Modern Creative Web Design Studio Office - THAT VIBE Studio" 
            className="w-full h-full object-cover scale-105"
            loading="eager"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[98%] mx-auto px-4 text-center">
          
          {/* Main Title Container - Commercial Copy */}
          <h1 className="w-full flex flex-col items-center justify-center leading-[1.1] md:leading-[0.9]">
            
            {/* Row 1: "We build digital products" */}
            <div className="flex flex-wrap justify-center items-baseline gap-x-2 md:gap-x-6 text-[9vw] md:text-[7vw]">
              <span className="font-[900] font-sans text-white tracking-tight">{t.videoHero.line1}</span> 
              <span className="font-serif-elegant text-white italic font-normal hover:text-[#d2ff00] transition-colors duration-300 cursor-none text-center">{t.videoHero.line1Accent}</span>
            </div>

            {/* Row 2: "that grow your business" */}
            {/* Changed from inline-flex to flex-wrap to prevent cutting off on mobile */}
            <div className="relative group flex flex-wrap justify-center items-baseline text-[9vw] md:text-[7vw] mt-1 md:mt-0 gap-x-2 md:gap-x-6">
                  <span className="font-[900] font-sans tracking-tight text-white">{t.videoHero.line2}</span>
                  <span className="font-[900] font-sans tracking-tight text-white group-hover:text-[#d2ff00] transition-colors duration-300 cursor-none underline decoration-[#5465ff] decoration-4 underline-offset-8 text-center">{t.videoHero.line2Accent}</span>
                  
                  {/* Floating Star Element */}
                  <span className="absolute -top-6 -right-6 md:-top-10 md:-right-12 text-[#5465ff] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 pointer-events-none">
                      <Star size={60} fill="#5465ff" className="animate-pulse" stroke="white" strokeWidth={3} />
                  </span>
            </div>
            
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
