import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import "firebase/firestore"
import { initializeFirebase } from '../firebase/firebaseClient';
import CategoryCard from './CategoryCard';
import { getCategories, getProductsByCategory } from '../firestoreManager';
import { useRouter } from 'next/router';


const Categories = () => {
    const Router = useRouter();

    const [categories, setCategories] = useState([])
    initializeFirebase();

    useEffect(() => {
        getCategories().then(res => setCategories(res))

    }, [])


    const clickHandler = (title) => {
        Router.push('/products/'+ title);

    }




    return (
        <div className="md: h-full flex items-center text-gray-600">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-12">
                    <h5 className="text-base md:text-lg text-indigo-700 mb-1">Categories</h5>
                    <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">Twurs Tech Shop</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        categories.map(category => <CategoryCard key={category.id} clickHandler={clickHandler} category={category.name} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;