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

  // Colores (solo estilo visual)
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
          <span className="font-serif-elega
