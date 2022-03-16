import Image from 'next/image'
import React from 'react'
import Header from '../Header/Header'
import Hero_card_background from './Hero_card_background'
import Hero_card_form from './Hero_card_form'
import Hero_card_text from './Hero_card_text'


const Hero_card = () => {
    return (
        <React.Fragment>
            <div className='flex w-screen justify-center items-center content-center '>
                <Header />
                <Hero_card_background />
                <div className='flex py-20  flex-col w-full justify-center items-center'>
                    <Hero_card_text />
                    <Hero_card_form />
                </div>
                <div className='absolute top-0 left-0 bottom-0 right-0 w-full h-[70px] z-0 bg-[rgba(0,0,0,.4)] bg-gradient-to-t from-[rgba(0,0,0,.2)]  via-[rgba(0,0,0,.8)] to-[rgb(0,0,0)]'></div>
            </div>
        </React.Fragment>
    )
}

export default Hero_card