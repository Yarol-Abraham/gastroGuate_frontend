import { createContext } from "react";
import { PropsCategorias } from "./categoriasReducer";

const CategoriasContext = createContext<PropsCategorias | null>(null);

export default CategoriasContext;