import Image from 'next/image'
import downloadStoryImage from '../../../public/Download_Netflix_Image.jpg'

interface AppProps {
    Header: string
    MainText: string
}

const Stroy_card_download = (appProps: AppProps) => {
    return (
        <div className="text-white bg-black w-screen flex py-12 px-[5%] border-t-8 border-neutral-800">
            <div className='flex flex-col lg:flex-row-reverse lg:flex-wrap justify-between items-center w-screen'>
                {/* Card Text */}
                <div className='text-center lg:w-1/2'>
                    <p className="text-3xl font-bold mb-2 lg:text-5xl lg:text-left">{appProps.Header}</p>
                    <p className="text-xl mb-2 lg:text-2xl lg:text-left">{appProps.MainText}</p>
                </div>
                {/* Card Image and Video */}
                <div className='min-w-full lg:max-w-[50%] lg:min-w-[50%]'>
                    <div className=''>
                        <Image src={downloadStoryImage} alt='' layout='responsive' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stroy_card_download