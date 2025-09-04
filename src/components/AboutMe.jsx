import photocv from "../assets/PhotoCV.png"

function AboutMe() {
    return (
        <section id="about" className="px-6 py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-12">Sobre mí</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                    <div className="text-left max-w-3xl space-y-6 text-gray-800 text-lg leading-relaxed">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">👋 Quién soy</h3>
                            <p>
                                ¡Hola! Soy <strong>Shai Kohn</strong>, Desarrollador Web Full-Stack con pasión por crear interfaces limpias, responsivas y experiencias funcionales de usuario, combinadas con servicios de back-end sólidos y eficientes.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🛠️ Tecnologías</h3>
                            <p>
                                Tengo experiencia trabajando con <strong>JavaScript (ES6+), React, Redux, CSS/HTML, Node.js, Express, Sequelize, PostgreSQL</strong> y <strong>MongoDB</strong>, además de conocimientos en <strong>Java</strong> y <strong>Python</strong>. Hablo inglés a nivel <strong>C2 avanzado</strong>.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🎯 En busca de...</h3>
                            <p>
                                Actualmente curso la Tecnicatura Universitaria en Programación en la UTN y siempre estoy buscando crecer y aprender más. Busco nuevas oportunidades donde aportar mi perfil full-stack, con enfoque fuerte en front-end, en equipos que valoren la calidad, la colaboración y la mejora continua.
                                <br />
                                ¿Querés colaborar en un proyecto, intercambiar ideas o simplemente conectar? Escribime a <strong>shaicokohn@gmail.com</strong>.
                            </p>
                        </div>
                    </div>
                    <img
                        src={photocv}
                        alt="Shai Kohn"
                        className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-gray-300 transition-transform duration-300 hover:scale-105 hover:border-black"
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;