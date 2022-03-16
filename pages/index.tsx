import type { NextPage } from 'next'
import Head from 'next/head'
import Hero_card from '../components/display/Hero/Hero_card'

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
