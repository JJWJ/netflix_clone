import type { NextPage } from 'next'
import Head from 'next/head'
import Footer_card from '../components/display/Footer/Footer_card'
import Header from '../components/display/Header/Header'
import Hero_card from '../components/display/Hero/Hero_card'

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen bg-black'>
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <main className='relative overflow-x-hidden '>
        <div className='relative top-0 left-0f bottom-0 right-0 z-10 '>
          <div className='max-w-[1920p] justify-center flex'>
            <Header />
          </div>
          <div className='absolute top-0 left-0 bottom-0 right-0 w-full h-[70px] z-0 bg-[rgba(0,0,0,.4)] bg-gradient-to-t from-[rgba(0,0,0,.2)]  via-[rgba(0,0,0,.8)] to-[rgb(0,0,0)]'></div>
        </div>
        <div className='flex h-screen'>
          <Hero_card />
        </div>
        <Footer_card />
      </main>
    </div >
  )
}

export default Home
