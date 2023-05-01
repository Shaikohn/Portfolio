import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
/* import FireBase from '../assets/firebase.png'; */
import GitHub from '../assets/github.png';
/* import Tailwind from '../assets/tailwind.png'; */
import Mongo from '../assets/mongo.png'; 
import Redux from '../assets/Redux.png';
import postgres from '../assets/postgres.png';
import Bootstrap from '../assets/Bootstrap.png';
import Express from '../assets/Express.png';

const Skills = () => {
    return (
        <div name='skills' className='bg-[#0a192f] text-gray-300 w-full'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                            <img alt="Javascript" src={JavaScript} className='w-20 mx-auto' />
                            <p className='my-4'>JAVASCRIPT</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://es.reactjs.org/" target="_blank" rel="noopener noreferrer">
                            <img alt="React" src={ReactImg} className='w-20 mx-auto' />
                            <p className='my-4'>REACT</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://nodejs.org/es/" target="_blank" rel="noopener noreferrer">
                            <img alt="Node" src={Node} className='w-20 mx-auto' />
                            <p className='my-4'>NODE JS</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_amers-ar_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624305&adgroup=115749712783&gclid=CjwKCAiAqt-dBhBcEiwATw-ggCgcronQDx8z_aU5xfOVieuODiayP0BQC_zXGFrTHUNVODUEthzDUhoCZNMQAvD_BwE" target="_blank" rel="noopener noreferrer">
                            <img alt="MongoDB" src={Mongo} className='w-20 mx-auto' />
                            <p className='my-4'>MONGO DB</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                        <img alt="Postgres" src={postgres} className='w-20 mx-auto' />
                        <p className='my-4'>POSTGRES SQL</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                            <img alt="Node" src={Express} className='w-20 mx-auto' />
                            <p className='my-4'>EXPRESS JS</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                            <img alt="Redux" src={Redux} className='w-20 mx-auto' />
                            <p className='my-4'>REDUX</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noopener noreferrer">
                            <img alt="HTML" src={HTML} className='w-20 mx-auto' />
                            <p className='my-4'>HTML</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                            <img alt="CSS" src={CSS} className='w-20 mx-auto' />
                            <p className='my-4'>CSS</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                            <img alt="Bootstrap" src={Bootstrap} className='w-20 mx-auto' />
                            <p className='my-4'>BOOTSTRAP</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://github.com/Shaikohn" target="_blank" rel="noopener noreferrer">
                            <img alt="Github" src={GitHub} className='w-20 mx-auto' />
                            <p className='my-4'>GITHUB</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills