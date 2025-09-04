import './App.css'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <nav className="fixed top-0 w-full bg-white shadow-md z-10 px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Shai Kohn</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-500">Sobre mí</a>
          <a href="#projects" className="hover:text-blue-500">Proyectos</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#contact" className="hover:text-blue-500">Contacto</a>
        </div>
      </nav>
      <main className="pt-24">
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App
