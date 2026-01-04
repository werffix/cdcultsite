
import React, { useState, useCallback } from 'react';
import Layout from './components/Layout';
import Modal from './components/Modal';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ru');
  const [isCabinetOpen, setIsCabinetOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'ru' ? 'en' : 'ru');
  }, []);

  const scrollToJoin = () => {
    document.getElementById('join-cult')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Split hero title to style parts individually
  const titleParts = t.heroTitle.split('\n');

  // Helper to italicize the last word of the ready title
  const renderReadyTitle = () => {
    const words = t.readyTitle.split(' ');
    const lastWord = words.pop();
    return (
      <>
        {words.join(' ')} <span className="italic">{lastWord}</span>
      </>
    );
  };

  return (
    <Layout 
      lang={lang} 
      onLangToggle={toggleLang} 
      t={t} 
      onOpenCabinet={() => setIsCabinetOpen(true)}
    >
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 mb-8 brutalist-border text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono opacity-60">
            Independent Distribution
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.85]">
            <span className="italic block mb-2">{titleParts[0]}</span>
            <span className="block">{titleParts[1]}</span>
          </h1>
          <p className="text-lg md:text-xl font-light opacity-70 max-w-2xl mb-12 leading-relaxed">
            {t.heroTagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToJoin}
              className="px-8 py-4 bg-white text-black text-sm uppercase tracking-widest font-black hover:bg-opacity-90 transition-all"
            >
              {t.btnArtist}
            </button>
            <a 
              href="https://music.yandex.ru/label/5776139/" 
              target="_blank" 
              className="px-8 py-4 brutalist-border text-sm uppercase tracking-widest font-black hover:bg-white/5 transition-all"
            >
              {t.btnReleases}
            </a>
          </div>
        </div>

        {/* Decor */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.03] select-none pointer-events-none hidden lg:block">
           <div className="text-[30rem] font-black tracking-tighter leading-none uppercase font-mono">
             CULT
           </div>
        </div>
      </section>

      {/* Marquee Release Bar */}
      <div className="w-full py-4 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="marquee font-mono text-[10px] uppercase tracking-[0.5em] opacity-30">
          SPOTIFY • APPLE MUSIC • YOUTUBE MUSIC • YANDEX MUSIC • VK MUSIC • TIKTOK • DEEZER • TIDAL • BEATPORT • SHAZAM •&nbsp;
          SPOTIFY • APPLE MUSIC • YOUTUBE MUSIC • YANDEX MUSIC • VK MUSIC • TIKTOK • DEEZER • TIDAL • BEATPORT • SHAZAM •&nbsp;
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="px-6 py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] font-mono opacity-40 mb-12">
              / {t.aboutTitle}
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12">
              {t.aboutText}
            </p>
            <ul className="space-y-6">
              {t.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-xs md:text-sm opacity-80 font-mono uppercase tracking-tight">
                  <span className="w-1.5 h-1.5 bg-white block rotate-45"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square brutalist-border overflow-hidden group">
            <img 
              src="https://picsum.photos/1000/1000?grayscale&random=1" 
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
              alt="Studio gear" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-32 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.4em] font-mono opacity-40 mb-16 text-center">
            / {t.statsTitle}
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 text-center">
            <div className="space-y-2">
              <div className="text-6xl font-black tracking-tighter">24/7</div>
              <div className="text-[10px] uppercase tracking-widest font-mono opacity-40">{t.statLabel1}</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-black tracking-tighter">100+</div>
              <div className="text-[10px] uppercase tracking-widest font-mono opacity-40">{t.statLabel2}</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-black tracking-tighter">1M+</div>
              <div className="text-[10px] uppercase tracking-widest font-mono opacity-40">{t.statLabel3}</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="px-6 py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.4em] font-mono opacity-40 mb-20 text-center">
            / {t.howTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.steps.map((step, idx) => (
              <div key={idx} className="p-8 brutalist-border relative group hover:bg-white hover:text-black transition-all duration-300 flex flex-col justify-between h-full">
                <div className="text-4xl font-mono font-black opacity-20 mb-12 group-hover:opacity-100 transition-opacity">
                  {step.num}
                </div>
                <div className="text-lg font-bold leading-relaxed uppercase tracking-tighter">
                  {step.text}
                  {step.link && (
                    <a 
                      href={step.link} 
                      className="underline underline-offset-4 font-black hover:no-underline"
                    >
                      {step.linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-32 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.4em] font-mono opacity-40 mb-20 text-center">
            / {t.faqTitle}
          </h2>
          <div className="space-y-12">
            {t.faqItems.map((item, idx) => (
              <div key={idx} className="group">
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter mb-4 flex items-start gap-4">
                  <span className="text-xs font-mono opacity-20 mt-1">Q:</span>
                  {item.q}
                </h3>
                <div className="pl-8 opacity-60 leading-relaxed text-sm md:text-base border-l border-white/10 ml-1 font-mono">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="join-cult" className="px-6 py-40 text-center bg-[#050505] text-white border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
            {renderReadyTitle()}
          </h2>
          <p className="text-lg md:text-xl font-medium opacity-80 mb-12 uppercase tracking-wide">
            {t.readyDesc}
          </p>
          <button 
            onClick={() => setIsCabinetOpen(true)}
            className="px-12 py-5 bg-white text-black text-sm uppercase tracking-widest font-black hover:bg-opacity-90 transition-all"
          >
            {t.btnArtist}
          </button>
        </div>
      </section>

      {/* Modal */}
      <Modal 
        isOpen={isCabinetOpen} 
        onClose={() => setIsCabinetOpen(false)} 
        title={t.cabinet}
      >
        <p className="opacity-60 text-xs font-mono mb-8 uppercase tracking-widest leading-loose">
          {lang === 'ru' 
            ? 'Перейдите в наше веб-приложение для управления вашими релизами и просмотра статистики.' 
            : 'Access our web dashboard to manage your releases and view detailed analytics.'}
        </p>
        <a 
          href="https://cdcult.lovable.app" 
          className="block w-full py-4 bg-white text-black uppercase font-black tracking-widest hover:opacity-90 transition-opacity"
        >
          {lang === 'ru' ? 'Вход' : 'Sign In'}
        </a>
      </Modal>
    </Layout>
  );
};

export default App;
