import React, {useState} from "react";
import Logo from '../assets/logo.png' 
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
/* import {HiOutlineMail} from 'react-icons/hi' */
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";
import Spanish from "../assets/svg/Spanish";

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div>
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo" style={{width: '100px'}} />
            </div>
            {/* Menu */}
                <ul className="hidden md:flex">
                    <li className="md:flex">
                        <Spanish />
                        <NavLink to="español">Read in Spanish</NavLink>
                    </li>
                    <li>
                        <Link to="home" smooth={true}  duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true}  duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true}  duration={500}>Skills</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true}  duration={500}>Projects</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true}  duration={500}>Contact</Link>
                    </li>
                </ul>
            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li>
                    <NavLink to="español">Read in Spanish</NavLink>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true}  duration={500}>Home</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true}  duration={500}>About</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills" smooth={true}  duration={500}>Skills</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="projects" smooth={true}  duration={500}>Projects</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact" smooth={true}  duration={500}>Contact</Link>
                </li>
            </ul>
            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full"
                        href="https://www.linkedin.com/in/shai-kohn/" target="_blank" rel="noreferrer">
                        Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full"
                        href="https://github.com/Shaikohn" target="_blank" rel="noreferrer">
                        GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a className="flex justify-between items-center w-full"
                        href="https://drive.google.com/file/d/1s6dC25kVEiORUwSLpjW7XkbH_7E_bylB/view" target="_blank" rel="noreferrer">
                        Resume (English) <BsFillPersonLinesFill size={30} />
                        </a>
                    </li> 
                    <li className="w-[160px] h-[60px] flex justify-between items-center text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a className="flex justify-between items-center w-full"
                        href="https://drive.google.com/file/d/1ZzhDo-zEC2gme1xDYNcMtFMfs8GoucDo/view" target="_blank" rel="noreferrer">
                        Resume (Spanish) <BsFillPersonLinesFill size={30} />
                        </a>
                    </li> 
                </ul>
            </div>
        </div>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        </div>
    )
}

export default NavBar