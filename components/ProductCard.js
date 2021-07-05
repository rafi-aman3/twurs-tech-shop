import React from 'react';
import Image from 'next/image';

const ProductCard = ({product}) => {
    return (
        <div className="p-4 sm:w-1/2 md:w-1/3">
            <div className="bg-white shadow-lg hover:shadow-xl rounded-lg ">
                <div className="h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover" >
                    <img className="h-full" src={product.image} alt="product" />
                </div>
                <div className="flex justify-between items-start px-2 pt-2">
                    <div className="p-2 flex-grow">
                        <h1 className="font-medium text-xl font-poppins">{product.title}</h1>
                        <p className="text-gray-500 font-nunito">{product.category}</p>
                    </div>
                    <div className="p-2 text-right">
                        <div className="text-teal-500 font-semibold text-lg font-poppins">{product.price}</div>
                    </div>
                </div>
                <div className="flex justify-between items-start px-2 pb-2">
                    <div className="w-1/2 p-2">
                        <button className="block w-full bg-white hover:bg-gray-100 text-teal-500 border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;