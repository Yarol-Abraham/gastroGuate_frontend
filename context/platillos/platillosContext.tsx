import { createContext } from "react";
import { PropsPlatillos } from "./platillosReducer";

const PlatillosContext = createContext<PropsPlatillos | null>(null)

export default PlatillosContext;