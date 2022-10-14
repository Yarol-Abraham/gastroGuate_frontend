import { NextPage } from "next";
import Head from "next/head";
import RegisterComponent from "../components/autenticacion/registrar/registerComponent";


const Register: NextPage = () => {

    return (
        <>
            <Head>
                <title>GastroGuate | Register</title>
            </Head>
            <RegisterComponent />
        </>
    )
}

export default Register;