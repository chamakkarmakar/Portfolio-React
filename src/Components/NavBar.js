import React, { useState } from 'react';
import { FaGithub, FaUserGraduate } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { HiHome, HiMenu, HiOutlineX } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="sticky t-0 flex flex-wrap items-center justify-between px-2 py-3 bg-rose-50 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link to='/'
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap   text-gray-900">
                        <FaGithub className='w-5 h-5'></FaGithub>
                    </Link>
                    <button
                        className="text-gray-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        {
                            !navbarOpen ? <HiMenu className='w-5 h-5 text-blue-700'></HiMenu> : <HiOutlineX className='w-5 h-5 text-blue-700'></HiOutlineX>
                        }
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <Link to='/home'
                                className="px-5 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 transition ease-in-out delay-150   hover:scale-125 duration-700">
                               <HiHome className='w-5 h-5 '></HiHome>
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link to='/products' 
                                className="px-5 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 transition ease-in-out delay-150   hover:scale-125 duration-700" >
                                <GrAchievement className='w-5 h-5 '></GrAchievement>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about'
                                className="px-5 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 transition ease-in-out delay-150   hover:scale-125 duration-700">
                               <FaUserGraduate className='w-5 h-5 '></FaUserGraduate>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/'
                                className="px-5 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 transition ease-in-out delay-150   hover:scale-125 duration-700">
                                <MdContactPhone className='w-5 h-5 '></MdContactPhone>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;