import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Los colores ya no son hardcoded — asignamos una paleta predefinida a los 5 proyectos
  const colors = [
    { bg: "bg-[#d2ff00]", accent: "text-black" },
    { bg: "bg-[#5465ff]", accent: "text-white" },
    { bg: "bg-white", accent: "text-black" },
    { bg: "bg-[#ff00ff]", accent: "text-white" },
    { bg: "bg-cyan-400", accent: "text-black" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      const section = sectionRef.current;

      if (slider && section) {
        const totalWidth = slider.scrollWidth;
        const windowWidth = window.innerWidth;
        const scrollDistance = totalWidth - windowWidth + 200;

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
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white h-screen overflow-hidden flex flex-col pt-32 pb-12 relative border-b border-white/10"
      data-nav-theme="dark"
    >
      {/* HEADER */}
      <div className="px-8 md:px-16 mb-12 md:mb-16 flex-shrink-0 z-10">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
          {t.portfolio.title}{' '}
          <span className="font-serif-elegant italic font-normal text-[#d2ff00]">
            {t.portfolio.titleAccent}
          </span>
        </h2>
      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-6 md:gap-10 px-8 md:px-16 items-start w-max will-change-transform"
      >
        {t.portfolio.projects.map((project: any, index: number) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative cursor-none flex flex-col w-[80vw] md:w-[40vw]"
          >
            {/* IMG */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/20 transition-all duration-300">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />

              {/* Badge */}
              <div
                className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                  colors[index]?.bg || "bg-white"
                } ${colors[index]?.accent || "text-black"}`}
              >
                0{index + 1}
              </div>

              {/* Hover Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
                <div className="bg-[#d2ff00] rounded-full p-4 rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  <ArrowUpRight className="w-8 h-8 text-black" />
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="mt-4 flex justify-between items-baseline">
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-1">
                  {project.name}
                </h3>
                <p className="font-serif-elegant italic text-lg text-white/60">
                  {project.type}
                </p>
              </div>
            </div>
          </a>
        ))}

        {/* End Spacer */}
        <div className="w-[20vw]"></div>
      </div>
    </section>
  );
};

export default Portfolio;
