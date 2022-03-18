import React from 'react'
import Hero_card_background from './Hero_card_background'
import Hero_card_form from './Hero_card_form'
import Hero_card_text from './Hero_card_text'


const Hero_card = () => {
    return (
        <div className='flex w-screen justify-center items-center content-center '>
            <Hero_card_background />
            <div className='flex py-20  flex-col w-full justify-center items-center '>
                <Hero_card_text />
                <Hero_card_form />
            </div>
        </div>
    )
}

export default Hero_card