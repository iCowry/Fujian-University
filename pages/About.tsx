import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Plane, Train, School } from 'lucide-react';
import InteractiveMap from '../components/InteractiveMap';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
       <div className="container mx-auto px-4 py-16 max-w-5xl">
         
         <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-fju-primary mb-6">{t.about.title}</h1>
            <div className="w-24 h-1 bg-fju-accent mx-auto rounded-full"></div>
         </div>

         {/* Introduction */}
         <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm space-y-8 text-lg leading-relaxed text-slate-700 mb-12">
           <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-fju-accent first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
             {t.about.intro}
           </p>

           <h2 className="text-3xl font-serif font-bold text-fju-primary mt-8">{t.about.visionTitle}</h2>
           <p>
             {t.about.visionDesc}
           </p>

           {/* Infrastructure Section */}
           <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl mt-8">
             <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
               <Train className="w-6 h-6 text-fju-accent" /> {t.about.newEngTitle}
             </h3>
             <p className="text-base text-slate-600">
               {t.about.newEngDesc}
             </p>
           </div>

           <blockquote className="border-l-4 border-fju-accent pl-6 py-2 italic text-slate-500 rounded-r-lg">
             "{t.about.quote}"
             <footer className="text-sm font-bold text-slate-900 mt-2">— {t.about.quoteAuthor}</footer>
           </blockquote>
         </div>

         {/* Interactive Map */}
         <div className="mb-20">
            <InteractiveMap />
         </div>

         {/* Campus Visuals */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group relative rounded-2xl overflow-hidden h-64">
               <img src="https://picsum.photos/600/800?random=30" alt="Putian Main Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-fju-primary/90 to-transparent flex flex-col justify-end p-6">
                 <div className="flex items-center gap-2 text-fju-accent font-bold text-sm mb-1">
                   <MapPin className="w-4 h-4" /> {language === 'zh' ? '本部' : 'Main'}
                 </div>
                 <h3 className="text-white text-xl font-bold">{language === 'zh' ? '莆田秀屿' : 'Putian Xiuyu'}</h3>
                 <p className="text-gray-300 text-sm mt-2">{language === 'zh' ? '理工科核心 · 妈祖机场' : 'STEM Core · Mazu Airport'}</p>
               </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden h-64">
               <img src="https://picsum.photos/600/800?random=31" alt="Xiamen Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-fju-primary/90 to-transparent flex flex-col justify-end p-6">
                 <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-1">
                   <School className="w-4 h-4" /> {language === 'zh' ? '合作校区' : 'Co-Op'}
                 </div>
                 <h3 className="text-white text-xl font-bold">{language === 'zh' ? '厦门校区' : 'Xiamen Campus'}</h3>
                 <p className="text-gray-300 text-sm mt-2">{language === 'zh' ? '医学商科 · 联手厦大' : 'Med & Business · w/ XMU'}</p>
               </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden h-64">
               <img src="https://picsum.photos/600/800?random=32" alt="Fuzhou Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-fju-primary/90 to-transparent flex flex-col justify-end p-6">
                 <div className="flex items-center gap-2 text-pink-400 font-bold text-sm mb-1">
                   <School className="w-4 h-4" /> {language === 'zh' ? '人文校区' : 'Arts'}
                 </div>
                 <h3 className="text-white text-xl font-bold">{language === 'zh' ? '福州校区' : 'Fuzhou Campus'}</h3>
                 <p className="text-gray-300 text-sm mt-2">{language === 'zh' ? '人文社科 · 省会底蕴' : 'Humanities · Provincial Capital'}</p>
               </div>
            </div>
         </div>

         {/* Stats */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
               <div className="text-4xl font-bold text-fju-accent mb-2">2024</div>
               <div className="text-sm uppercase tracking-wide font-bold text-slate-500">{t.about.founded}</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
               <div className="flex items-center justify-center gap-4 text-4xl font-bold text-fju-accent mb-2">
                 <Plane className="w-8 h-8" /> 
                 <span className="text-slate-300">|</span>
                 <Train className="w-8 h-8" />
               </div>
               <div className="text-sm uppercase tracking-wide font-bold text-slate-500">{language === 'zh' ? '空铁联运' : 'Connected Hub'}</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
               <div className="text-4xl font-bold text-fju-accent mb-2">3</div>
               <div className="text-sm uppercase tracking-wide font-bold text-slate-500">{t.about.focus}</div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default About;
