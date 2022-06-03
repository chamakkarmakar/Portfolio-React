import React from 'react';
import TypeAnimation from 'react-type-animation';
import chamak from '../img/chamak.jpg';
const Banner = () => {
    return (
        <div className='container mx-auto py-24'>
            <div className='flex md:flex-row flex-col-reverse md:justify-between justify-center items-center'>
                <div className='w-1/2 flex flex-col items-center justify-center'>
                    <p className='text-gray-500'>Hi! I'm</p>      
                        <h1 className='md:text-5xl text-3xl'>Chamak Karmakar</h1>
                    <h4 className='md:text-2xl text-xl text-gray-500'>
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                'I am a frontend developer',
                                2000,
                                'I am a UI/UX designer',
                                2000,
                            ]}
                            wrapper="h4"
                            repeat={Infinity}
                        />
                    </h4>
                    <button className='text-white bg-rose-400 my-5 px-5 py-3 rounded-full hover:bg-rose-600 font-bold'>Hire Me</button>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <img className='border-none rounded-full w-52 h-52' src={chamak} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;