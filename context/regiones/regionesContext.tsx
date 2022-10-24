import { createContext } from "react";
import { PropsRegiones } from "./regionesReducer";

const RegionesContext = createContext<PropsRegiones | null>(null);

export default RegionesContext;