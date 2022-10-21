import { createContext } from "react";
import { PropsPedidos } from "./pedidosReducer";

const PedidosContext = createContext<PropsPedidos | null>(null)

export default PedidosContext;