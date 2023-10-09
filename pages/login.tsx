import { NextPage } from "next";
import Head from "next/head";
import LoginComponent from "../components/autenticacion/login/loginComponent";


const Login: NextPage = () => {

    return (
        <>
            <Head>
                <title>GastroGuate | Login</title>
            </Head>
           <LoginComponent />
        </>
    )
}

export default Login;