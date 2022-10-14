import type { NextPage } from 'next';
import Laoyut from '../components/layout/layout/layout';
import MenuComponent from '../components/menu/menuComponent';

const Home: NextPage = () => {
  return (
     <Laoyut>
      <>
         <MenuComponent />
      </>
     </Laoyut>
    
  )
}

export default Home
