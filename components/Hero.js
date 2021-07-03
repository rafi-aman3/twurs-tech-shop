import React from 'react';
import Image from 'next/image'
import heroImage from '../public/heroSection.svg'

const Hero = () => {
    return (
        <>
            <div style={{background: '#bcd2ee'}} className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span style={{color: "#284B63"}} className="block xl:inline">Data to enrich your</span>
                                <span style={{color: "#9b7ede"}} className="block xl:inline">online business</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="#" style={{background: "#9b7ede"}} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:mt-20 text-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <Image src={heroImage} alt="hero image"/>
                
            </div>
        </div>
    </>

    );
};

export default Hero;