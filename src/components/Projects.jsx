import React from 'react'
import Feetsies from '../assets/projects/Feetsies1.png'
import DogApp from '../assets/projects/DogApp.png'
import Cordoba from '../assets/projects/Cordoba.png'
import Portfolio from '../assets/projects/Portfolio.png'
import Ztream from '../assets/projects/Ztream.png'
import Cuevanix from '../assets/projects/Cuevanix.jpg'

const Projects = () => {
    return (
        <div name="projects" className='w-full md:h-screen text-gray-3000 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                    <p className='py-6'>Check out some of my projects</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item Feetsies */}
                    <div style={{backgroundImage: `url(${Feetsies})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider text-align-center'>
                                Feetsies Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://feetsies.vercel.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Shaikohn/Feetsies' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item Ztreamgames */}
                    <div style={{backgroundImage: `url(${Ztream})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Ztreamgames
                            </span>
                            <div className='pt-8 text-center'>
                                {/* <a href='https://feetsies.vercel.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a> */}
                                <a href='https://github.com/Shaikohn/Zteam' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item Cuevanix */}
                    <div style={{backgroundImage: `url(${Cuevanix})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Cuevanix
                            </span>
                            <div className='pt-8 text-center'>
                                {/* <a href='https://feetsies.vercel.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a> */}
                                <a href='https://github.com/Shaikohn/Cuevanix' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item Dog App */}
                    <div style={{backgroundImage: `url(${DogApp})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Dog Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://dogs-app-shaikohn.vercel.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Shaikohn/Dogs-App' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item Portfolio */}
                    <div style={{backgroundImage: `url(${Portfolio})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                This portfolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/Shaikohn/Portfolio' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item Tourism */}
                    <div style={{backgroundImage: `url(${Cordoba})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Tourism App (HTML)
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://tourism-app-kohn-giacobbe.vercel.app/index.html' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Shaikohn/Tourism-App' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Projects