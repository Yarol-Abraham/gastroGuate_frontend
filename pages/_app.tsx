import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthState from '../context/autenticacion/authState';
import CategoriasState from '../context/categorias/categoriasState';
import PlatillosState from '../context/platillos/platillosState';
import PedidosState from '../context/pedidos/pedidosState';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthState>
      <CategoriasState>
        <PlatillosState>
          <PedidosState>
            <Component {...pageProps} />
          </PedidosState>
        </PlatillosState>
      </CategoriasState>
    </AuthState>
  )
}

export default MyApp
