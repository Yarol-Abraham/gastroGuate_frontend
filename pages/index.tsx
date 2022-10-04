import type { NextPage } from 'next'
import Laoyut from '../components/layout/layout/layout'
import Inicio from '../components/inicio/inicio'
import Loading from '../components/loading/loading'
const Home: NextPage = () => {
  return (
     <>
      <Loading />   
     <Laoyut>
        <Inicio />
     </Laoyut>
     </>
    
  )
}

export default Home
