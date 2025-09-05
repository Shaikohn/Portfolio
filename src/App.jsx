import './App.css'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import LanguageSwitch from './components/LanguageSwitch';
import { useEffect, useState } from 'react';

function App() {

  const [language, setLanguage] = useState(null);

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
        <div className="space-x-6 flex items-center">
          <LanguageSwitch language={language} setLanguage={setLanguage} />
          <a href="#about" className="hover:text-blue-500"> {language === "spanish" ? "Sobre mí" : "About Me"} </a>
          <a href="#projects" className="hover:text-blue-500"> {language === "spanish" ? "Proyectos" : "Projects"} </a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#contact" className="hover:text-blue-500"> {language === "spanish" ? "Contacto" : "Contact"} </a>
        </div>
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
