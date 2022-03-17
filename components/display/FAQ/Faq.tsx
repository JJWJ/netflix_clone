import Hero_card_form from "../Hero/Hero_card_form"

const Faq = () => {
    return (
        <div className="text-white bg-black border-t-8 border-neutral-800 ">
            <div className="flex justify-center text-center flex-col items-center ">
                <div className="max-w-[900px] flex justify-center items-center flex-col">
                    <p className="text-2xl mb-2 p-[5%] font-bold max-w-[70%] ">Frequently Asked Questions</p>
                    <ul className=" w-full p-0">
                        <li>
                            <button className="flex justify-between rounded-sm mb-4 bg-neutral-600 w-full p-2">What is Netflix?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            <div className="max-h-0 overflow-hidden">
                                <span>
                                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                                    <br />
                                    <br />
                                    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There&#39;s always something new to discover and new TV shows and movies are added every week!
                                </span>
                            </div>
                        </li>
                        <li>
                            <button className="flex justify-between rounded-sm mb-4 bg-neutral-600 w-full p-2">How much does Netflix cost?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            <div className="max-h-0 overflow-hidden">
                                <span>
                                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.
                                </span>
                            </div>
                        </li>
                        <li>
                            <button className="flex justify-between rounded-sm mb-4 bg-neutral-600 w-full p-2">Where can I watch?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            <div className="max-h-0 overflow-hidden">
                                <span>
                                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                    <br />
                                    <br />
                                    You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you&#39;re on the go and without an internet connection. Take Netflix with you anywhere.
                                </span>
                            </div>
                        </li>
                        <li>
                            <button className="flex justify-between rounded-sm mb-4 bg-neutral-600 w-full p-2">How do I cancel?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            <div className="max-h-0 overflow-hidden">
                                <span>
                                    Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                </span>
                            </div>
                        </li>
                        <li>
                            <button className="flex justify-between rounded-sm mb-4 bg-neutral-600 w-full p-2">What can I watch on Netflix?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            <div className="max-h-0 overflow-hidden">
                                <span>
                                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                                </span>
                            </div>
                        </li>
                        <li>
                            <button className="flex justify-between rounded-sm mb-4 bg-neutral-600 w-full p-2">Is Netflix food for kids?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            <div className="max-h-0 overflow-hidden">
                                <span>
                                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                                    <br />
                                    <br />
                                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div className="">
                        <Hero_card_form />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faq