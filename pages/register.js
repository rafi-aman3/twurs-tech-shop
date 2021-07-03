import Head from 'next/head'
import RegisterForm from '../components/RegisterForm';

const register = () => {
    
    return (
        <section>
            <Head>
                <title>Register</title>
            </Head>
            <RegisterForm/>
        </section>
    );
};

export default register;