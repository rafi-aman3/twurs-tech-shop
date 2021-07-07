import React from 'react';
import Link from 'next/link'

const CategoryCard = ({ category, clickHandler }) => {
    
    return (
        <div onClick={() => clickHandler(category)} className="p-4 sm:w-1/2 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6 hover:bg-indigo-500 hover:text-white transition duration-300 ease-in">
                        <h2 className="text-base font-medium uppercase text-indigo-300 mb-8">{category}</h2>
                    <Link href="/">
                        <a className="mt-4 xs">See More</a>
                    </Link>
                </div>



            </div>
        </div>
    );
};

export default CategoryCard;