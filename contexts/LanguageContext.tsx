
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
      langLabel: "EN / ES",
    },
    videoHero: {
      line1: "We build",
      line1Accent: "digital products",
      line2: "that grow",
      line2Accent: "your business",
    },
    hero: {
      marquee1: "not just code ",
      marquee2: "it's pure vibe ",
      paragraph:
        "The era of boring software is over. We merge designer intuition with AI power to build digital experiences that feel alive.",
    },
    services: {
      title: "What is",
      titleAccent: "Vibe Coding?",
      subtitle: "(It's how we build faster and better.)",
      items: [
        { title: "Premium Design", desc: "We curate the aesthetic with intention." },
        { title: "Fast Development", desc: "AI-powered code delivered in days." },
        { title: "Fluid Experience", desc: "Smooth interactions that feel alive." },
        { title: "High Performance", desc: "Optimized for SEO and speed." },
        { title: "Interactive UI", desc: "Micro-interactions that delight users." },
      ],
    },

    portfolio: {
      title: "Selected",
      titleAccent: "Works",
      viewCase: "View Case",
      projects: [
        {
          name: "Acción Política",
          type: "Political Consulting Agency",
          img: "/assets/project_1.jpg",
          link: "https://ap-liart.vercel.app/",
        },
        {
          name: "Amaury Mogollón",
          type: "Political Consultant – Personal Website",
          img: "/assets/project_2.jpg",
          link: "https://amaury-iota.vercel.app/",
        },
        { name: "Coming Soon", type: "New Project", img: "/assets/project_3.jpg", link: "#" },
        { name: "Coming Soon", type: "New Project", img: "/assets/project_4.jpg", link: "#" },
        { name: "Coming Soon", type: "New Project", img: "/assets/project_5.jpg", link: "#" },
      ],
    },

    faq: {
      title: "VIBE CHECK",
      subtitle: "(FAQ)",
      items: [
        { q: "Do I need a subscription?", a: "No. Your code is 100% yours." },
        { q: "How do I update content?", a: "Text us and we update it instantly." },
        { q: "Is this a template?", a: "Never. Everything is custom-made." },
      ],
    },

    pricing: {
      label: "THE NUMBERS",
      title: "WANT A WEBSITE LIKE THIS?",
      subtitle: "Starts at",
      price: "$200 USD",
      features: ["Custom Design", "AI Architecture", "Responsive", "Full Ownership"],
      cta: "Start Project",
    },

    whatsapp: {
      title: "start project",
      desc: "Scan the QR code to chat with us.",
      button: "Chat via desktop",
    },

    footer: {
      title: "don't be",
      titleAccent: "boring.",
      socialTitle: "Follow The Vibe",
      contactTitle: "Contact",
      legal: "LEGAL",
      privacy: "PRIVACY",
      copy: `© ${currentYear} THAT VIBE Studio`,
    },
  },

  // ------------------------------------------------------------------------
  // ESPAÑOL
  // ------------------------------------------------------------------------

  es: {
    navbar: {
      cta: "Iniciar Proyecto",
      langLabel: "ES / EN",
    },
    videoHero: {
      line1: "Creamos",
      line1Accent: "productos digitales",
      line2: "que impulsan",
      line2Accent: "tu negocio",
    },
    hero: {
      marquee1: "no solo código ",
      marquee2: "es pura vibra ",
      paragraph:
        "La era del software aburrido terminó. Fusionamos diseño con poder de IA para crear experiencias vivas.",
    },
    services: {
      title: "¿Qué es el",
      titleAccent: "Vibe Coding?",
      subtitle: "(Así construimos más rápido y mejor.)",
      items: [
        { title: "Diseño Premium", desc: "Curamos la estética con intención." },
        { title: "Desarrollo Rápido", desc: "Código con IA entregado en días." },
        { title: "Experiencia Fluida", desc: "Interacciones suaves y agradables." },
        { title: "Alto Rendimiento", desc: "Optimizado para SEO y velocidad." },
        { title: "UI Interactiva", desc: "Micro-interacciones memorables." },
      ],
    },

    portfolio: {
      title: "Trabajos",
      titleAccent: "Selectos",
      viewCase: "Ver Caso",
      projects: [
        {
          name: "Acción Política",
          type: "Consultora Política",
          img: "/assets/project_1.jpg",
          link: "https://ap-liart.vercel.app/",
        },
        {
          name: "Amaury Mogollón",
          type: "Consultor Político – Página Personal",
          img: "/assets/project_2.jpg",
          link: "https://amaury-iota.vercel.app/",
        },
        { name: "Próximamente", type: "Nuevo Proyecto", img: "/assets/project_3.jpg", link: "#" },
        { name: "Próximamente", type: "Nuevo Proyecto", img: "/assets/project_4.jpg", link: "#" },
        { name: "Próximamente", type: "Nuevo Proyecto", img: "/assets/project_5.jpg", link: "#" },
      ],
    },

    faq: {
      title: "VIBE CHECK",
      subtitle: "(Preguntas)",
      items: [
        { q: "¿Necesito suscripción?", a: "No. El código es totalmente tuyo." },
        { q: "¿Cómo actualizo el contenido?", a: "Nos escribes y lo actualizamos en minutos." },
        { q: "¿Es plantilla?", a: "Jamás. Todo es diseño a medida." },
      ],
    },

    pricing: {
      label: "LOS NÚMEROS",
      title: "¿QUIERES UNA WEB ASÍ?",
      subtitle: "Desde",
      price: "$200 USD",
      features: ["Diseño Personalizado", "Arquitectura IA", "Responsive", "Propiedad Total"],
      cta: "Iniciar Proyecto",
    },

    whatsapp: {
      title: "iniciar proyecto",
      desc: "Escanea el código QR para chatear.",
      button: "Chatear desde escritorio",
    },

    footer: {
      title: "no seas",
      titleAccent: "aburrido.",
      socialTitle: "Sigue La Vibra",
      contactTitle: "Contacto",
      legal: "LEGAL",
      privacy: "PRIVACIDAD",
      copy: `© ${currentYear} THAT VIBE Studio`,
    },
  },
};

// CONTEXTO ------------------------------------------------------------------

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "es" : "en"));

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
