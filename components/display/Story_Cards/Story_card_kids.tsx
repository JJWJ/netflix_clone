import Image from 'next/image'
import kidsStoryImage from '../../../public/Kids_Netflix_Image.png'

interface AppProps {
    Header: string
    MainText: string
}

const Story_card_kids = (appProps: AppProps) => {
    return (
        <div className="text-white bg-black w-screen flex py-6 px-[5%] border-t-8 border-neutral-800 ">
            <div className='flex flex-col lg:flex-row-reverse lg:flex-wrap justify-between items-center w-screen '>
                {/* Card Text */}
                <div className='text-center lg:w-1/2'>
                    <p className="text-3xl font-bold mb-2 lg:text-5xl lg:text-left pt-2">{appProps.Header}</p>
                    <p className="text-xl mb-2 lg:text-2xl lg:text-left">{appProps.MainText}</p>
                </div>
                {/* Card Image and Video */}
                <div className='min-w-full lg:max-w-[50%] lg:min-w-[50%]'>
                    <div className=''>
                        <Image src={kidsStoryImage} alt='child from children&#39;s movie flexing in front of a kids sign' layout='responsive' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story_card_kids