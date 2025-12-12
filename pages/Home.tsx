import React from 'react';
import { ArrowRight, Cpu, Microscope, BookOpen } from 'lucide-react';
import { NEWS_ITEMS, STATS } from '../constants';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=100" 
            alt="FJU Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fju-primary/90 to-fju-secondary/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white mt-16">
          <h2 className="text-fju-accent font-bold tracking-widest uppercase mb-4 animate-in slide-in-from-bottom-5 duration-700">
            {t.hero.subtitle}
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight animate-in slide-in-from-bottom-8 duration-1000">
            {t.hero.titleStart}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{t.hero.titleEnd}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200 animate-in slide-in-from-bottom-10 duration-1000 delay-100">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-12 duration-1000 delay-200">
             <Link to="/academics" className="px-8 py-4 bg-fju-accent hover:bg-amber-500 text-white rounded-full font-bold transition-transform hover:scale-105 shadow-lg shadow-amber-900/20">
               {t.hero.ctaAcademics}
             </Link>
             <Link to="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-bold transition-all">
               {t.hero.ctaAbout}
             </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white relative -mt-10 mx-4 md:mx-10 lg:mx-20 rounded-t-3xl shadow-2xl z-20">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
               {STATS.map((stat, idx) => (
                 <div key={idx} className="p-4 group cursor-default">
                    <h3 className="text-4xl md:text-5xl font-bold text-fju-secondary mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</h3>
                    <p className="font-bold text-gray-800 uppercase tracking-wide text-sm mb-1">{stat.label[language]}</p>
                    <p className="text-gray-500 text-xs">{stat.description[language]}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Disciplines Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h4 className="text-fju-accent font-bold uppercase tracking-wider mb-2">{t.disciplines.tag}</h4>
              <h2 className="text-4xl font-serif font-bold text-fju-primary">{t.disciplines.title}</h2>
            </div>
            <Link to="/academics" className="hidden md:flex items-center gap-2 text-fju-secondary font-bold hover:gap-3 transition-all">
              {t.disciplines.viewAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Yan Fu Honors College */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 text-fju-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-fju-secondary group-hover:text-white transition-colors">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t.disciplines.feature1Title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t.disciplines.feature1Desc}
              </p>
              <Link to="/academics" className="text-fju-accent font-bold text-sm hover:underline">{t.disciplines.learnMore} &rarr;</Link>
            </div>

            {/* Feature 2: Chen Jingrun School */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
               <div className="w-14 h-14 bg-amber-50 text-fju-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-fju-accent group-hover:text-white transition-colors">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t.disciplines.feature2Title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t.disciplines.feature2Desc}
              </p>
              <Link to="/academics" className="text-fju-accent font-bold text-sm hover:underline">{t.disciplines.learnMore} &rarr;</Link>
            </div>

            {/* Feature 3: Hou Debang School */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
               <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Microscope className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t.disciplines.feature3Title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t.disciplines.feature3Desc}
              </p>
              <Link to="/academics" className="text-fju-accent font-bold text-sm hover:underline">{t.disciplines.learnMore} &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <h2 className="text-4xl font-serif font-bold text-fju-primary mb-12 text-center">{t.news.title}</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {NEWS_ITEMS.map((news) => (
                <article key={news.id} className="flex flex-col group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-6 h-64">
                    <img src={news.imageUrl} alt={news.title[language]} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-fju-secondary uppercase">
                      {news.category[language]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-2">{news.date}</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-fju-secondary transition-colors line-clamp-2">
                      {news.title[language]}
                    </h3>
                    <p className="text-slate-600 leading-relaxed line-clamp-3">
                      {news.summary[language]}
                    </p>
                  </div>
                </article>
              ))}
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-fju-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fju-accent/20 rounded-full blur-3xl -ml-10 -mb-10"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            {t.cta.desc}
          </p>
          <Link to="/admissions" className="inline-block bg-white text-fju-primary font-bold py-4 px-10 rounded-full hover:bg-fju-accent hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">
             {t.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
