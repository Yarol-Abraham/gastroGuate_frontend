import type { NextPage } from 'next'
import Laoyut from '../components/layout/layout/layout'
import Inicio from '../components/inicio/inicio'
import Compras from '../components/compras/compras'
import Loading from '../components/loading/loading'
import Ubicaciones from '../components/ubicaciones/ubicaciones'

const Home: NextPage = () => {
  return (
     <Laoyut>
      <>
         <Loading />   
         <Inicio />
         <Compras />
         <Ubicaciones />
      </>
     </Laoyut>
    
  )
}

export default Home
