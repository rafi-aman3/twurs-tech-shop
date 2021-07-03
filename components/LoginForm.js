import React from 'react';
import Link from 'next/link';
import CommonFormElement from './CommonFormElement';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { signInWithEmailAndPassword } from '../loginManager';
import { useRouter } from 'next/router';
import GoogleSignIn from './GoogleSignIn';


const LoginForm = () => {

    const Router = useRouter();


    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                handleResponse(res, true)
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


        <>
            <ToastContainer />

            <main className="bg-gray-200 h-screen flex justify-center items-center">

                <div className="m-7 flex flex-col relative  w-full">
                    <CommonFormElement />
                    <div className="flex flex-col justify-center items-center shadow-xl bg-white sm:rounded-sm p-2 sm:absolute sm:right-16 md:right-20 lg:right:32 sm:w-60 sm:h-full">
                        <h2 className="text-green-500 mb-3 text-sm font-bold">Log In</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                {...register("email", {
                                    required: 'This field is required'
                                })}
                                placeholder="Enter Your Email"
                                type="email"
                                className="border-b-2 border-grey-600 text-xs p-1 focus:outline-none focus:border-green-500 mb-2 bg-transparent w-full"
                            />
                            {errors.email && <span className="text-red-300 text-xs">{errors.email.message}</span>}


                            <input
                                {...register("password", {
                                    required: "The field is required"
                                })}
                                type="password"
                                placeholder="Enter password"
                                className="w-full border-b-2 border-grey-600 text-xs p-1 focus:outline-none focus:border-green-500"
                            />
                            {errors.password && <span className="text-red-300 text-xs">{errors.password.message}</span>}

                            <input type="submit" value="Login" className="bg-green-500 hover:bg-green-600 text-white w-full mt-4 mb-7 focus:outline-none text-xs p-2" />
                        </form>

                        <Link href="/resetpassword">
                            <a className="text-red-500 mb-5 text-xs">Forgot Password ?</a>
                        </Link>

                        <span className="text-gray-500 mb-5 text-xs">Dont have account?
                            <Link href="/register">
                                <a className="text-blue-500 mb-5 text-xs"> Register</a>
                            </Link>
                        </span>

                        <GoogleSignIn />


                    </div>
                </div>
            </main>
        </>

    );
};

export default LoginForm;