import type { NextPage } from 'next'
import Head from 'next/head'
import Faq from '../components/display/FAQ/Faq'
import Footer_card from '../components/display/Footer/Footer_card'
import Header from '../components/display/Header/Header'
import Hero_card from '../components/display/Hero/Hero_card'
import Story_card_enjoy from '../components/display/Story_Cards/Story_card_enjoy'
import Story_card_kids from '../components/display/Story_Cards/Story_card_kids'
import Story_card_watch from '../components/display/Story_Cards/Story_card_watch'
import Stroy_card_download from '../components/display/Story_Cards/Stroy_card_download'

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
        <div className='flex h-[80vh]'>
          <Hero_card />
        </div>
        <Story_card_enjoy
          Header='Enjoy on your TV.'
          MainText='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
        />
        <Stroy_card_download
          Header='Download your shows to watch offline.'
          MainText='Save your favorites easily and always have something to watch.'
        />
        <Story_card_watch
          Header='Watch everywhere.'
          MainText='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
        />
        <Story_card_kids
          Header='Create profiles for kids.'
          MainText='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
        />
        <Faq />
        <Footer_card />
      </main>
    </div >
  )
}

export default Home
