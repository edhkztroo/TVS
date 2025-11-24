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
          desc: "We curate the aesthetic. No generic templates, just pure visual strategy. Every pixel is placed with intention to communicate your brand's unique voice and stand out in a crowded market."
        },
        {
          title: 'Fast Development',
          desc: "AI-powered coding ensures speed of light execution and clean architecture. We ship in days, not months."
        },
        {
          title: 'Fluid Experience',
          desc: "Responsive, buttery smooth interactions that keep users engaged."
        },
        {
          title: 'High Performance',
          desc: "SEO-optimized and lightning fast load times for better conversion."
        },
        {
          title: 'Interactive UI',
          desc: "Elements that react to user behavior, making every experience memorable."
        }
      ]
    },
    portfolio: {
      title: "Selected",
      titleAccent: "Works",
      viewCase: "View Case",
      projects: [
        { 
          name: "Acción Política",
          type: "Landing Page – Vibe Coding",
          img: "/assets/project_1.jpg",
          link: "https://ap-liart.vercel.app/"
        },
        { 
          name: "Amaury Mogollón",
          type: "Landing Page – Vibe Coding",
          img: "/assets/project_2.jpg",
          link: "https://amaury-iota.vercel.app/"
        },
        { 
          name: "Coming Soon",
          type: "New Project",
          img: "/assets/project_3.jpg",
          link: "#"
        },
        { 
          name: "Coming Soon",
          type: "New Project",
          img: "/assets/project_4.jpg",
          link: "#"
        },
        { 
          name: "Coming Soon",
          type: "New Project",
          img: "/assets/project_5.jpg",
          link: "#"
        }
      ]
    },
    faq: {
      title: "VIBE CHECK",
      subtitle: "(FAQ)",
      items: [
        {
          q: "Do I need a monthly subscription?",
          a: "No. Once we deliver, the code is 100% yours."
        },
        {
          q: "How do I update the content?",
          a: "We build static unbreakable sites. For updates, just message us."
        },
        {
          q: "Is this a template?",
          a: "No. Everything is designed from scratch."
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
      desc: "Scan the QR code to chat with us.",
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

  // ----------------------------------------------------------
  // ESPAÑOL
  // ----------------------------------------------------------

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
      paragraph: "La era del software aburrido terminó. Fusionamos intuición de diseño con el poder de la IA."
    },
    services: {
      title: "¿Qué es el",
      titleAccent: "Vibe Coding?",
      subtitle: "(Así construimos más rápido y mejor.)",
      items: [
        {
          title: 'Diseño Premium',
          desc: "Curamos la estética con estrategia visual."
        },
        {
          title: 'Desarrollo Rápido',
          desc: "Código potenciado por IA entregado en días."
        },
        {
          title: 'Experiencia Fluida',
          desc: "Interacciones suaves y responsivas."
        },
        {
          title: 'Alto Rendimiento',
          desc: "Optimizado para SEO y velocidad."
        },
        {
          title: 'UI Interactiva',
          desc: "Micro-interacciones para una experiencia memorable."
        }
      ]
    },
    portfolio: {
      title: "Trabajos",
      titleAccent: "Selectos",
      viewCase: "Ver Caso",
      projects: [
        { 
          name: "Acción Política",
          type: "Landing Page – Vibe Coding",
          img: "/assets/project_1.jpg",
          link: "https://ap-liart.vercel.app/"
        },
        { 
          name: "Amaury Mogollón",
          type: "Landing Page – Vibe Coding",
          img: "/assets/project_2.jpg",
          link: "https://amaury-iota.vercel.app/"
        },
        { 
          name: "Próximamente",
          type: "Nuevo Proyecto",
          img: "/assets/project_3.jpg",
          link: "#"
        },
        { 
          name: "Próximamente",
          type: "Nuevo Proyecto",
          img: "/assets/project_4.jpg",
          link: "#"
        },
        { 
          name: "Próximamente",
          type: "Nuevo Proyecto",
          img: "/assets/project_5_
