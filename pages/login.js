import Head from 'next/head'
import LoginForm from '../components/LoginForm';
import { ToastContainer } from 'react-toastify'


const login = () => {
    return (
        <section>
            <Head>
                <title>Login</title>
            </Head>
            <LoginForm />

        </section>
    );
};

export default login;