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
