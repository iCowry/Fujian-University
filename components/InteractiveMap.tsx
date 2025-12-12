import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Train, Building2, Plane } from 'lucide-react';

type LocationKey = 'fuzhou' | 'putian' | 'xiamen';

const InteractiveMap: React.FC = () => {
  const { t } = useLanguage();
  const [activeLocation, setActiveLocation] = useState<LocationKey>('putian');

  const locations: Record<LocationKey, { top: string; left: string; color: string }> = {
    fuzhou: { top: '20%', left: '50%', color: '#ec4899' }, // Pink for Arts
    putian: { top: '50%', left: '45%', color: '#d97706' }, // Amber for Main
    xiamen: { top: '80%', left: '35%', color: '#3b82f6' }  // Blue for Med/Biz
  };

  const activeData = t.about.locations[activeLocation];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row h-[600px]">
      
      {/* Map Area */}
      <div className="relative w-full lg:w-3/5 bg-slate-900 h-full overflow-hidden group">
        {/* Abstract Map Background */}
        <div className="absolute inset-0 opacity-20">
           <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none">
              <defs>
                 <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                 </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>

        {/* Coastal/Land Shape (Stylized) */}
        <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-slate-800/50 skew-x-12 blur-3xl translate-x-10"></div>

        {/* Connections (Light Rail) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
           {/* Line connecting Fuzhou to Putian to Xiamen */}
           <path 
             d="M 200 120 Q 190 200 180 300 T 140 480" 
             fill="none" 
             stroke="#94a3b8" 
             strokeWidth="2" 
             strokeDasharray="4 4"
             className="opacity-50"
           />
           {/* Active Line Segment highlighting */}
           <path 
             d={activeLocation === 'fuzhou' ? "M 200 120 L 200 120" : activeLocation === 'putian' ? "M 200 120 Q 190 200 180 300" : "M 200 120 Q 190 200 180 300 T 140 480"}
             fill="none" 
             stroke="#d97706" 
             strokeWidth="3"
             className="transition-all duration-1000 ease-in-out"
           />
        </svg>

        {/* Location Markers */}
        {Object.entries(locations).map(([key, pos]) => (
           <button
             key={key}
             onClick={() => setActiveLocation(key as LocationKey)}
             className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 group/marker focus:outline-none transition-all duration-500`}
             style={{ top: pos.top, left: pos.left }}
           >
              {/* Pulse effect */}
              <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${activeLocation === key ? 'bg-white' : 'bg-transparent'}`}></div>
              
              {/* Core Dot */}
              <div 
                className={`relative w-6 h-6 rounded-full border-4 shadow-lg transition-transform duration-300 ${activeLocation === key ? 'scale-125 bg-white border-fju-accent' : 'bg-slate-900 border-slate-500 group-hover/marker:scale-110'}`}
                style={{ borderColor: activeLocation === key ? pos.color : undefined }}
              ></div>

              {/* Label */}
              <div className={`absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-bold tracking-wider transition-all duration-300 ${activeLocation === key ? 'text-white translate-x-2' : 'text-slate-500 opacity-60'}`}>
                 {t.about.locations[key as LocationKey].name.split('(')[0]}
              </div>
           </button>
        ))}

        {/* Legend / Overlay */}
        <div className="absolute bottom-6 left-6 z-20">
           <div className="flex items-center gap-2 text-white/80 text-xs font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
              <Train className="w-3 h-3" /> FJU Light Rail Network
           </div>
        </div>
      </div>

      {/* Detail Pane */}
      <div className="w-full lg:w-2/5 p-8 bg-white flex flex-col justify-center relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fju-primary to-fju-secondary"></div>
         
         <div className="mb-6">
            <h3 className="text-sm font-bold text-fju-accent uppercase tracking-widest mb-2">{t.about.mapTitle}</h3>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 transition-all duration-300">
               {activeData.name}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
               {activeData.desc}
            </p>
         </div>

         <div className="space-y-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-gray-100 pb-2">
               {t.about.mapFacilities}
            </h4>
            <ul className="space-y-4">
               {activeData.landmarks.map((landmark, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                     <div className={`p-2 rounded-lg ${i === 1 ? 'bg-amber-100 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                        {landmark.includes('机场') || landmark.includes('Airport') ? <Plane className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
                     </div>
                     <span className="font-medium">{landmark}</span>
                  </li>
               ))}
            </ul>
         </div>

         <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400 italic">
               * {t.about.mapDesc}
            </p>
         </div>
      </div>

    </div>
  );
};

export default InteractiveMap;
