import React from 'react';
import TypeAnimation from 'react-type-animation';
const Banner = () => {
    return (
        <div className='container mx-auto py-24'>
            <div className='flex md:flex-row justify-center items-center'>
                <div className='md:w-1/2 w-full flex flex-col items-center justify-center'>
                    <p className='text-gray-500'>Hi! I'm</p>      
                        <h1 className='md:text-7xl text-3xl font-semibold'>Chamak Karmakar</h1>
                    <h4 className='md:text-2xl text-lg text-gray-500'>
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                'I am a Tech Enthusiasts',
                                1000,
                                'I am a Frontend Developer',
                                1000,
                            ]}
                            wrapper="h4"
                            repeat={Infinity}
                        />
                    </h4>
                    <button className='text-white bg-rose-400 my-5 px-5 py-3 rounded-full hover:bg-rose-600 font-bold'>Hire Me</button>
                </div>
               
            </div>
        </div>
    );
};

export default Banner;