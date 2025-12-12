import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { DEPARTMENTS, NEWS_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, User, Newspaper, GraduationCap } from 'lucide-react';

const DepartmentHome: React.FC = () => {
  const { deptId } = useParams<{ deptId: string }>();
  const { language, t } = useLanguage();
  
  const dept = DEPARTMENTS.find(d => d.id === deptId);

  if (!dept) {
    return <Navigate to="/academics" replace />;
  }

  // Filter random news for demo purposes
  const deptNews = NEWS_ITEMS.slice(0, 2);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Department Hero */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={dept.imageUrl} alt={dept.name[language]} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <Link to="/academics" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> {t.dept.back}
          </Link>
          <div className="flex items-center gap-4 mb-4">
             <div className="w-16 h-16 bg-fju-accent text-white rounded-lg flex items-center justify-center font-bold text-2xl font-serif">
                {dept.shortName[language].substring(0, 1)}
             </div>
             <h1 className="text-4xl md:text-6xl font-serif font-bold">{dept.name[language]}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mt-6 leading-relaxed border-l-4 border-fju-accent pl-6">
            {dept.detailedIntro[language]}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
           
           {/* Dean's Message */}
           <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start">
              <div className="shrink-0 w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
                 <User className="w-10 h-10 text-slate-400" />
              </div>
              <div>
                 <h2 className="text-xl font-bold text-slate-800 mb-2">{t.dept.dean}</h2>
                 <p className="text-fju-secondary font-serif text-2xl font-bold mb-4">{dept.dean[language]}</p>
                 <p className="text-slate-600 italic">"Welcome to {dept.shortName[language]}. We are committed to pushing the boundaries of knowledge and nurturing the next generation of leaders."</p>
              </div>
           </section>

           {/* Programs List */}
           <section>
              <h2 className="text-2xl font-bold text-fju-primary mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-fju-accent" /> {t.dept.majors}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dept.majors.map((major) => (
                  <Link 
                    key={major.id} 
                    to={`/academics/${dept.id}/${major.id}`}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-fju-secondary transition-all group"
                  >
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-fju-secondary">{major.name[language]}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2">{major.intro[language]}</p>
                    <div className="mt-4 text-fju-accent text-sm font-bold group-hover:underline">View Program Details &rarr;</div>
                  </Link>
                ))}
              </div>
           </section>

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-fju-primary" /> {t.dept.news}
              </h3>
              <div className="space-y-6">
                {deptNews.map(news => (
                  <div key={news.id} className="group cursor-pointer">
                    <div className="h-32 rounded-lg overflow-hidden mb-3">
                       <img src={news.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="text-xs text-gray-400 mb-1">{news.date}</div>
                    <h4 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-fju-secondary">{news.title[language]}</h4>
                  </div>
                ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default DepartmentHome;
