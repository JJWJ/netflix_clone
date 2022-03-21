import Image from "next/image"

const Hero_card_background = () => {
    return (
        < div className="h-[80vh] w-full overflow-hidden absolute top-0 left-0 bottom-0 right-0" >
            <Image src={'/Netflix_background.jpg'} alt="" layout="fill" objectFit="cover" />
        </div >
    )
}

export default Hero_card_background