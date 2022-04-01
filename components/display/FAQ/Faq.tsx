import Hero_card_form from "../Hero/Hero_card_form"
import Faq_List_Item from "./Faq_List_Item"

const Faq = () => {
    return (
        <div className="text-white bg-black border-t-8 border-neutral-800 ">
            <div className="flex justify-center text-center flex-col items-center ">
                <div className="max-w-[900px] flex justify-center items-center flex-col">
                    <p className="text-2xl mb-2 pt-10 pb-4 font-bold max-w-[70%] ">Frequently Asked Questions</p>
                    <ul className=" w-full p-0">
                        <Faq_List_Item
                            buttonText="What is Netflix?"
                            contentMain="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
                            contentSecondary="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There&#39;s always something new to discover and new TV shows and movies are added every week!"
                        />
                        <Faq_List_Item
                            buttonText="How much does Netflix cost?"
                            contentMain="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts."
                        />
                        <Faq_List_Item
                            buttonText="Where can I watch?"
                            contentMain="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
                            contentSecondary="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you&#39;re on the go and without an internet connection. Take Netflix with you anywhere."
                        />
                        <Faq_List_Item
                            buttonText="How do I cancel?"
                            contentMain="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
                        />
                        <Faq_List_Item
                            buttonText="What can I watch on Netflix?"
                            contentMain="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
                        />
                        <Faq_List_Item
                            buttonText="Is Netflix good for kids?"
                            contentMain="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
                            contentSecondary="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
                        />
                    </ul>
                    <div className="pt-2">
                        <Hero_card_form />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faq