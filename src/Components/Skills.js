import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Skills = () => {
    return (
        <div className='container mx-auto my-44'>
            <AnimationOnScroll animateIn="animate__fadeInDown">
                <h1 className="text-5xl text-center">My Skills</h1>
            </AnimationOnScroll>
            <div className="grid grid-cols-2 gap-4 mt-12">

                <div className='px-8'>
                    <span className="font-semibold">HTML</span>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center   leading-none rounded-l-full" style={{ width: "90%" }}> 90%</div>
                    </div>
                </div>

                <div className='px-8'>
                    <span className="font-semibold">CSS</span>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center   leading-none rounded-l-full" style={{ width: "90%" }}> 90%</div>
                    </div>
                </div>

                <div className='px-8'>
                    <span className="font-semibold">JavaScript</span>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center   leading-none rounded-l-full" style={{ width: "90%" }}> 90%</div>
                    </div>
                </div>

                <div className='px-8'>
                    <span className="font-semibold">React</span>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center   leading-none rounded-l-full" style={{ width: "90%" }}> 90%</div>
                    </div>
                </div>

                <div className='px-8'>
                    <span className="font-semibold">NodeJs</span>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center   leading-none rounded-l-full" style={{ width: "90%" }}> 90%</div>
                    </div>
                </div>

                <div className='px-8'>
                    <span className="font-semibold">ExpressJs</span>
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center   leading-none rounded-l-full" style={{ width: "90%" }}> 90%</div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Skills;