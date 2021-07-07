import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import MobileMenu from './MobileMenu';
import { useAuthState } from 'react-firebase-hooks/auth';
import { handleLogOut } from '../loginManager';
import firebase from 'firebase/app';
import "firebase/auth"
import { initializeFirebase } from '../firebase/firebaseClient';
import { userState } from './RecoilState';
import { useRecoilState } from 'recoil';


const NavBar = () => {
    
    initializeFirebase();
    
    const [loggedInUser, setLoggedInUser] = useRecoilState(userState);
    const [user, loading, error] = useAuthState(firebase.auth());

   

        if(user) {
            setLoggedInUser(user.email)
        } else {
            setLoggedInUser('')
        }
    




    const router = useRouter();

    const isActive = (r) => r === router.pathname ? "bg-blue-300" : "";

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const logOutHandler = () => {
        handleLogOut();
    }

    return (
     
        <nav className="bg-green-600">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button >
                            <svg onClick={() => setIsMenuOpen(true)} xmlns="http://www.w3.org/2000/svg" className={isMenuOpen ? "hidden" : "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16 " />
                            </svg>
                            <svg onClick={() => setIsMenuOpen(false)} xmlns="http://www.w3.org/2000/svg" className={isMenuOpen ? "h-6 w-6" : "hidden"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <h6 className="h-8 w-auto">
                                <Link href="/">
                                    <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Twurs-Tech-Shop </a>
                                </Link>
                            </h6>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-6">
                                <Link href="/products">
                                    <a className={isActive('/products') + " text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Products </a>
                                </Link>
                                <Link href="/orders">
                                    <a className={isActive('/orders') + " text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Orders
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>


                    {
                        user ?

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Link href="/cart">
                                    <a className={isActive('/cart') + " p-1 rounded-full text-white-400 hover:text-white focus:outline-none"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </a>

                                </Link>

                                <div className="relative ml-6">
                                    <button
                                        onClick={logOutHandler}
                                        className="text-gray-300 bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Logout
                                    </button>
                                </div>
                                <div className="m-1 ml-4 w-10 h-10 relative flex justify-center items-center rounded-full bg-red-200 text-xl text-black uppercase">{user.displayName[0]}</div>

                            </div>

                            :
                            <Link href="/login">
                                <a className={isActive('/login') + " text-gray-300 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Login </a>
                            </Link>
                    }

                </div>
            </div>
            <MobileMenu isMenuOpen={isMenuOpen} />

        </nav>
    );
};

export default NavBar;