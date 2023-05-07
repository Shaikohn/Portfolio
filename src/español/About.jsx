import React from 'react'

const AboutEspañol = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Sobre mí</p>
                    </div>
                </div>
                <div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p className=''>Hola 🖐. Soy Shai, encantado de conocerte. Por favor echa un vistazo.</p>
                    </div>
                    <div>
                        <p>Soy un Desarrollador Web Full Stack con nivel C2 Avanzado de Inglés. Tengo experiencia programando en NodeJS, React, Redux, MongoDB, entre otras tecnologías del sector. Mis habilidades incluyen responsabilidad y compromiso con el cumplimiento de objetivos, capacidad de análisis, resolución de problemas y trabajo en equipo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutEspañol