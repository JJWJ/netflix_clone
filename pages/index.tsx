import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/display/Header'
import Hero_card from '../components/display/Hero_card'
import Hero_card_background from '../components/display/Hero_card_background'
import Hero_card_text from '../components/display/Hero_card_text'

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen bg-black overflow-hidden'>
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <main className=' overflow-x-hidden'>
        <Hero_card />
        {/* <Hero_card_text /> */}
      </main>
    </div >
  )
}

export default Home
