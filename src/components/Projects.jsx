import React from 'react'
import Feetsies from '../assets/projects/Feetsies1.png'
import DogApp from '../assets/projects/DogApp.png'
import Cordoba from '../assets/projects/Cordoba.png'
import Portfolio from '../assets/projects/Portfolio.png'
import Ztream from '../assets/projects/Ztream.png'
import Cuevanix from '../assets/projects/Cuevanix.jpg'
import Preguntate from '../assets/projects/Preguntate.png'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png'; 
import Redux from '../assets/Redux.png';
import postgres from '../assets/postgres.png';
import Bootstrap from '../assets/Bootstrap.png';
import Express from '../assets/Express.png';

const Projects = () => {
    return (
        <div name="projects" className='w-full text-gray-3000 bg-[#0a192f] h-full'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                    <p className='py-6'>Check out some of my projects</p>
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
                            <div className='flex mt-5'>
                                <img alt="React" src={ReactImg} className='w-10 mx-auto' />
                                <img alt="Redux" src={Redux} className='w-10 mx-auto' />
                                <img alt="Node" src={Node} className='w-10 mx-auto' />
                                <img alt="Express" src={Express} className='w-10 mx-auto' />
                                <img alt="MongoDB" src={Mongo} className='w-10 mx-auto' />
                            </div>
                            <div className='pt-5 text-center'>
                                <a href='https://preguntate.net/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Go to the page</button>
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
                                Feetsies <br></br> (Academic group project)
                            <div className='flex mt-2'>
                                <img alt="React" src={ReactImg} className='w-10 mx-auto' />
                                <img alt="Redux" src={Redux} className='w-10 mx-auto' />
                                <img alt="Node" src={Node} className='w-10 mx-auto' />
                                <img alt="Express" src={Express} className='w-10 mx-auto' />
                                <img alt="Postgres" src={postgres} className='w-10 mx-auto' />
                            </div>
                            </span>
                            <div className='pt-5 text-center'>
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
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Ztreamgames (Academic group project)
                            </span>
                            <div className='flex mt-5'>
                                <img alt="React" src={ReactImg} className='w-10 mx-auto' />
                                <img alt="Redux" src={Redux} className='w-10 mx-auto' />
                                <img alt="Node" src={Node} className='w-10 mx-auto' />
                                <img alt="Express" src={Express} className='w-10 mx-auto' />
                                <img alt="MongoDB" src={Mongo} className='w-10 mx-auto' />
                            </div>
                            <div className='pt-5 text-center'>
                                <a href='https://ztreamgames.vercel.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Shaikohn/Zteam' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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
                                Cuevanix <br></br> (Personal project)
                            </span>
                            <div className='flex mt-5'>
                                <img alt="React" src={ReactImg} className='w-10 mx-auto' />
                                <img alt="Redux" src={Redux} className='w-10 mx-auto' />
                                <img alt="Node" src={Node} className='w-10 mx-auto' />
                                <img alt="Express" src={Express} className='w-10 mx-auto' />
                                <img alt="MongoDB" src={Mongo} className='w-10 mx-auto' />
                            </div>
                            <div className='pt-5 text-center'>
                                <a href='https://cuevanix-shaikohn.vercel.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Shaikohn/Cuevanix' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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
                                Dogs App <br></br> (Academic project)
                            </span>
                            <div className='flex mt-2'>
                                <img alt="React" src={ReactImg} className='w-10 mx-auto' />
                                <img alt="Redux" src={Redux} className='w-10 mx-auto' />
                                <img alt="Node" src={Node} className='w-10 mx-auto' />
                                <img alt="Express" src={Express} className='w-10 mx-auto' />
                                <img alt="Postgres" src={postgres} className='w-10 mx-auto' />
                            </div>
                            <div className='pt-5 text-center'>
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
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                This portfolio
                            </span>
                            <img alt="React" src={ReactImg} className='w-10 mx-auto' />
                            <div className='pt-5 text-center'>
                                <a href='https://github.com/Shaikohn/Portfolio' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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
                                Tourism App (HTML) <br></br> (Academic group project)
                            </span>
                            <div className='flex mt-2'>
                                <img alt="HTML" src={HTML} className='w-10 mx-auto' />
                                <img alt="CSS" src={CSS} className='w-10 mx-auto' />
                            </div>
                            <div className='pt-5 text-center'>
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