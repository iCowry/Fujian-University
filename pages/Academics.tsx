import React from 'react';
import { DEPARTMENTS } from '../constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Academics: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-fju-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-6">{t.academics.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {t.academics.subtitle}
          </p>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-12">
          {DEPARTMENTS.map((dept, index) => (
            <div 
              key={dept.id} 
              className={`flex flex-col md:flex-row gap-10 items-stretch bg-white rounded-3xl p-8 shadow-sm border border-gray-100 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 min-h-[300px] rounded-2xl overflow-hidden relative group">
                <img 
                  src={dept.imageUrl} 
                  alt={dept.name[language]} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-fju-primary/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
                 <Link to={`/academics/${dept.id}`} className="hover:text-fju-secondary transition-colors">
                    <h2 className="text-3xl font-bold text-fju-primary mb-4">{dept.name[language]}</h2>
                 </Link>
                 
                 <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                   {dept.description[language]}
                 </p>
                 
                 <div className="mb-8 w-full">
                   <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">{t.academics.keyMajors}</h4>
                   <div className="flex flex-wrap gap-3">
                     {dept.majors.slice(0, 4).map((major, i) => (
                       <Link 
                         key={i} 
                         to={`/academics/${dept.id}/${major.id}`}
                         className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-sm hover:bg-fju-secondary hover:text-white hover:border-fju-secondary transition-all cursor-pointer shadow-sm active:scale-95 text-left"
                       >
                         {major.name[language]}
                       </Link>
                     ))}
                   </div>
                 </div>

                 <Link to={`/academics/${dept.id}`} className="flex items-center gap-2 text-fju-secondary font-bold hover:text-fju-primary transition-colors group text-lg">
                   {t.academics.visitSite} <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                 </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;
