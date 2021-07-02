import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react';
import CommonFormElement from '../components/CommonFormElement';
import RegisterForm from '../components/RegisterForm';
import { createUserWithEmailandPassword, handleGoogleSignIn, initializeLoginFramework } from '../loginManager';

const register = () => {
    

    



    return (
        <div>
            <Head>
                <title>Register</title>
            </Head>
            <RegisterForm/>
        </div>
    );
};

export default register;