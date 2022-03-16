import React from 'react'

const Hero_card_form = () => {
    return (
        <div className='z-10 text-white text-center flex justify-center w-full'>
            <form action="" className='w-full'>
                <h3 className='text-lg  text-center px-[15%] pb-2'>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='flex flex-row flex-wrap justify-center'>
                    {/* Relative Position on the div with absolute for the contents */}
                    <div className=' relative'>
                        <label className='absolute top-[30%] left-[10px] text-gray-700' htmlFor="email_hero">
                            Email address
                        </label>
                        <input className='min-w-[350px] max-w-[950px] py-3  rounded-sm border-none outline-none' type="email" name="" id="email_hero" maxLength={50} minLength={5} tabIndex={0} autoComplete="email" />
                    </div>
                    <div className='my-4'>&zwnj;</div>
                    <div>
                        <button className='flex px-6 py-3 bg-[#e50914] min-w-[74px] rounded-sm min-h-[40px] mx-auto'>Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Hero_card_form