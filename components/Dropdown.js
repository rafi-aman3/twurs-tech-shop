import React, { useState } from 'react';
import Link from 'next/link'


const Dropdown = () => {
    
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    return (
        <div className="relative inline-block tex">
        <div>
            <button onClick={() => setIsDropDownOpen(!isDropDownOpen)} className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">Categories
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
        <div className={isDropDownOpen ? "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden"} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            <div className="py-1" role="none">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <Link href="/phone">
                    <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Phone </a>
                </Link>
                <Link href="/laptop">
                    <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Laptop </a>
                </Link>
                <Link href="/mouse">
                    <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Mouse </a>
                </Link>
                <Link href="/keyboard">
                    <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Keyboard </a>
                </Link>
                <Link href="/book">
                    <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Book </a>
                </Link>
                <Link href="/coffee">
                    <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Coffee </a>
                </Link>
            </div>
        </div>

    </div>
    );
};

export default Dropdown;