import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const HomeEspañol = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hola, me llamo</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Shai Kohn</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy un Desarrollador Web Full Stack</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Especializado en crear páginas usando frameworks de JavaScript</p>
                <div>
                    <Link to="projects" smooth={true}  duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Projects 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/> 
                        </span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeEspañol