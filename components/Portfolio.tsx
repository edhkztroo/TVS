
import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  type: string;
}

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Updated to 5 Projects with placeholder images
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
      color: "bg-[#d2ff00]", // Lime
      accent: "text-black"
    },
    {
      img: "https://images.unsplash.com/photo-1544367563-12123d815d19?q=80&w=2070&auto=format&fit=crop",
      color: "bg-[#5465ff]", // Blue
      accent: "text-white"
    },
    {
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      color: "bg-white", // White
      accent: "text-black"
    },
    {
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
      color: "bg-[#ff00ff]", // Magenta
      accent: "text-white"
    },
    {
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
      color: "bg-cyan-400", // Cyan
      accent: "text-black"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      const section = sectionRef.current;

      if (slider && section) {
        const totalWidth = slider.scrollWidth;
        const windowWidth = window.innerWidth;
        const scrollDistance = totalWidth - windowWidth + 200; // Extra padding

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
      
      {/* Header - Increased Top Spacing (pt-32 on section) */}
      <div className="px-8 md:px-16 mb-12 md:mb-16 flex-shrink-0 z-10">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
          {t.portfolio.title} <span className="font-serif-elegant italic font-normal text-[#d2ff00]">{t.portfolio.titleAccent}</span>
        </h2>
      </div>

      {/* Horizontal Slider - Reduced Card Sizes */}
      <div ref={sliderRef} className="flex gap-6 md:gap-10 px-8 md:px-16 items-start w-max will-change-transform">
        {(t.portfolio.projects as Project[]).map((project, index: number) => (
          <div key={index} className="group relative cursor-none flex flex-col w-[80vw] md:w-[40vw]">
            
            {/* Image Container - Landscape Ratio (16:9) */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/20 transition-all duration-300">
              <img 
                src={projects[index] ? projects[index].img : projects[0].img} 
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              
              {/* Minimal Badge */}
              <div className={`absolute top-4 left-4 ${projects[index] ? projects[index].color : 'bg-white'} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${projects[index] ? projects[index].accent : 'text-black'}`}>
                0{index + 1}
              </div>

              {/* View Case Button (Hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
                 <div className="bg-[#d2ff00] rounded-full p-4 rotate-45 group-hover:rotate-0 transition-transform duration-300">
                   <ArrowUpRight className="w-8 h-8 text-black" />
                 </div>
              </div>
            </div>

            {/* Text Info - Minimal */}
            <div className="mt-4 flex justify-between items-baseline">
              <div>
                 <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-1">{project.name}</h3>
                 <p className="font-serif-elegant italic text-lg text-white/60">{project.type}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* End Spacer */}
        <div className="w-[20vw]"></div>
      </div>
    </section>
  );
};

export default Portfolio;
