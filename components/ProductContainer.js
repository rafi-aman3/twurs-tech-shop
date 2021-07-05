
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { initializeFirebase } from '../firebase/firebaseClient';
import { getProducts } from '../firestoreManager';
import ProductCard from './ProductCard';

const ProductContainer = () => {
    initializeFirebase();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(res => setProducts(res))
    }, [])


    return (
        <div className="flex flex-wrap m-12 min-h-screen bg-gray-100">
            {
                products.map(product => <ProductCard key={product.id} product={product}/>)
            }
           
        </div>
    );
};

export default ProductContainer;