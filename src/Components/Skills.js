import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Skills = () => {
    return (
        <div className='container mx-auto my-44'>
            <AnimationOnScroll animateIn="animate__fadeInDown">
                <h1 className="text-5xl text-center">My Skills</h1>
            </AnimationOnScroll>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-12">

                <div className='px-8'>
                    <div className='flex justify-between'>
                    <span className="font-semibold">HTML</span>
                        <span > 90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center h-3  leading-none rounded-l-full" style={{ width: "90%" }}></div>
                    </div>
                </div>

                <div className='px-8'>
                    <div className='flex justify-between'>
                    <span className="font-semibold">CSS</span>
                        <span > 90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center h-3  leading-none rounded-l-full" style={{ width: "90%" }}></div>
                    </div>
                </div>

                <div className='px-8'>
                    <div className='flex justify-between'>
                    <span className="font-semibold">JavaScript</span>
                        <span > 90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center h-3  leading-none rounded-l-full" style={{ width: "90%" }}></div>
                    </div>
                </div>

                <div className='px-8'>
                    <div className='flex justify-between'>
                    <span className="font-semibold">React</span>
                        <span > 90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center h-3  leading-none rounded-l-full" style={{ width: "90%" }}></div>
                    </div>
                </div>

                <div className='px-8'>
                    <div className='flex justify-between'>
                    <span className="font-semibold">Node.JS</span>
                        <span > 90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center h-3  leading-none rounded-l-full" style={{ width: "90%" }}></div>
                    </div>
                </div>

                <div className='px-8'>
                    <div className='flex justify-between'>
                    <span className="font-semibold">Express.JS</span>
                        <span > 90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center h-3  leading-none rounded-l-full" style={{ width: "90%" }}></div>
                    </div>
                </div>

               

            </div>

        </div>
    );
};

export default Skills;