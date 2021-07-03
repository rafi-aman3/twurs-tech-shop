import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import { initializeFirebase } from '../firebase/firebaseClient'


export default function Home() {
  initializeFirebase();
  
  return (
    <div>
      <Head>
        <title>Twurs Tech Shop</title>
        <meta name="description" content="Tech shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Categories/>
      
      
    </div>
  )
}
