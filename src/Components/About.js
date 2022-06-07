import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import chamak from '../img/chamak.png';


const About = () => {
    return (
        <div className='container mx-auto mt-44'>
            <div className="flex md:flex-row flex-col">
                <div className='flex justify-center items-center'>
                    <img className='rounded-full' src={chamak} alt="" width="50%" height="50%" />
                </div>
                <div className='md:w-1/2 w-3/4 mx-auto'>

                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <h1 className="md:text-5xl text-2xl font-semibold my-7">About Me</h1>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__fadeInDown'>
                        <p>I am a hardworking and self-disciplined team player, looking for an
                            opportunity to grow myself and develop my skill as well. As a computer
                            science graduate, I am a tech enthusiast and have a good command of
                            coding and latest technology. Love to do brainstorming, can spend time
                            analyzing requirements or problem and bring a solution!</p>
                        <br />
                        <Link to='' target="_blank" className='px-5 text-white font-bold rounded-2xl py-3 bg-rose-600 hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-0'>Download Resume</Link>

                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    );
};

export default About;