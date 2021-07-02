import Link from 'next/link'
import {useRouter} from 'next/router'
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailandPassword, handleGoogleSignIn, initializeLoginFramework } from '../loginManager';
import CommonFormElement from './CommonFormElement';

const RegisterForm = () => {
    const Router = useRouter();
    const { handleSubmit, register, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = data => {
        createUserWithEmailandPassword(data.username, data.email, data.password)
            .then(res => {
                handleResponse(res, true)
            })
    };

    


    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photoURL: '',
        error: '',
        success: '',

    })





    initializeLoginFramework();





    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    };


    const handleResponse = (res, redirect) => {
        setUser(res);
        if (redirect) {
            Router.push("/login")
        }
    };

    return (
        <main className="bg-gray-200 h-screen flex justify-center items-center">
            <div className="m-7 flex flex-col relative  w-full">
                <CommonFormElement />
                <div className="flex flex-col justify-center items-center shadow-xl bg-white sm:rounded-sm p-2 sm:absolute sm:right-16 md:right-20 lg:right:32 sm:w-60 sm:h-full">
                    <h2 className="text-green-500 mb-3 text-sm font-bold">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input
                            {...register("username", {
                                required: 'This field is required'
                            })}
                            placeholder="Enter Username"
                            type="text"
                            className="border-b-2 border-grey-600 text-xs p-1 focus:outline-none focus:border-green-500 mb-2 bg-transparent w-full"
                        />
                        {errors.username && <span className="text-red-300 text-xs">{errors.username.message}</span>}

                        <input
                            {...register("email", {
                                required: 'This field is required'
                            })}
                            placeholder="Enter Email"
                            type="email"
                            className="border-b-2 border-grey-600 text-xs p-1 focus:outline-none focus:border-green-500 mb-2 bg-transparent w-full"
                        />
                        {errors.email && <span className="text-red-300 text-xs">{errors.email.message}</span>}


                        <input
                            {...register("password", {
                                required: "You must specify a password",
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 character"
                                }
                            })}
                            type="password"
                            placeholder="Enter password"
                            className="w-full border-b-2 border-grey-600 text-xs p-1 focus:outline-none focus:border-green-500"
                        />
                        {errors.password && <span className="text-red-300 text-xs">{errors.password.message}</span>}

                        <input
                            {...register("passwordCheck", {
                                validate: value => value === password.current || "The passwords do not match"
                            })}
                            type="password"
                            placeholder="Confirm password"
                            className="w-full border-b-2 border-grey-600 text-xs p-1 focus:outline-none focus:border-green-500"
                        />
                        {errors.passwordCheck && <span className="text-red-300 text-xs">{errors.passwordCheck.message}</span>}


                        <input type="submit" value="Register" className="bg-green-500 hover:bg-green-600 text-white w-full mt-4 mb-7 focus:outline-none text-xs p-2" />
                    </form>
                    <span className="text-gray-500 mb-5 text-xs">Do you have account?
                        <Link href="/login">
                            <a className="text-blue-500 mb-5 text-xs"> Login</a>
                        </Link>
                    </span>
                    <button onClick={googleSignIn} className="bg-green-500 hover:bg-green-600 text-white w-44 focus:outline-none text-xs p-2">Continue with Google</button>
                </div>
            </div>
        </main>
    );
};

export default RegisterForm;