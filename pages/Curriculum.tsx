import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const Curriculum: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-fju-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">{t.curriculum.title}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t.curriculum.subtitle}
          </p>
        </div>
      </div>

      {/* 2+2 Model Diagram */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-fju-primary mb-12 text-center">{t.curriculum.modelTitle}</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
          {/* Phase 1 */}
          <div className="flex-1 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-3xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <BookOpen className="w-32 h-32 text-fju-primary" />
             </div>
             <div className="relative z-10">
               <span className="inline-block bg-fju-primary text-white px-4 py-1 rounded-full text-sm font-bold mb-4">{t.curriculum.years12}</span>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">{language === 'zh' ? '通识书院教育' : 'General Education'}</h3>
               <div className="flex items-center gap-2 text-fju-accent font-bold text-sm mb-4">
                 <MapPin className="w-4 h-4" /> {language === 'zh' ? '莆田本部 · 严复书院' : 'Putian Main Campus'}
               </div>
               <p className="text-slate-600 leading-relaxed">
                 {t.curriculum.years12Desc}
               </p>
             </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center text-slate-300">
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>

          {/* Phase 2 */}
          <div className="flex-1 bg-gradient-to-br from-fju-secondary/5 to-white border-2 border-fju-secondary/20 rounded-3xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Briefcase className="w-32 h-32 text-fju-secondary" />
             </div>
             <div className="relative z-10">
               <span className="inline-block bg-fju-secondary text-white px-4 py-1 rounded-full text-sm font-bold mb-4">{t.curriculum.years34}</span>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">{language === 'zh' ? '专业深度研学' : 'Specialized Research'}</h3>
               <div className="flex items-center gap-2 text-fju-secondary font-bold text-sm mb-4">
                 <MapPin className="w-4 h-4" /> {language === 'zh' ? '莆田 / 厦门 / 福州' : 'Putian / Xiamen / Fuzhou'}
               </div>
               <p className="text-slate-600 leading-relaxed">
                 {t.curriculum.years34Desc}
               </p>
             </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-fju-primary mb-12 text-center">{t.curriculum.benchmarkTitle}</h2>
          
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
                    {t.curriculum.columns.map((col, idx) => (
                      <th key={idx} className="p-5 font-bold border-b border-gray-200">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {t.curriculum.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5 font-bold text-fju-primary">{row.name}</td>
                      <td className="p-5 text-fju-accent font-bold bg-fju-accent/5">{row.fju}</td>
                      <td className="p-5 text-slate-500">{row.mit}</td>
                      <td className="p-5 text-slate-500">{row.tsinghua}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.curriculum.features.map((feature, idx) => (
              <div key={idx} className="text-center p-6">
                 <div className="w-16 h-16 mx-auto bg-fju-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-fju-primary/20">
                   {idx === 0 ? <GraduationCap className="w-8 h-8" /> : idx === 1 ? <BookOpen className="w-8 h-8" /> : <Briefcase className="w-8 h-8" />}
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                 <p className="text-slate-600">
                   {feature.desc}
                 </p>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Curriculum;
