import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { DEPARTMENTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, BookOpen, MapPin, Microscope, Briefcase, UserCheck } from 'lucide-react';

const MajorDetail: React.FC = () => {
  const { deptId, majorId } = useParams<{ deptId: string; majorId: string }>();
  const { language, t } = useLanguage();

  const dept = DEPARTMENTS.find(d => d.id === deptId);
  const major = dept?.majors.find(m => m.id === majorId);

  if (!dept || !major) {
    return <Navigate to="/academics" replace />;
  }

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
           <Link to={`/academics/${deptId}`} className="inline-flex items-center text-slate-500 hover:text-fju-primary mb-6 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> {t.major.back}
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
             <div>
               <span className="text-fju-accent font-bold tracking-wider uppercase text-sm mb-2 block">{dept.name[language]}</span>
               <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{major.name[language]}</h1>
               <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                 {major.intro[language]}
               </p>
             </div>
             <div className="hidden md:block">
                <div className="bg-fju-secondary text-white px-6 py-4 rounded-xl text-center">
                   <div className="text-xs uppercase opacity-70 mb-1">Degree Awarded</div>
                   <div className="font-bold text-lg">Bachelor of Science/Eng</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Curriculum Roadmap */}
        <section>
          <h2 className="text-2xl font-bold text-fju-primary mb-8 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-fju-accent" /> {t.major.curriculum}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             {major.curriculumRoadmap.map((year, index) => (
               <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                     <span className="text-6xl font-bold">{index + 1}</span>
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-lg font-bold text-fju-secondary mb-1">{year.year[language]}</h3>
                     <div className="flex items-center gap-1 text-xs font-bold text-gray-400 uppercase mb-4">
                        <MapPin className="w-3 h-3" /> {year.location[language]}
                     </div>
                     <ul className="space-y-2">
                       {year.courses.map((course, i) => (
                         <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-fju-accent mt-1.5 shrink-0"></span>
                           {course[language]}
                         </li>
                       ))}
                     </ul>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* Research & Mentors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                 <Microscope className="w-5 h-5 text-blue-500" /> {t.major.research}
              </h2>
              <div className="flex flex-wrap gap-3">
                 {major.researchAreas.map((area, i) => (
                   <span key={i} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-bold text-sm">
                     {area[language]}
                   </span>
                 ))}
              </div>
           </section>

           <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                 <UserCheck className="w-5 h-5 text-green-500" /> {t.major.mentors}
              </h2>
              <div className="flex flex-wrap gap-3">
                 {major.mentors.map((mentor, i) => (
                   <span key={i} className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-bold text-sm">
                     {mentor[language]}
                   </span>
                 ))}
              </div>
           </section>
        </div>

        {/* Career Paths */}
        <section>
          <h2 className="text-2xl font-bold text-fju-primary mb-8 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-fju-accent" /> {t.major.career}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
             {major.careers.map((career, i) => (
               <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-fju-secondary transition-colors">
                  <div className="w-12 h-12 mx-auto bg-fju-secondary/10 text-fju-secondary rounded-full flex items-center justify-center mb-4">
                     <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800">{career[language]}</h3>
               </div>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default MajorDetail;
