import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Battery, Cpu, Anchor, Network, ArrowRight } from 'lucide-react';

const Research: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (key: string) => {
    switch (key) {
      case 'energy': return <Battery className="w-8 h-8 text-green-500" />;
      case 'chips': return <Cpu className="w-8 h-8 text-blue-500" />;
      case 'marine': return <Anchor className="w-8 h-8 text-cyan-500" />;
      case 'digital': return <Network className="w-8 h-8 text-purple-500" />;
      default: return <Cpu className="w-8 h-8" />;
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-fju-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-serif font-bold mb-6">{t.research.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {t.research.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(t.research.areas).map(([key, area]: [string, any], index) => (
            <div key={key} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-slate-100 transition-colors">
                   {getIcon(key)}
                </div>
                <span className="bg-fju-secondary/10 text-fju-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {area.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-fju-primary transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {area.desc}
              </p>
              
              <a href="#" className="inline-flex items-center text-fju-accent font-bold hover:gap-2 transition-all">
                {t.disciplines.learnMore} <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Lab Showcase */}
        <div className="mt-20">
           <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-2xl">
             <img src="https://picsum.photos/1600/900?random=50" alt="Advanced Lab" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-r from-fju-primary/90 to-transparent flex flex-col justify-center p-12 max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">福建省未来科技实验室</h2>
                <p className="text-gray-300 text-lg mb-8">
                  依托莆田秀屿港与妈祖机场，我们建设了全省最大的产学研一体化基地。从光伏玻璃到深海采矿，这里是未来技术的孵化器。
                </p>
                <button className="self-start bg-fju-accent text-white px-8 py-3 rounded-full font-bold hover:bg-amber-500 transition-colors">
                   加入科研团队
                </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
