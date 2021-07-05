import React from 'react';

const Footer = () => {
    return (

        <div className="bg-gray-300 py-12 px-4">
            <div tabIndex="0" className="focus:outline-none mx-auto container flex flex-col items-center justify-center">
                
                <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                    <h1 tabIndex="0" className="focus:outline-none text-2xl font-black">Build. Review. Ship.</h1>

                    <div className="my-6 text-base text-color f-f-l">
                        <ul className="md:flex items-center">
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="#" className="focus:outline-none focus:underline hover:text-gray-500">About </a></li>
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="#" className="focus:outline-none focus:underline hover:text-gray-500">Features </a></li>
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="#" className="focus:outline-none focus:underline hover:text-gray-500">Pricing </a></li>
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="#" className="focus:outline-none focus:underline hover:text-gray-500">Careers </a></li>
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="#" className="focus:outline-none focus:underline hover:text-gray-500">Help </a></li>
                            <li className="cursor-pointer pt-4 lg:py-0"><a href="#" className="focus:outline-none focus:underline hover:text-gray-500">Privacy Policy </a></li>
                        </ul>
                    </div>

                </div>
                <div className="w-9/12 h-0.5 bg-gray-100 rounded-full"></div>
                <div className="text-sm text-color mt-4 f-f-l">
                    <p tabIndex="0" className="focus:outline-none">© 2021 Twurs Tech Shop. All rights reserved</p>
                </div>

            </div>
        </div >

    );
};

export default Footer;