
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Switch color when user scrolls past the Hero section (approx 90vh)
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full 
        flex justify-between items-center z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm text-black' : 'bg-transparent py-6 text-white'}
        px-6 pr-32
      `}
    >
      {/* LOGO CONTAINER */}
      <div className="flex items-center gap-2 cursor-none">
        <img 
            src="https://raw.githubusercontent.com/edhkztroo/TVS/e3924be4395add60410322ec48c4ce4a9bec6182/TVS.svg" 
            alt="THAT VIBE Studio" 
            className={`
              w-auto object-contain transition-all duration-300 
              ${isScrolled ? 'h-12 brightness-0' : 'h-16 md:h-20 brightness-0 invert'}
            `}
        />
      </div>

      <div className="hidden md:flex items-center gap-6">
        <button 
          onClick={toggleLanguage}
          className={`
            font-bold tracking-widest uppercase text-sm 
            hover:text-[#d2ff00] transition-colors cursor-none
            ${isScrolled ? 'hover:text-[#5465ff]' : ''}
          `}
        >
          {t.navbar.langLabel}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
