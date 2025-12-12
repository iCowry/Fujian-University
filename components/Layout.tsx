import React, { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation, Outlet } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X, Globe, Search } from 'lucide-react';
import ChatWidget from './ChatWidget';
import { useLanguage } from '../contexts/LanguageContext';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900">
      {/* Header */}
      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6 text-white'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center gap-3 z-50">
             <div className={`w-10 h-10 rounded-sm flex items-center justify-center font-serif font-bold text-xl ${isScrolled ? 'bg-fju-secondary text-white' : 'bg-white text-fju-secondary'}`}>
               F
             </div>
             <div className="flex flex-col">
               <span className={`font-serif text-lg font-bold tracking-wide leading-none ${isScrolled ? 'text-fju-secondary' : 'text-white'}`}>
                 福建大学
               </span>
               <span className={`text-[10px] tracking-wider uppercase opacity-80 ${isScrolled ? 'text-fju-primary' : 'text-white'}`}>
                 Fujian University
               </span>
             </div>
          </RouterLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide hover:text-fju-accent transition-colors relative group ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.label[language]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fju-accent transition-all duration-300 group-hover:w-full"></span>
              </RouterLink>
            ))}
          </nav>

          {/* Utilities */}
          <div className={`hidden md:flex items-center gap-4 ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}>
            <button className="hover:text-fju-accent transition-colors flex items-center gap-2" title={t.common.search}>
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleLanguage}
              className="hover:text-fju-accent transition-colors flex items-center gap-1 text-xs font-semibold uppercase"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'zh' ? 'EN' : '中'}</span>
            </button>
            <RouterLink to="/admissions" className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${isScrolled ? 'bg-fju-secondary text-white hover:bg-fju-primary' : 'bg-white text-fju-secondary hover:bg-gray-100'}`}>
              {t.common.apply}
            </RouterLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden z-50 p-2 ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-fju-primary z-40 transform transition-transform duration-300 md:hidden flex flex-col justify-center px-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <nav className="flex flex-col space-y-6">
            {NAV_LINKS.map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                className="text-2xl font-serif text-white/90 hover:text-fju-accent"
              >
                {link.label[language]}
              </RouterLink>
            ))}
            <div className="h-px bg-white/10 my-4"></div>
            <button 
              onClick={toggleLanguage}
              className="text-white/70 flex items-center gap-2 hover:text-white"
            >
              <Globe className="w-5 h-5" /> {language === 'zh' ? 'Switch to English' : '切换到中文'}
            </button>
           </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-fju-primary text-slate-300 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white text-fju-primary rounded-sm flex items-center justify-center font-bold font-serif">F</div>
                <span className="text-xl font-bold font-serif text-white">福建大学</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 opacity-80">
                {t.footer.desc}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{t.footer.academics}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-fju-accent transition-colors">Undergraduate</a></li>
                <li><a href="#" className="hover:text-fju-accent transition-colors">Graduate</a></li>
                <li><a href="#" className="hover:text-fju-accent transition-colors">International Programs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{t.footer.research}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-fju-accent transition-colors">Laboratories</a></li>
                <li><a href="#" className="hover:text-fju-accent transition-colors">Publications</a></li>
                <li><a href="#" className="hover:text-fju-accent transition-colors">Library</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{t.footer.connect}</h4>
              <div className="flex flex-col gap-4">
                 <p className="text-sm">Putian, Fujian, China (Xiuyu District)</p>
                 <a href="mailto:info@fju.edu.cn" className="text-sm hover:text-fju-accent">info@fju.edu.cn</a>
                 <div className="flex gap-4 mt-2">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-fju-accent transition-colors cursor-pointer">W</div>
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-fju-accent transition-colors cursor-pointer">X</div>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
            <p>&copy; {new Date().getFullYear()} Fujian University. {t.footer.rights}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat */}
      <ChatWidget />
    </div>
  );
};

export default Layout;
