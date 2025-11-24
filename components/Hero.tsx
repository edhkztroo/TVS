
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const { t } = useLanguage();
  
  // Configuration for the specific texts requested - LOWERCASE
  const line1Text = t.hero.marquee1;
  const line2Text = t.hero.marquee2;
  
  // Repeat them enough to fill the screen width significantly
  const line1Repeated = Array(8).fill(line1Text);
  const line2Repeated = Array(8).fill(line2Text);

  return (
    <section className="relative min-h-[50vh] flex flex-col justify-center items-center overflow-hidden bg-[#F3F3F3] py-12 md:py-24 border-b-4 border-black" data-nav-theme="light">
      
      {/* --- DECORATIVE STICKERS (CUSTOM IMAGES) --- */}
      
      {/* Top Right Sticker */}
      <div className="absolute top-[5%] right-[5%] rotate-12 z-20 pointer-events-none">
        {/* Replace with your file: /assets/sticker_hero_top.png */}
        <img 
          src="/assets/sticker_hero_top.png" 
          alt="Decoration Top" 
          className="w-24 h-24 object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          onError={(e) => {
            // Fallback visualization if image is missing
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      
      {/* Bottom Left Sticker */}
      <div className="absolute bottom-[10%] left-[5%] -rotate-12 z-20 pointer-events-none">
         {/* Replace with your file: /assets/sticker_hero_bottom.svg */}
         <img 
          src="/assets/sticker_hero_bottom.svg" 
          alt="Decoration Bottom" 
          className="w-32 h-32 object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Background Large Element */}
      <div className="absolute top-[40%] left-[15%] rotate-6 z-0 opacity-10 pointer-events-none mix-blend-multiply">
         {/* Replace with your file: /assets/sticker_hero_bg.png */}
         <img 
          src="/assets/sticker_hero_bg.png" 
          alt="Background Decoration" 
          className="w-[300px] h-[300px] object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Marquee Container 1 - Moves Left */}
      <div 
        className="w-[300%] -ml-[100%] py-2"
        style={{ 
          transform: `translateX(${scrollY * 0.8}px) rotate(-2deg)`, // Increased speed (0.8)
        }}
      >
        <h1 className="text-[6rem] md:text-[9rem] font-black leading-[0.8] tracking-tighter whitespace-nowrap text-[#1a1a1a]">
          {line1Repeated.map((text, i) => (
            <span 
              key={i} 
              className="inline-block mx-8"
            >
              {text}
            </span>
          ))}
        </h1>
      </div>

      {/* Marquee Container 2 - Moves Right */}
      <div 
        className="w-[300%] -ml-[50%] py-2 mt-0 md:-mt-8"
        style={{ 
          transform: `translateX(-${scrollY * 1.2}px) rotate(1deg)`, // Aggressive speed (1.2)
        }}
      >
         <h1 className="text-[6rem] md:text-[9rem] font-black leading-[0.8] tracking-tighter whitespace-nowrap text-[#5465ff]"
             style={{ 
               WebkitTextStroke: '3px black',
               color: 'transparent' 
             }}>
          {line2Repeated.map((text, i) => (
            <span 
              key={i} 
              className="inline-block mx-8"
            >
              {text}
            </span>
          ))}
        </h1>
      </div>

      {/* Static Paragraph Block */}
      <div className="relative z-10 mt-10 md:mt-16 px-6 text-center">
        <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-[600px] mx-auto text-[#1a1a1a]">
          {t.hero.paragraph}
        </p>
      </div>

    </section>
  );
};

export default Hero;
