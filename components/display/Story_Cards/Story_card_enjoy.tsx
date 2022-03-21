import Image from 'next/image'
import enjoyStoryImage from '../../../public/Enjoy_Netflix_Image.png'

interface AppProps {
    Header: string
    MainText: string
}

const Story_card_enjoy = (appProps: AppProps) => {
    return (
        <div className="text-white bg-black w-screen flex py-2 px-[5%] border-t-8 border-neutral-800">
            <div className='flex flex-col lg:flex-row lg:flex-wrap justify-between items-center w-screen'>
                {/* Card Text */}
                <div className='text-center lg:w-1/2 py-2'>
                    <p className="text-3xl font-bold pt-6 mb-1 lg:text-5xl lg:text-left">{appProps.Header}</p>
                    <p className="text-xl lg:text-2xl lg:text-left">{appProps.MainText}</p>
                </div>
                {/* Card Image and Video */}
                <div className='min-w-screen lg:max-w-[50%] lg:min-w-[50%] '>
                    <div className='z-20'>
                        <Image className='z-20 ' src={enjoyStoryImage} alt='' />
                    </div>
                    <div className='flex justify-center items-center translate-y-[-150%] translate-x-[12%] max-w-[80%] 2xl:translate-y-[-150%]  2xl:translate-x-[14%] z-10 2xl:max-w-[500px]'>
                        <video width={'90%'} height={'70%'} autoPlay muted loop playsInline className=' object-contain'>
                            <source src='/Enjoy_Netflix_Video.m4v' type={'video/mp4'} />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story_card_enjoy