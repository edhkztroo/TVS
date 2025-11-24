
import React from 'react';
import { ArrowUpRight, Frown, Smile } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#5465ff] text-white min-h-[60vh] p-8 md:p-20 flex flex-col justify-between relative overflow-hidden border-t-4 border-black">
      
      {/* Background Noise Texture (simulated with SVG pattern or CSS radial gradient) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2.5px)', backgroundSize: '30px 30px'}}>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        {/* Big Text Area */}
        <div className="md:col-span-8">
          <h2 className="text-[12vw] leading-[0.8] font-black tracking-tighter mb-8">
            {t.footer.title}<br />
            {t.footer.titleAccent}
            <span className="inline-block ml-4 align-middle animate-spin-slow">
              <Smile size={'10vw'} strokeWidth={3} className="text-[#d2ff00]" />
            </span>
          </h2>
        </div>

        {/* Sidebar Info */}
        <div className="md:col-span-4 flex flex-col justify-center space-y-8 md:border-l-2 md:border-white/20 md:pl-8">
           <div>
             <h4 className="uppercase tracking-widest font-bold mb-2 text-[#d2ff00]">{t.footer.socialTitle}</h4>
             <ul className="space-y-2 text-2xl font-bold">
               {['Instagram', 'Twitter', 'Dribbble', 'Behance'].map(link => (
                 <li key={link} className="group flex items-center gap-2 cursor-pointer hover:text-[#d2ff00] transition-colors">
                   {link} <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </li>
               ))}
             </ul>
           </div>
           
           <div className="pt-8 border-t-2 border-white/20">
             <h4 className="uppercase tracking-widest font-bold mb-2 text-[#d2ff00]">{t.footer.contactTitle}</h4>
             <p className="text-xl font-medium">
               hello@thatvibestudio.com<br />
               Global / Remote
             </p>
           </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row justify-between items-end gap-4 relative z-10">
        {/* Removed VIBE. text here */}
        
        <div className="w-full flex justify-end gap-8 font-bold text-sm uppercase tracking-widest">
          <a href="#" className="hover:underline decoration-[#d2ff00] decoration-4 underline-offset-4">{t.footer.legal}</a>
          <a href="#" className="hover:underline decoration-[#d2ff00] decoration-4 underline-offset-4">{t.footer.privacy}</a>
          <span>{t.footer.copy}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;