
import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  type: string;
  img: string;
  link: string;
}

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // We now get EVERYTHING from the language context.
  // Images, Links, Names, Types.

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      const section = sectionRef.current;

      if (slider && section) {
        const totalWidth = slider.scrollWidth;
        const windowWidth = window.innerWidth;
        // Adjust scroll distance to ensure we see all cards smoothly
        const scrollDistance = totalWidth - windowWidth + (windowWidth * 0.1); 

        gsap.to(slider, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => "+=" + scrollDistance,
            invalidateOnRefresh: true,
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white h-screen overflow-hidden flex flex-col pt-32 pb-12 relative border-b border-white/10" data-nav-theme="dark">
      
      {/* Header */}
      <div className="px-8 md:px-16 mb-12 md:mb-16 flex-shrink-0 z-10">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
          {t.portfolio.title} <span className="font-serif-elegant italic font-normal text-[#d2ff00]">{t.portfolio.titleAccent}</span>
        </h2>
      </div>

      {/* Horizontal Slider */}
      <div ref={sliderRef} className="flex gap-6 md:gap-10 px-8 md:px-16 items-start w-max will-change-transform">
        {(t.portfolio.projects as Project[]).map((project, index: number) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative cursor-none flex flex-col w-[80vw] md:w-[40vw] flex-shrink-0"
          >
            
            {/* Image Container - Landscape Ratio (16:9) */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/20 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] group-hover:shadow-[12px_12px_0px_0px_rgba(210,255,0,0.5)] group-hover:-translate-y-2">
              <img 
                src={project.img} 
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  // Fallback if image not found in assets
                  e.currentTarget.src = "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop";
                }}
              />
              
              {/* Minimal Number Badge */}
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-black">
                0{index + 1}
              </div>

              {/* View Case Overlay (Hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                 <div className="bg-[#d2ff00] rounded-full p-4 rotate-45 group-hover:rotate-0 transition-transform duration-300 shadow-xl border-2 border-black">
                   <ArrowUpRight className="w-8 h-8 text-black" />
                 </div>
              </div>
            </div>

            {/* Text Info */}
            <div className="mt-6 flex justify-between items-baseline px-1">
              <div>
                 <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-1 group-hover:text-[#d2ff00] transition-colors">{project.name}</h3>
                 <p className="font-serif-elegant italic text-lg text-white/60 group-hover:text-white transition-colors">{project.type}</p>
              </div>
            </div>
          </a>
        ))}
        
        {/* End Spacer for scrolling feel */}
        <div className="w-[20vw]"></div>
      </div>
    </section>
  );
};

export default Portfolio;
