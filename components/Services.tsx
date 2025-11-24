
import React, { useEffect, useRef } from 'react';
import { Eye, Cpu, Zap, Layers, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Map translations to service items
  const services = [
    {
      title: t.services.items[0].title,
      color: 'bg-[#5465ff]', // Electric Blue
      textColor: 'text-white',
      rotation: '-rotate-2',
      icon: <Eye className="w-12 h-12" />,
      desc: t.services.items[0].desc
    },
    {
      title: t.services.items[1].title,
      color: 'bg-[#d2ff00]', // Neon Lime
      textColor: 'text-black',
      rotation: 'rotate-1',
      icon: <Cpu className="w-12 h-12" />,
      desc: t.services.items[1].desc
    },
    {
      title: t.services.items[2].title,
      color: 'bg-white', // Stark White
      textColor: 'text-black',
      rotation: '-rotate-1',
      icon: <Zap className="w-12 h-12" />,
      desc: t.services.items[2].desc
    },
    {
      title: t.services.items[3].title,
      color: 'bg-black', // Bold Black
      textColor: 'text-white',
      rotation: 'rotate-2',
      icon: <Layers className="w-12 h-12" />,
      desc: t.services.items[3].desc
    },
    {
      title: t.services.items[4].title,
      color: 'bg-[#e0e0e0]', // Tech Grey
      textColor: 'text-black',
      rotation: '-rotate-2',
      icon: <MousePointer2 className="w-12 h-12" />,
      desc: t.services.items[4].desc
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-20');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.service-anim-card');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [t]); // Re-run effect when language changes

  return (
    <section className="bg-[#F3F3F3] py-4 md:py-8 px-4 relative min-h-[80vh]">
      
      <div className="max-w-screen-xl mx-auto mb-6 md:mb-8 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-[#1a1a1a]">
          {t.services.title} <span className="bg-[#5465ff] text-white px-3 md:px-4 transform -skew-x-12 inline-block border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-2xl">{t.services.titleAccent}</span>
        </h2>
        <p className="text-lg font-bold max-w-lg ml-auto text-right border-b-4 border-black pb-2 text-[#1a1a1a] hidden md:block">
          {t.services.subtitle}
        </p>
      </div>

      {/* MOBILE ONLY: Sticky Stack Layout with Scroll Animation - Compact Height */}
      <div className="md:hidden w-full max-w-[400px] mx-auto pb-10">
        {services.map((service, index) => (
          <div
            key={`mobile-${index}`}
            className={`
              service-anim-card opacity-0 translate-y-20 transition-all duration-700 ease-out
              sticky 
              w-full min-h-[280px]
              ${service.color} 
              border-4 border-black 
              flex flex-col justify-between p-5
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              rounded-2xl
            `}
            style={{
              top: `calc(10vh + ${index * 8}px)`, 
              zIndex: index + 10,
              marginBottom: index === services.length - 1 ? '0px' : '20vh',
              transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`
            }}
          >
            <div className="absolute -top-3 -right-3 bg-white border-4 border-black p-1.5 rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl">
              {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-5 h-5 text-black" })}
            </div>

            <div>
              <h3 className={`text-2xl font-black tracking-tighter mb-3 ${service.textColor} break-words leading-none`}>
                {service.title}
              </h3>
              <div className={`w-8 h-2 bg-black mb-2 rounded-full`}></div>
            </div>

            <div className={`p-2 border-2 border-black ${service.textColor === 'text-white' ? 'bg-white/20' : 'bg-black/5'} backdrop-blur-sm rounded-xl`}>
               <p className={`text-base font-bold leading-tight ${service.textColor}`}>
                {service.desc}
              </p>
            </div>
            
            <div className={`absolute top-3 left-3 text-lg font-black ${service.textColor} opacity-50`}>
                0{index + 1}
             </div>
          </div>
        ))}
      </div>

      {/* DESKTOP ONLY: Flex Accordion - Compact Height */}
      <div className="hidden md:flex w-full h-[400px] gap-3 max-w-[98%] mx-auto px-2">
        {services.map((service, index) => (
          <div
            key={`desktop-${index}`}
            className={`
              group relative
              flex-1
              min-w-[80px]
              ${service.color} 
              border-4 border-black 
              flex flex-col justify-end p-5
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
              hover:-translate-y-2
              hover:flex-[3]
              transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
              cursor-none
              overflow-hidden
              rounded-2xl
            `}
          >
             {/* Icon (Rotates on Hover) */}
             <div className="absolute top-5 right-5 bg-white border-4 border-black p-2 rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-[360deg] transition-transform duration-700 z-20 rounded-xl">
              {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-5 h-5 text-black" })}
            </div>

            {/* Number */}
            <div className={`absolute top-5 left-5 text-2xl font-black ${service.textColor} opacity-30 group-hover:opacity-100 transition-opacity`}>
              0{index + 1}
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full">
              <h3 className={`
                text-2xl lg:text-3xl font-black tracking-tighter mb-3 ${service.textColor} 
                whitespace-normal break-words leading-[0.9]
              `}>
                {service.title}
              </h3>
              
              {/* Expandable Line */}
              <div className={`w-10 h-2 bg-black mb-0 group-hover:mb-3 group-hover:w-full transition-all duration-500 rounded-full`}></div>

              {/* Description (Reveals on Hover) */}
              <div className={`
                grid grid-rows-[0fr] opacity-0 
                group-hover:grid-rows-[1fr] group-hover:opacity-100 
                transition-all duration-500 ease-in-out
              `}>
                 <div className="overflow-hidden">
                    <p className={`text-lg font-bold leading-tight ${service.textColor} p-3 border-4 border-black ${service.textColor === 'text-white' ? 'bg-white/20' : 'bg-white/40'} backdrop-blur-md rounded-xl`}>
                      {service.desc}
                    </p>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;
