import type { NextPage } from 'next'
import Head from 'next/head';
import Script from 'next/script';
import { ReactElement } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

interface Props {
  children: ReactElement
}

const Laoyut: NextPage<Props> = ({ children }) => {
  
  return (
    <>
       <Head>
        <title>GastroGuate | Home</title>
      </Head>
      <Script src="https://kit.fontawesome.com/6dba117ff9.js" />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Laoyut
