import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {
    return (
        <div className='container mx-auto mt-44'>
            <div className="flex">
                <div className=''>
                    <img src="https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=400x300" alt="" />
                </div>
                <div className='w-1/2 mx-auto'>

                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <h1 className="text-5xl font-semibold my-7">About Me</h1>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__fadeInDown'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quo sequi consectetur nam! Repellendus fugiat veniam repellat reprehenderit sed iusto rerum mollitia, rem, nihil dolor voluptate sequi atque, omnis eveniet officia tempore? Sequi, voluptate! Repudiandae enim sint rem delectus tenetur eligendi dicta, itaque veniam commodi sapiente quam! Laudantium, unde sint?</p>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    );
};

export default About;