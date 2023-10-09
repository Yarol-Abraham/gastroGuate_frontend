import { NextPage } from "next";
import Head from "next/head";
import Laoyut from "../components/layout/layout/layout";
import PagarComponent from "../components/menu/pagar/pagarComponen";


const Pagar: NextPage = () => {

    return (
        <>
            <Laoyut>
                <>
                    <PagarComponent />
                </>
            </Laoyut>
          
        </>
    )
}

export default Pagar;