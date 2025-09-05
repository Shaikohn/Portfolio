import photocv from "../assets/PhotoCV.png"

function AboutMe({language}) {
    return (
        <section id="about" className="px-6 py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-12">{language === "spanish" ? "Sobre mí" : "About Me"}</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                    <div className="text-left max-w-3xl space-y-6 text-gray-800 text-lg leading-relaxed">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">👋 {language === "spanish" ? "Quién soy" : "Who I am"}</h3>
                            <p>
                                {language === "spanish" ? <>¡Hola! Soy <strong>Shai Kohn</strong>, Desarrollador Full Stack (React · Node.js) con pasión por crear ✨ interfaces limpias, accesibles y responsivas, junto a ⚡back-ends robustos y eficientes.</> : <>¡Hello! I'm <strong>Shai Kohn</strong>, Full Stack Developer (React · Node.js) passionate about building ✨ clean, accessible, and responsive interfaces, along with ⚡robust and efficient back-end services.</>} 
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🛠️ {language === "spanish" ? "Tecnologías" : "Technologies"}</h3>
                            <p>
                                {language === "spanish" ? <>Trabajo con <strong>JavaScript (ES6+), React, Redux, CSS/HTML, Node.js, Express, Sequelize, PostgreSQL</strong> y <strong>MongoDB</strong>. También tengo conocimientos en <strong>Java</strong> y <strong>Python</strong>. Hablo inglés <strong>C2 Proficient</strong>.</> : <>I work with <strong>JavaScript (ES6+), React, Redux, CSS/HTML, Node.js, Express, Sequelize, PostgreSQL</strong> and <strong>MongoDB</strong>. I also have knowledge of <strong>Java</strong> and <strong>Python</strong>. I speak <strong>C2-level English</strong>.</>}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🎯 {language === "spanish" ? "En busca de..." : "Looking for..."}</h3>
                            <p>
                                
                                {language === "spanish" ? <>Actualmente curso la Tecnicatura Universitaria en Programación (UTN) y siempre estoy buscando crecer y aprender más. Busco nuevas oportunidades donde aportar mi perfil full stack, con foco fuerte en front-end, dentro de equipos que valoren la 🤝 <strong>colaboración</strong>,💡 <strong>mejora continua</strong> y ✅ <strong>calidad</strong>.</> : <>I’m currently studying an Associate Degree in Programming at UTN, always eager to keep growing and learning. I’m seeking new opportunities where I can bring my full stack profile with a strong front-end focus, in teams that value 🤝 <strong>collaboration</strong>,💡 <strong>continuous improvement</strong> and ✅ <strong>quality</strong>.</>}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">📩 {language === "spanish" ? "Contacto" : "Contact"}</h3>
                            <p>
                                
                                {language === "spanish" ? <>¿Querés colaborar en un proyecto, intercambiar ideas o simplemente conectar? Escribime a <a href="mailto:shaicokohn@gmail.com" className="text-blue-700">shaicokohn@gmail.com</a></> : <>Want to collaborate on a project, share ideas, or just connect? Reach me at <a href="mailto:shaicokohn@gmail.com" className="text-blue-700">shaicokohn@gmail.com</a></>}
                            </p>
                        </div>
                    </div>
                    <img
                        src={photocv}
                        alt="Shai Kohn"
                        className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-gray-300 transition-transform duration-300 hover:scale-105 hover:border-gray-500"
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;