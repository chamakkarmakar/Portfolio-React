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
                    <a href='https://drive.google.com/file/d/1z4p7lFtJUAZwYvq1tNc0vc9ds_of52bi/view?usp=sharing' target="_blank" rel='noreferrer' className='px-5 text-white font-bold rounded-2xl py-3 bg-rose-600 hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-0'>Download Resume</a>
                </div>
               
            </div>
        </div>
    );
};

export default Banner;