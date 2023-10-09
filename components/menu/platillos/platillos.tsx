import { NextPage } from "next";
import Platillo from "./platillo/platillo";
import { useContext } from "react";
import PlatillosContext from "../../../context/platillos/platillosContext";

const Platillos:NextPage = function () 
{
    
    const _PlatillosContext = useContext(PlatillosContext);

    if(_PlatillosContext?.platillos.length == 0) return <p>No hay platillos disponibles....</p>

    return(
        <> 
            {
                _PlatillosContext?.platillos.map( el =>
                    <Platillo key={el.id} platillo={el} />
                )
            }
        </>
    )    
}

export default Platillos