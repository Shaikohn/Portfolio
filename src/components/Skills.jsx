function Skills() {
    return (
        <section id="skills" className="px-6 py-12 mx-auto bg-gray-50">
            <h2 className="text-3xl font-bold mb-10 text-center">Hard Skills</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-gray-800">
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Front-End</h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
                            { name: 'React', icon: 'devicon-react-original' },
                            { name: 'Redux', icon: 'devicon-redux-original' },
                            { name: 'HTML5', icon: 'devicon-html5-plain' },
                            { name: 'CSS3', icon: 'devicon-css3-plain' },
                        ].map(skill => (
                            <li
                                key={skill.name}
                                className="flex items-center gap-3 p-2 rounded-lg transition transform hover:scale-105 hover:bg-gray-100"
                            >
                                <i className={`${skill.icon} text-xl`}></i>
                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Back-End</h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'Node.js', icon: 'devicon-nodejs-plain' },
                            { name: 'Express.js', icon: 'devicon-express-original' },
                            { name: 'Java', icon: 'devicon-java-plain' },
                            { name: 'Python', icon: 'devicon-python-plain' },
                        ].map(skill => (
                            <li
                                key={skill.name}
                                className="flex items-center gap-3 p-2 rounded-lg transition transform hover:scale-105 hover:bg-gray-100"
                            >
                                <i className={`${skill.icon} text-xl`}></i>
                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Bases de Datos</h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
                            { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
                            { name: 'Sequelize', icon: 'devicon-sequelize-plain' },
                        ].map(skill => (
                            <li
                                key={skill.name}
                                className="flex items-center gap-3 p-2 rounded-lg transition transform hover:scale-105 hover:bg-gray-100"
                            >
                                <i className={`${skill.icon} text-xl`}></i>
                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Otras</h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'Git', icon: 'devicon-git-plain' },
                            { name: 'GitHub', icon: 'devicon-github-original' },
                            { name: 'VS Code', icon: 'devicon-vscode-plain' },
                            { name: 'Trello', icon: 'devicon-trello-plain' },
                        ].map(skill => (
                            <li
                                key={skill.name}
                                className="flex items-center gap-3 p-2 rounded-lg transition transform hover:scale-105 hover:bg-gray-100"
                            >
                                <i className={`${skill.icon} text-xl`}></i>
                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Soft Skills</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-gray-800 text-center">
                {[
                    'Comunicación efectiva',
                    'Trabajo en equipo',
                    'Resolución de problemas',
                    'Pensamiento analítico',
                    'Responsabilidad',
                    'Autonomía',
                    'Adaptabilidad',
                    'Aprendizaje continuo',
                ].map(skill => (
                    <div
                        key={skill}
                        className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-md transform transition hover:scale-105"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;