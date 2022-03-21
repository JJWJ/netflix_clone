import Image from 'next/image'
import watchStoryImage from '../../../public/Watch_Netflix_Image.png'

interface AppProps {
    Header: string
    MainText: string
}

const Story_card_watch = (appProps: AppProps) => {
    return (
        <div className="text-white bg-black w-screen flex px-[5%] border-t-8 border-neutral-800">
            <div className='flex flex-col lg:flex-row lg:flex-wrap justify-between items-center w-screen '>
                {/* Card Text */}
                <div className='text-center lg:w-1/2'>
                    <p className="text-3xl font-bold mb-2 lg:text-5xl lg:text-left pt-10">{appProps.Header}</p>
                    <p className="text-xl mb-2 lg:text-2xl lg:text-left ">{appProps.MainText}</p>
                </div>
                {/* Card Image and Video */}
                <div className='min-w-screen lg:min-w-[50%] lg:max-w-[50%] '>
                    <div className=''>
                        <Image className='z-20' src={watchStoryImage} alt='' />
                    </div>
                    <div className='flex justify-center lg:flex-col lg:items-center translate-y-[-200%] z-10 max-w-[650px]'>
                        <video width={'60%'} height={'50%'} autoPlay muted loop playsInline className='max-w-[375px] object-contain'>
                            <source src='/Watch_Netflix_Video.m4v' type={'video/mp4'} />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story_card_watch