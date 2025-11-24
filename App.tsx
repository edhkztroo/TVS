
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import VideoHero from './components/VideoHero';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppWidget from './components/WhatsAppWidget';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- PRELOADER ANIMATION ---
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        document.body.style.overflow = ''; // Restore scroll
      }
    });

    // 1. Initial State: Text hidden slightly below
    // 2. Animate "THAT" -> "VIBE" -> "STUDIO."
    tl.fromTo(".preloader-word", 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.25, 
        ease: "power3.out" 
      }
    )
    // 3. Hold for a moment
    .to({}, { duration: 0.8 })
    // 4. Slide up the entire container to reveal the site
    .to(preloaderRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut"
    });

  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Use transform for high performance (no re-renders)
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.classList.contains('cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    // Passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="min-h-screen w-full relative selection:bg-[#d2ff00] selection:text-black bg-[#F3F3F3]">
      
      {/* --- PRELOADER --- */}
      <div 
        ref={preloaderRef}
        className="fixed inset-0 z-[10000] bg-[#F3F3F3] flex items-center justify-center pointer-events-none"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 overflow-hidden px-4">
          
          {/* Word 1: THAT (Sans Extra Bold) */}
          <div className="overflow-hidden">
             <span className="preloader-word block text-6xl md:text-9xl font-[900] tracking-tighter text-black" style={{ fontFamily: "'Space Grotesk', 'Arial Black', sans-serif" }}>
               THAT
             </span>
          </div>

          {/* Word 2: VIBE (Serif Italic) */}
          <div className="overflow-hidden">
             <span className="preloader-word block text-6xl md:text-9xl italic font-normal text-black" style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}>
               VIBE
             </span>
          </div>

          {/* Word 3: STUDIO. (Sans Extra Bold) */}
          <div className="overflow-hidden">
             <span className="preloader-word block text-6xl md:text-9xl font-[900] tracking-tighter text-black" style={{ fontFamily: "'Space Grotesk', 'Arial Black', sans-serif" }}>
               STUDIO.
             </span>
          </div>

        </div>
      </div>

      {/* Custom Cursor Component */}
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block will-change-transform transition-all duration-200 ease-out -mt-1 -ml-1`}
      >
        <div className={`transition-transform duration-300 origin-top-left ${isHovering ? 'scale-110 rotate-[-5deg]' : 'scale-100'}`}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            {/* Classic Pointer Shape - Rounded & Stout */}
            <path 
                d="M6 4 L 14 29 L 18.5 18.5 L 29 14 L 6 4 Z" 
                fill="white" 
                stroke="black" 
                strokeWidth="4" 
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            </svg>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar />

      <main className="relative z-10">
        {/* New Video Hero Section */}
        <VideoHero />
        
        {/* Original Scroll Hero (now serves as secondary intro) */}
        <Hero scrollY={scrollY} />
        
        <Services />

        <Portfolio />

        <FAQ />
        
        <Pricing />
      </main>
      
      <Footer />
      
      {/* Floating Widgets */}
      <WhatsAppWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
