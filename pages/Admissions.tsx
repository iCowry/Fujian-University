import React from 'react';
import { CheckCircle2, Download, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Admissions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-white">
       {/* Hero */}
       <div className="relative py-24 bg-fju-secondary overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
             <h1 className="text-5xl font-serif font-bold text-white mb-6">{t.admissions.heroTitle}</h1>
             <p className="text-xl text-blue-100 max-w-2xl mx-auto">
               {t.admissions.heroDesc}
             </p>
          </div>
       </div>

       <div className="container mx-auto px-4 py-16">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           
           {/* Main Content */}
           <div className="lg:col-span-2 space-y-12">
             <section>
               <h2 className="text-3xl font-bold text-fju-primary mb-6">{t.admissions.processTitle}</h2>
               <p className="text-slate-600 mb-6 leading-relaxed">
                 {t.admissions.processDesc}
               </p>
               
               <div className="space-y-6">
                 {t.admissions.steps.map((step, idx) => (
                   <div key={idx} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                     <div className="w-10 h-10 shrink-0 bg-fju-accent/10 text-fju-accent rounded-full flex items-center justify-center font-bold">
                       {idx + 1}
                     </div>
                     <div>
                       <h3 className="font-bold text-slate-800 mb-1">{step.title}</h3>
                       <p className="text-sm text-slate-600">{step.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </section>

             <section>
                <h2 className="text-3xl font-bold text-fju-primary mb-6">{t.admissions.reqTitle}</h2>
                <div className="bg-slate-50 p-8 rounded-2xl">
                   <ul className="space-y-4">
                     {t.admissions.reqs.map((req, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                         <span className="text-slate-700">{req}</span>
                       </li>
                     ))}
                   </ul>
                </div>
             </section>
           </div>

           {/* Sidebar */}
           <div className="space-y-8">
              <div className="bg-fju-primary text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-fju-accent" /> {t.admissions.datesTitle}
                </h3>
                <ul className="space-y-6 relative border-l border-white/20 ml-2 pl-6">
                  {[
                    { date: '10/15', event: 'Applications Open' },
                    { date: '12/01', event: 'Early Action' },
                    { date: '01/15', event: 'Regular Decision' },
                    { date: '05/01', event: 'Decision Day' }
                  ].map((item, idx) => (
                    <li key={idx} className="relative">
                      <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-fju-accent rounded-full ring-4 ring-fju-primary"></span>
                      <span className="block font-bold text-fju-accent">{item.date}</span>
                      <span className="text-sm opacity-80">{item.event}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-slate-800 mb-4">{t.admissions.resourcesTitle}</h3>
                <div className="space-y-3">
                  {t.admissions.resources.map((r, i) => (
                    <a key={i} href="#" className="flex items-center justify-between p-3 bg-white rounded-lg text-sm text-slate-600 hover:text-fju-secondary hover:shadow-sm transition-all border border-gray-100">
                      <span>{r}</span>
                      <Download className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
           </div>

         </div>
       </div>
    </div>
  );
};

export default Admissions;
