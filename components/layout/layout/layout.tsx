import type { NextPage } from 'next'
import Head from 'next/head';
import Script from 'next/script';
import { ReactElement } from 'react';
import Header from '../header/header';

interface Props {
  children: ReactElement
}

const Laoyut: NextPage<Props> = ({ children }) => {
  
  return (
    <>
       <Head>
        <title>GastroGuate</title>
      </Head>
      <Script src="https://kit.fontawesome.com/6dba117ff9.js" />
      <Header />
      {children}
    </>
  )
}

export default Laoyut
