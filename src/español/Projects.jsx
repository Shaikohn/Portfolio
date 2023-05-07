import React from 'react'
import Feetsies from '../assets/projects/Feetsies1.png'
import DogApp from '../assets/projects/DogApp.png'
import Cordoba from '../assets/projects/Cordoba.png'
import Portfolio from '../assets/projects/Portfolio.png'
import Ztream from '../assets/projects/Ztream.png'
import Cuevanix from '../assets/projects/Cuevanix.jpg'
import Preguntate from '../assets/projects/Preguntate.png'

const ProjectsEspañol = () => {
    return (
        <div name="projects" className='w-full text-gray-3000 bg-[#0a192f] h-full'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Proyectos</p>
                    <p className='py-6'>Mira algunos de mis proyectos</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item Preguntate */}
                    <div style={{backgroundImage: `url(${Preguntate})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Preguntate <br></br> (Freelance)
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://preguntate.net/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ir a la página</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item Feetsies */}
                    <div style={{backgroundImage: `url(${Feetsies})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Feetsies <br></br> (Proyecto grupal académico)
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://feetsies.vercel.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Shaikohn/Feetsies' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item Ztreamgames */}
                    <div style={{backgroundImage: `url(${Ztream})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Ztreamgames (Proyecto grupal académico)
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://ztreamgames.vercel.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Shaikohn/Zteam' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item Cuevanix */}
                    <div style={{backgroundImage: `url(${Cuevanix})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Cuevanix <br></br> (Proyecto personal)
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://cuevanix-shaikohn.vercel.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Shaikohn/Cuevanix' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item Dog App */}
                    <div style={{backgroundImage: `url(${DogApp})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Dogs App <br></br> (Proyecto grupal académico)
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://dogs-app-shaikohn.vercel.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Shaikohn/Dogs-App' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item Portfolio */}
                    <div style={{backgroundImage: `url(${Portfolio})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                This portfolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/Shaikohn/Portfolio' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item Tourism */}
                    <div style={{backgroundImage: `url(${Cordoba})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Tourism App (HTML) <br></br> (Proyecto grupal académico)
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://tourism-app-kohn-giacobbe.vercel.app/index.html' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Shaikohn/Tourism-App' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default ProjectsEspañol