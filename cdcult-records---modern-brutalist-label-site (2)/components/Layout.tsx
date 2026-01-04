
import React, { useState, useEffect } from 'react';
import { Language, Translation } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  onLangToggle: () => void;
  t: Translation;
  onOpenCabinet: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, onLangToggle, t, onOpenCabinet }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4 ${
          isScrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter uppercase font-mono">
            CDCULT RECORDS
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-mono opacity-60">
               <a href="#about" className="hover:opacity-100 transition-opacity">{t.navAbout}</a>
               <a href="#faq" className="hover:opacity-100 transition-opacity">{t.navFaq}</a>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={onOpenCabinet}
                className="px-4 py-1.5 border border-white/20 text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all font-mono"
              >
                {t.navCabinet}
              </button>
              <button 
                onClick={onLangToggle}
                className="w-10 h-8 flex items-center justify-center border border-white/20 text-xs uppercase tracking-widest hover:bg-white/10 transition-all font-mono"
              >
                {lang === 'ru' ? 'EN' : 'RU'}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-24">
        {children}
      </main>

      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tighter uppercase font-mono">CDCULT RECORDS</div>
            <div className="flex gap-4 text-xs uppercase tracking-widest opacity-50 font-mono">
              <a href="https://t.me/cdcult" target="_blank" className="hover:opacity-100 transition-opacity">Telegram</a>
              <a href="https://vk.com/cdcult" target="_blank" className="hover:opacity-100 transition-opacity">VK</a>
              <a href="https://www.tiktok.com/@cdcult_records" target="_blank" className="hover:opacity-100 transition-opacity">TikTok</a>
            </div>
          </div>
          
          <div className="text-right space-y-2 opacity-40 text-xs font-mono uppercase tracking-widest">
            <p>{t.footerText}</p>
            <p>cdcult@bk.ru | cdcult.ru</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
