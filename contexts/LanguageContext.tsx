
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: any; // Dictionary
}

const currentYear = new Date().getFullYear();

const translations = {
  en: {
    navbar: {
      cta: "Start Project",
      langLabel: "EN / ES"
    },
    videoHero: {
      line1: "We build",
      line1Accent: "digital products",
      line2: "that grow",
      line2Accent: "your business"
    },
    hero: {
      marquee1: "not just code ",
      marquee2: "it's pure vibe ",
      paragraph: "The era of boring software is over. We merge designer intuition with AI power to build digital experiences that feel alive. No bloat, just flow."
    },
    services: {
      title: "What is",
      titleAccent: "Vibe Coding?",
      subtitle: "(It's how we build faster and better.)",
      items: [
        {
          title: 'Premium Design',
          desc: "We curate the aesthetic. No generic templates, just pure visual strategy. Every pixel is placed with intention to communicate your brand's unique voice and stand out in a crowded market. We ensure your digital presence is memorable."
        },
        {
          title: 'Fast Development',
          desc: "AI-powered coding ensures speed of light execution and clean architecture. We ship in days, not months, without compromising on code quality or future scalability. Efficiency is our middle name."
        },
        {
          title: 'Fluid Experience',
          desc: "Responsive, buttery smooth interactions that keep users engaged. Motion design is baked into the core, not added as an afterthought, making every scroll feel satisfying and every click responsive."
        },
        {
          title: 'High Performance',
          desc: "SEO-optimized and lightning fast load times for better conversion. We aim for all-green Core Web Vitals to please both Google algorithms and your impatient users. Speed converts."
        },
        {
          title: 'Interactive UI',
          desc: "Elements that react to user behavior, creating a memorable journey. Micro-interactions delight users and make the interface feel alive, turning passive visitors into active fans of your brand."
        }
      ]
    },
    portfolio: {
      title: "Selected",
      titleAccent: "Works",
      viewCase: "View Case",
      projects: [
        { name: "NEON DRIFT", type: "Automotive E-commerce" },
        { name: "ZEN MODE", type: "Wellness App" },
        { name: "URBAN PULSE", type: "Real Estate Platform" },
        { name: "CYBER PUNK", type: "NFT Marketplace" },
        { name: "VIBE CHECK", type: "Social Media App" }
      ]
    },
    faq: {
      title: "VIBE CHECK",
      subtitle: "(FAQ)",
      items: [
        {
          q: "Do I need a monthly subscription?",
          a: "No. Once we deliver, the code is 100% yours. No hidden fees."
        },
        {
          q: "How do I update the content?",
          a: "We build Unbreakable Static Sites. For updates, you just text us, and we handle it instantly via our 'Vibe Care' plan, or we can set up a visual editor if requested."
        },
        {
          q: "Is this a template?",
          a: "Never. Every pixel is designed for your specific brand identity."
        }
      ]
    },
    pricing: {
      label: "THE NUMBERS",
      title: "WANT A WEBSITE LIKE THIS?",
      subtitle: "Get this exact level of quality starting at",
      price: "$200 USD.",
      features: ["Custom Design", "AI Architecture", "Mobile Responsive", "Full Ownership"],
      cta: "Start Project"
    },
    whatsapp: {
      title: "start project",
      desc: "Scan the QR code to chat with us via your smartphone.",
      button: "Chat via desktop"
    },
    footer: {
      title: "don't be",
      titleAccent: "boring.",
      socialTitle: "Stalk The Vibe",
      contactTitle: "Contact",
      legal: "LEGAL",
      privacy: "PRIVACY",
      copy: `© ${currentYear} THAT VIBE Studio`
    }
  },
  es: {
    navbar: {
      cta: "Iniciar Proyecto",
      langLabel: "ES / EN"
    },
    videoHero: {
      line1: "Creamos",
      line1Accent: "productos digitales",
      line2: "que impulsan",
      line2Accent: "tu negocio"
    },
    hero: {
      marquee1: "no solo código ",
      marquee2: "es pura vibra ",
      paragraph: "La era del software aburrido terminó. Fusionamos intuición de diseño con el poder de la IA para crear experiencias digitales que se sienten vivas. Sin relleno, puro flow."
    },
    services: {
      title: "¿Qué es el",
      titleAccent: "Vibe Coding?",
      subtitle: "(Así construimos más rápido y mejor.)",
      items: [
        {
          title: 'Diseño Premium',
          desc: "Curamos la estética. Sin plantillas genéricas, solo pura estrategia visual. Cada píxel se coloca con intención para comunicar la voz única de tu marca y destacar en el mercado. Hacemos que tu presencia sea memorable."
        },
        {
          title: 'Desarrollo Rápido',
          desc: "Código potenciado por IA asegura ejecución a la velocidad de la luz y arquitectura limpia. Entregamos en días, no meses, sin comprometer la calidad del código ni la escalabilidad. Eficiencia es nuestro apellido."
        },
        {
          title: 'Experiencia Fluida',
          desc: "Interacciones responsivas y suaves como la seda que mantienen a los usuarios enganchados. El diseño de movimiento está integrado en el núcleo, no añadido al final, haciendo cada scroll satisfactorio."
        },
        {
          title: 'Alto Rendimiento',
          desc: "Optimizado para SEO y tiempos de carga ultrarrápidos para mejor conversión. Apuntamos a Core Web Vitals perfectos para complacer tanto a Google como a tus usuarios. La velocidad convierte."
        },
        {
          title: 'UI Interactiva',
          desc: "Elementos que reaccionan al comportamiento del usuario, creando un viaje memorable. Las micro-interacciones deleitan a los usuarios y hacen que la interfaz se sienta viva, convirtiendo visitantes en fans."
        }
      ]
    },
    portfolio: {
      title: "Trabajos",
      titleAccent: "Selectos",
      viewCase: "Ver Caso",
      projects: [
        { name: "NEON DRIFT", type: "E-commerce Automotriz" },
        { name: "MODO ZEN", type: "App de Bienestar" },
        { name: "PULSO URBANO", type: "Plataforma Inmobiliaria" },
        { name: "CYBER PUNK", type: "NFT Marketplace" },
        { name: "VIBE CHECK", type: "Red Social" }
      ]
    },
    faq: {
      title: "VIBE CHECK",
      subtitle: "(PREGUNTAS)",
      items: [
        {
          q: "¿Necesito pagar una suscripción mensual?",
          a: "No. Una vez entregamos, el código es 100% tuyo. Sin tarifas ocultas."
        },
        {
          q: "¿Cómo actualizo el contenido?",
          a: "Creamos Sitios Estáticos Indestructibles. Para actualizaciones, solo escríbenos y lo manejamos al instante con nuestro plan 'Vibe Care', o configuramos un editor visual si lo pides."
        },
        {
          q: "¿Es una plantilla?",
          a: "Jamás. Cada píxel está diseñado para la identidad específica de tu marca."
        }
      ]
    },
    pricing: {
      label: "LOS NÚMEROS",
      title: "¿QUIERES UNA WEB ASÍ?",
      subtitle: "Obtén este nivel exacto de calidad desde",
      price: "$200 USD.",
      features: ["Diseño Personalizado", "Arquitectura IA", "Responsive Móvil", "Propiedad Total"],
      cta: "Iniciar Proyecto"
    },
    whatsapp: {
      title: "iniciar proyecto",
      desc: "Escanea el código QR para chatear con nosotros desde tu celular.",
      button: "Chatear desde escritorio"
    },
    footer: {
      title: "no seas",
      titleAccent: "aburrido.",
      socialTitle: "Sigue la Vibra",
      contactTitle: "Contacto",
      legal: "LEGAL",
      privacy: "PRIVACIDAD",
      copy: `© ${currentYear} THAT VIBE Studio`
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'es' : 'en'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
