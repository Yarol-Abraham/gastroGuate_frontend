import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthState from '../context/autenticacion/authState';
import RegionesState from '../context/regiones/regionesState';
import CategoriasState from '../context/categorias/categoriasState';
import PlatillosState from '../context/platillos/platillosState';
import PedidosState from '../context/pedidos/pedidosState';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthState>
      <RegionesState>
        <CategoriasState>
          <PlatillosState>
            <PedidosState>
              <Component {...pageProps} />
            </PedidosState>
          </PlatillosState>
        </CategoriasState>
      </RegionesState>
    </AuthState>
  )
}

export default MyApp
