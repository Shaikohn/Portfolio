import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                </div>
                <div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p className=''>Hi 🖐. I'm Shai, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I'm a 19-year-old looking for the opportunity to enter the professional world of web development. I started on this path of technology because of the taste I have always had for computers and virtual technologies in general, aspiring to be a competitive Developer in the sector, both in Back-End and Front-End.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About