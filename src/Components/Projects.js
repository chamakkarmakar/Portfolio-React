import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='container mx-auto'>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <h1 className="text-5xl text-center font-semibold my-7">Projects</h1>
            </AnimationOnScroll>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">

                <AnimationOnScroll animateIn='animate__bounceInLeft'>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <img class="rounded-t-lg hover:scale-125 transition duration-300 ease-in-out" src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">Warehouse Management for Dairy Based Products.</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Web application for managing inventory of Dairy Based Products. Each vendor can add and
                                Manage Their own products. Login Authentication, JWT implemented for security.
                            </p>
                            <p className="font-bold">Technology:
                                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full ml-2">React</span>
                                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full ml-2">Node.JS</span>
                                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full ml-2">Express.JS</span>
                                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full ml-2">MongoDB</span>
                                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full ml-2">Tailwind</span>
                            </p>
                            <Link to='https://warehouse-management-cli-2f12c.web.app/' class=" inline-block px-6 py-2.5 my-5 bg-rose-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out" >Live site</Link>
                        </div>
                    </div>
                    </div>
                    </AnimationOnScroll>

                <AnimationOnScroll animateIn='animate__bounceInUp'>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <img class="rounded-t-lg h-64 w-full hover:scale-125 transition duration-300 ease-in-out" src="https://themegeniuslab.com/html/juristic-live-cp/assets/images/slider/slide-1.jpg" alt="" />
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">Web Application for independent service provider</h5>
                            <p class="text-gray-700 text-base mb-4">
                                 It was developed focusing on the requirements of an independent service provider. User will
                                be able to Book services directly from the Website. Firebase Login authentication is implemented in this web app.
                            </p>
                            <p className="font-bold">Technology:
                                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full ml-2">React</span>
                                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full ml-2">JSX</span>
                                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full ml-2">Bootstrap</span>
                            </p>
                            <Link to='https://warehouse-management-cli-2f12c.web.app/' class=" inline-block px-6 py-2.5 my-5 bg-rose-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out" >Live site</Link>
                        </div>
                    </div>
                </div>
                </AnimationOnScroll>

              <AnimationOnScroll animateIn='animate__bounceInRight'>
              <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <Link to='https://warehouse-management-cli-2f12c.web.app/' class=" inline-block px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out" >Live site</Link>
                        </div>
                    </div>
                </div>
              </AnimationOnScroll>

            </div>
        </div>
    );
};

export default Projects;