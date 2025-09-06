import ztreamgames from  '../assets/projects/Ztream.png'
import cuevanix from '../assets/projects/Cuevanix.png';
import deltabet from '../assets/projects/Deltabet.png';
import pokemon from '../assets/projects/Pokemon.png';
import preguntate from '../assets/projects/Preguntate.png';
import feetsies from '../assets/projects/Feetsies.png';
import pawesomedogs from '../assets/projects/PawesomeDogs.png';

function Projects({language}) {
    return (
        <section id="projects" className="px-8 bg-white">
            <h2 className="text-3xl font-semibold mb-8 mt-4 text-center"> {language === "spanish" ? "Proyectos Destacados" : "Main projects"} </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="bg-gray-100 p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition">
                    <img 
                        src={ztreamgames} 
                        alt="ZtreamGames" 
                        className="rounded mb-4 w-full h-56 object-cover" 
                    />
                    <h3 className="text-xl font-bold mb-2"> ZtreamGames (2022) – {language === "spanish" ? "Proyecto Grupal Académico" : "Academic Group Project"} </h3>
                    <p className="text-sm text-gray-600 mb-4">
                        {language === "spanish" ? <>
                        Proyecto realizado en equipo bajo metodología SCRUM durante mi formación en Soy Henry. Desarrollamos una tienda online de videojuegos con funcionalidades sociales y administrativas.
                        <br />
                        👨‍💻 Mi rol:
                        <br />
                        - Implementé funcionalidades clave en el Front-End y el Back-End.
                        <br />
                        - Participé en la integración de sistema de usuarios, catálogo de productos y panel de administración.
                        <br />
                        - Colaboré en la optimización de consultas y manejo de base de datos.
                        </> : 
                        <>
                        Team project developed under the SCRUM methodology during my training at Soy Henry. We built an online video game store with social and administrative features.
                        <br />
                        👨‍💻 My role:
                        <br />
                        - Implemented key functionalities in both Front-End and Back-End.
                        <br />
                        - Contributed to the integration of the user system, product catalog, and admin panel.
                        <br />
                        - Collaborated in optimizing queries and database management.
                        </>
                        }
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 text-gray-700 text-sm">
                        <span className="flex items-center gap-2">
                            <i className="devicon-react-original colored text-xl"></i>
                            React
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="devicon-nodejs-plain colored text-xl"></i>
                            Node.js
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="devicon-sequelize-plain colored text-xl"></i>
                            Sequelize
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="devicon-tailwindcss-plain colored text-xl"></i>
                            Tailwind
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="devicon-mongodb-plain colored text-xl"></i>
                            MongoDB
                        </span>
                    </div>
                    <a href="https://github.com/Shaikohn/Ztreamgames" target="_blank" rel="noopener noreferrer" className="transition">
                        <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                            {language === "spanish" ? "Ver en GitHub" : "See on GitHub"}
                        </button>
                    </a>
                </div>
                <div className="bg-gray-100 p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition">
                    <img 
                        src={cuevanix} 
                        alt="Cuevanix" 
                        className="rounded mb-4 w-full h-56 object-cover" 
                    />
                    <h3 className="text-xl font-bold mb-2">Cuevanix (2023) – {language === "spanish" ? "Proyecto Personal" : "Personal Project"}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        {language === "spanish" ? <>
                        Proyecto full stack de un e-commerce de películas, desarrollado de manera individual. Incluye funcionalidades de compra, visualización de trailers, consultas, gestión de usuarios, roles y un panel de administración avanzado.
                        <br />
                        ✨ Features principales:
                        <br />
                        - Integración con Stripe para pagos simulados.
                        <br />
                        - Sistema de usuarios, autenticación y roles (admin/user).
                        <br />
                        - Funcionalidad de catálogo con búsqueda, filtros y ordenamiento.
                        <br />
                        - Sección de trailers e información detallada de cada película.
                        <br />
                        - Módulo de inquiries y comentarios de usuarios.
                        </> : 
                        <>
                        Full stack project of a movie e-commerce platform, developed individually. It includes functionalities for purchases, trailer viewing, inquiries, user management, roles, and an advanced admin panel.
                        <br />
                        ✨ Main features:
                        <br />
                        - Stripe integration for simulated payments.
                        <br />
                        - User system, authentication, and role management (admin/user).
                        <br />
                        - Catalog functionality with search, filters, and sorting.
                        <br />
                        - Trailer section with detailed information for each movie.
                        <br />
                        - Inquiries and user comments module.
                        </>
                        }
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 text-gray-700 text-sm">
                        <span className="flex items-center gap-2">
                            <i className="devicon-react-original colored text-xl"></i>
                            React
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="devicon-nodejs-plain colored text-xl"></i>
                            Node.js
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="devicon-mongodb-plain colored text-xl"></i>
                            MongoDB
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="devicon-bootstrap-plain colored text-xl"></i>
                            Bootstrap
                        </span>
                    </div>
                    <a href="https://github.com/Shaikohn/Cuevanix" target="_blank" rel="noopener noreferrer" className="transition">
                        <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                            {language === "spanish" ? "Ver en GitHub" : "See on GitHub"}
                        </button>
                    </a>
                </div>
                <div className="bg-gray-100 p-3 md:p-6 rounded-xl shadow hover:shadow-lg transition">
                    <img 
                        src={deltabet} 
                        alt="DeltaBet" 
                        className="rounded mb-4 w-full h-56 object-cover" 
                    />
                    <h3 className="text-xl font-bold mb-2">DeltaBet (2024–2025) – {language === "spanish" ? "Proyectos Freelance" : "Freelance Projects"} </h3>
                    <p className="text-sm text-gray-600 mb-4">
                        {language === "spanish" ? <>
                        Desarrollé tres juegos multijugador de casino (Magic Island, God’s Roulette y VSChat) para una plataforma de entretenimiento en streaming. Los proyectos combinaron dinámicas en tiempo real entre streamer y chat, lógica de apuestas y balance, diseño responsive y soporte multilenguaje.
                        <br />
                        ✨ Features principales:
                        <br />
                        - Lógica de apuestas y balance de jugadores en tiempo real.
                        <br />
                        - Soporte multilenguaje (inglés/español).
                        <br />
                        - Diseño responsive optimizado para desktop y mobile.
                        <br />
                        - Integración de eventos dinámicos y rondas rápidas para mantener el ritmo de juego.
                        </> : 
                        <>
                        I developed three multiplayer casino games (Magic Island, God’s Roulette, and VSChat) for a streaming entertainment platform. These projects combined real-time interactions between streamer and chat, betting and balance logic, responsive design, and multilingual support.
                        ✨ Main features:
                        <br />
                        - Real-time betting and player balance logic.
                        <br />
                        - Multilingual support (English/Spanish).
                        <br />
                        - Responsive design optimized for desktop and mobile.
                        <br />
                        - Integration of dynamic events and fast rounds to keep gameplay engaging.
                        </>
                        }
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 text-gray-700 text-sm">
                        <span className="flex items-center gap-2">
                            <i className="devicon-react-original colored text-xl"></i>
                            React
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="devicon-css3-plain colored text-xl"></i>
                            CSS
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="devicon-html5-plain colored text-xl"></i>
                            HTML
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="devicon-javascript-plain colored text-xl"></i>
                            JavaScript
                        </span>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://magicisland.app/" target="_blank" rel="noopener noreferrer" className="transition">
                            <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                                {language === "spanish" ? "Ir a Magic Island" : "Go to Magic Island"}
                            </button>
                        </a>
                        <a href="https://godsroulette.app/" target="_blank" rel="noopener noreferrer" className="transition">
                            <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                                {language === "spanish" ? "Ir a God's Roulette" : "Go to God's Roulette"}
                            </button>
                        </a>
                        <a href="https://vschat.app/" target="_blank" rel="noopener noreferrer" className="transition">
                            <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                                {language === "spanish" ? "Ir a VS.Chat" : "Go to VS.Chat"}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <h3 className="text-2xl font-semibold mt-20 mb-6 text-center">{language === "spanish" ? "Otros Proyectos" : "Others Projects"}</h3>
            <div className="hidden md:block overflow-x-auto">
                <div className="flex gap-6 w-max px-2 py-4">
                    {[  
                        {
                            title: 'PokeShai',
                            img: pokemon,
                            techs: ['React', 'Tailwind', 'MongoDB', 'Node'],
                            iconos: ['devicon-react-original', 'devicon-tailwindcss-plain', 'devicon-mongodb-plain', 'devicon-nodejs-plain'],
                            link: 'https://github.com/Shaikohn/PokeShai'
                        },
                        {
                            title: 'Preguntate',
                            img: preguntate,
                            techs: ['React', 'Bootstrap', 'JavaScript', 'Node'],
                            iconos: ['devicon-react-original', 'devicon-bootstrap-plain', 'devicon-javascript-plain', 'devicon-nodejs-plain'],
                        },
                        {
                            title: 'Feetsies',
                            img: feetsies,
                            techs: ['React', 'Material-UI', 'Postgres', 'Node'],
                            iconos: ['devicon-react-original', 'devicon-materialui-plain', 'devicon-postgresql-plain', 'devicon-nodejs-plain'],
                            link: 'https://github.com/Shaikohn/Feetsies'
                        },
                        {
                            title: 'Pawesome Dogs',
                            img: pawesomedogs,
                            techs: ['React', 'Tailwind', 'Postgres', 'Node'],
                            iconos: ['devicon-react-original', 'devicon-tailwindcss-plain', 'devicon-postgresql-plain', 'devicon-nodejs-plain'],
                            link: 'https://github.com/Shaikohn/Pawesome-Dogs'
                        },
                    ].map((proj, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 min-w-[320px] rounded-xl p-4 shadow hover:shadow-md transition transform hover:scale-105"
                    >
                        <img 
                            src={proj.img} 
                            alt={proj.title} 
                            className="rounded mb-3 w-full h-32 object-cover" 
                        />
                        <h4 className="font-bold text-lg mb-2">{proj.title}</h4>
                        <div className="flex flex-wrap gap-2 text-sm mb-3 text-gray-700">
                            {proj.techs.map((tech, idx) => (
                                <div key={idx} className="flex items-center gap-1">
                                    <i className={`${proj.iconos[idx]} text-xl`}></i> {tech}
                                </div>
                            ))}
                        </div>
                        {
                            proj.link && 
                                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="transition">
                                    <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                                        {language === "spanish" ? "Ver en GitHub" : "See on GitHub"}
                                    </button>
                                </a>
                        }
                    </div>
                ))}
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4 md:hidden">
            {[
                {
                    title: 'PokeShai',
                    img: pokemon,
                    techs: ['React', 'Tailwind', 'MongoDB', 'Node'],
                    iconos: ['devicon-react-original', 'devicon-tailwindcss-plain', 'devicon-mongodb-plain', 'devicon-nodejs-plain'],
                    link: 'https://github.com/Shaikohn/PokeShai'
                },
                {
                    title: 'Preguntate',
                    img: preguntate,
                    techs: ['React', 'Bootstrap', 'JavaScript', 'Node'],
                    iconos: ['devicon-react-original', 'devicon-bootstrap-plain', 'devicon-javascript-plain', 'devicon-nodejs-plain'],
                },
                {
                    title: 'Feetsies',
                    img: feetsies,
                    techs: ['React', 'Material-UI', 'Postgres', 'Node'],
                    iconos: ['devicon-react-original', 'devicon-materialui-plain', 'devicon-postgresql-plain', 'devicon-nodejs-plain'],
                    link: 'https://github.com/Shaikohn/Feetsies'
                },
                {
                    title: 'Pawesome Dogs',
                    img: pawesomedogs,
                    techs: ['React', 'Tailwind', 'Postgres', 'Node'],
                    iconos: ['devicon-react-original', 'devicon-tailwindcss-plain', 'devicon-postgresql-plain', 'devicon-nodejs-plain'],
                    link: 'https://github.com/Shaikohn/Pawesome-Dogs'
                },
            ].map((proj, index) => (
                <div key={index} className="bg-gray-100 rounded-xl p-4 shadow hover:shadow-md transition"> 
                    <img 
                        src={proj.img} 
                        alt={proj.title} 
                        className="rounded mb-3 w-full h-32 object-cover" 
                    />
                    <h4 className="font-bold text-lg mb-2">{proj.title}</h4>
                    <div className="flex flex-wrap gap-2 text-sm mb-3 text-gray-700 justify-center md:justify-start">
                        {proj.techs.map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-1">
                                <span className="flex items-center gap-2">
                                    <i className={`${proj.iconos[idx]} text-xl`}></i> {tech}
                                </span>
                            </div>
                        ))}
                    </div>
                    {
                        proj.link && 
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="transition">
                                <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                                    {language === "spanish" ? "Ver en GitHub" : "See on GitHub"}
                                </button>
                            </a>
                    }
                </div>
            ))}
        </div>
    </section>
    )
}

export default Projects;