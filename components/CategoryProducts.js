import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { initializeFirebase } from '../firebase/firebaseClient';
import { getProductsByCategory } from '../firestoreManager';
import ProductCard from './ProductCard';

const CategoryProduct = () => {
    initializeFirebase();
    const Router = useRouter();
    const {category} = Router.query;

    const [products, setProducts] = useState([])


    getProductsByCategory(category).then(res => setProducts(res));


    

    return (
        <div className="flex flex-wrap m-12 min-h-screen bg-gray-100">
            Products of {category}
            {
                products.map(product => <ProductCard key={product.id} product={product}/>)
            }

        </div>
    );
};

export default CategoryProduct;