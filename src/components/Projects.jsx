import ztreamgames from  '../assets/projects/Ztream.png'
import cuevanix from '../assets/projects/Cuevanix.png';
import deltabet from '../assets/projects/DeltaBet.png';
import pokemon from '../assets/projects/Pokemon.png';
import preguntate from '../assets/projects/Preguntate.png';
import feetsies from '../assets/projects/Feetsies.png';
import pawesomedogs from '../assets/projects/PawesomeDogs.png';

function Projects() {
    return (
        <section id="projects" className="px-8 py-16 bg-white">
            <h2 className="text-3xl font-semibold mb-8 text-center">Proyectos Destacados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                    <img 
                        src={ztreamgames} 
                        alt="ZtreamGames" 
                        className="rounded mb-4 w-full h-56 object-cover" 
                    />
                    <h3 className="text-xl font-bold mb-2">ZtreamGames</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Proyecto realizado en equipo bajo metodología SCRUM durante mi formación en Soy Henry.
                        Desarrollamos una tienda online de videojuegos con funcionalidades sociales y administrativas.
                        Fui responsable de implementar funcionalidades clave tanto en el Front-End como en el Back-End,
                        utilizando React, Node.js y Sequelize.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 text-gray-700 text-sm">
                        <i className="devicon-react-original colored text-xl"></i> React
                        <i className="devicon-nodejs-plain colored text-xl ml-4"></i> Node.js
                        <i className="devicon-sequelize-plain colored text-xl ml-4"></i> Sequelize
                        <i className="devicon-tailwindcss-plain colored text-xl ml-4"></i> Tailwind
                        <i className="devicon-mongodb-plain colored text-xl ml-4"></i> MongoDB
                    </div>
                    <a href="https://github.com/Shaikohn/Ztreamgames" target="_blank" rel="noopener noreferrer" className="transition">
                        <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                            Ver en GitHub
                        </button>
                    </a>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                    <img 
                        src={cuevanix} 
                        alt="Cuevanix" 
                        className="rounded mb-4 w-full h-56 object-cover" 
                    />
                    <h3 className="text-xl font-bold mb-2">Cuevanix</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Proyecto personal full stack de un e-commerce de películas, con funcionalidades para compra,
                        visualización de trailers, consultas, gestión de usuarios, roles y administración avanzada.
                        Desarrollado íntegramente con React, Node.js y MongoDB.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 text-gray-700 text-sm">
                        <i className="devicon-react-original colored text-xl"></i> React
                        <i className="devicon-nodejs-plain colored text-xl ml-4"></i> Node.js
                        <i className="devicon-mongodb-plain colored text-xl ml-4"></i> MongoDB
                        <i className="devicon-bootstrap-plain colored text-xl ml-4"></i> Bootstrap
                    </div>
                    <a href="https://github.com/Shaikohn/Cuevanix" target="_blank" rel="noopener noreferrer" className="transition">
                        <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                            Ver en GitHub
                        </button>
                    </a>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                    <img 
                        src={deltabet} 
                        alt="DeltaBet" 
                        className="rounded mb-4 w-full h-56 object-cover" 
                    />
                    <h3 className="text-xl font-bold mb-2">La "Trilogía" de DeltaBet</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Desarrollé tres juegos multijugador de casino para una plataforma de entretenimiento.
                        Incluyen desafíos de tragamonedas, ruleta y dinámicas entre streamer y chat.
                        Cuentan con lógica de apuestas, balance, sistema de idiomas y diseño responsive.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 text-gray-700 text-sm">
                        <i className="devicon-react-original colored text-xl"></i> React
                        <i className="devicon-css3-plain colored text-xl ml-4"></i> CSS
                        <i className="devicon-html5-plain colored text-xl ml-4"></i> HTML
                        <i className="devicon-javascript-plain colored text-xl ml-4"></i> JavaScript
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://magicisland.app/" target="_blank" rel="noopener noreferrer" className="transition">
                            <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                                Ir a Magic Island
                            </button>
                        </a>
                        <a href="https://godsroulette.app/" target="_blank" rel="noopener noreferrer" className="transition">
                            <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                                Ir a God's Roulette
                            </button>
                        </a>
                        <a href="https://vschat.app/" target="_blank" rel="noopener noreferrer" className="transition">
                            <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                                Ir a VS.Chat
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <h3 className="text-2xl font-semibold mt-20 mb-6 text-center">Otros Proyectos</h3>
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
                                        Ver en GitHub
                                    </button>
                                </a>
                        }
                    </div>
                ))}
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:hidden">
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
                    {
                        proj.link && 
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="transition">
                                <button className="mt-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-300 cursor-pointer">
                                    Ver en GitHub
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