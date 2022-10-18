import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthState from '../context/autenticacion/authState';
import CategoriasState from '../context/categorias/categoriasState';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthState>
      <CategoriasState>
        <Component {...pageProps} />
      </CategoriasState>
    </AuthState>
  )
}

export default MyApp
