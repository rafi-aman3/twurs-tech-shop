import React from 'react';
import { handleGoogleSignIn } from '../loginManager';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';


const GoogleSignIn = () => {
    const Router = useRouter();

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    };

    const handleResponse = (res, redirect) => {
        if (res) {
            toast.success(res.success) || toast.error(res.error)
        }


        if (redirect) {
            Router.push("/")
        }
    };


    return (
        <button
            className="bg-green-500 hover:bg-green-600 text-white w-44 focus:outline-none text-xs p-2"
            onClick={googleSignIn}
        >
            Continue with Google
        </button>
    );
};

export default GoogleSignIn;