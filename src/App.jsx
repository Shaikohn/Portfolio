import './App.css'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import LanguageSwitch from './components/LanguageSwitch';
import { useEffect, useState } from 'react';

function App() {

  const [language, setLanguage] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    if(userLanguage.includes('es')) {
      setLanguage('spanish')
    } else {
      setLanguage('english')
    }
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <nav className="fixed top-0 w-full bg-white shadow-md z-10 px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Shai Kohn</h1>
          <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setOpen(!open)}
          >
              {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
              )}
          </button>
          <div className="hidden md:flex space-x-6 items-center">
              <LanguageSwitch language={language} setLanguage={setLanguage} />
              <a href="#about" className="hover:text-blue-500">
                  {language === "spanish" ? "Sobre mí" : "About Me"}
              </a>
              <a href="#projects" className="hover:text-blue-500">
                  {language === "spanish" ? "Proyectos" : "Projects"}
              </a>
              <a href="#skills" className="hover:text-blue-500">Skills</a>
              <a href="#contact" className="hover:text-blue-500">
                  {language === "spanish" ? "Contacto" : "Contact"}
              </a>
          </div>
          {/* Links mobile */}
          {open && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 space-y-4">
                  <LanguageSwitch language={language} setLanguage={setLanguage} />
                  <a href="#about" className="hover:text-blue-500" onClick={() => setOpen(false)}>
                      {language === "spanish" ? "Sobre mí" : "About Me"}
                  </a>
                  <a href="#projects" className="hover:text-blue-500" onClick={() => setOpen(false)}>
                      {language === "spanish" ? "Proyectos" : "Projects"}
                  </a>
                  <a href="#skills" className="hover:text-blue-500" onClick={() => setOpen(false)}>Skills</a>
                  <a href="#contact" className="hover:text-blue-500" onClick={() => setOpen(false)}>
                      {language === "spanish" ? "Contacto" : "Contact"}
                  </a>
              </div>
          )}
      </nav>
      <main className="pt-24">
        <AboutMe language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}

export default App
