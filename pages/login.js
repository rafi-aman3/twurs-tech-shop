import Head from 'next/head'
import Link from 'next/link'
import CommonFormElement from '../components/CommonFormElement';


const login = () => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>

            <main className="bg-gray-200 h-screen flex justify-center items-center">
                <div className="m-7 flex flex-col relative  w-full">
                    <CommonFormElement/>
                    <div className="flex flex-col justify-center items-center shadow-xl bg-white sm:rounded-sm p-2 sm:absolute sm:right-16 md:right-20 lg:right:32 sm:w-60 sm:h-full">
                        <h2 className="text-green-500 mb-3 text-sm font-bold">Log In</h2>
                        <input placeholder="Enter Email" type="text" className="border-b-2 border-grey-600 text-xs p-1 focus:outline-none focus:border-green-500 mb-2 bg-transparent w-full" />
                        <input type="password" placeholder="Enter password" className="w-full border-b-2 border-grey-600 text-xs p-1 focus:outline-none focus:border-green-500" />
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white w-full mt-4 mb-7 focus:outline-none text-xs p-2">LOGIN</button>
                        <a href="#" className="text-red-500 mb-5 text-xs">Forgot Password ?</a>
                        <span className="text-gray-500 mb-5 text-xs">Dont have account?

                            <Link href="/register">
                                <a className="text-blue-500 mb-5 text-xs"> Register</a>
                            </Link>
                        </span>
                        <button className="bg-green-500 hover:bg-green-600 text-white w-44 focus:outline-none text-xs p-2">Continue with Google</button>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default login;