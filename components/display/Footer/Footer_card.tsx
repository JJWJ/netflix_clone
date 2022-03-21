
const Footer_card = () => {
    return (
        <div className="text-neutral-500 w-screen flex flex-col bg-black border-t-8 border-neutral-800">
            <div className="flex flex-col justify-start items-start m-8">
                <p className="mb-4">Questions? Call  <a href="tel:1-844-505-2993">1-844-505-2993</a></p>
                <ul className=" flex flex-row max-w-screen flex-wrap">
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">FAQ</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Help Center</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Account</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Media Center</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Investor Relations</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Jobs</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Redeem Gift Cards</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Buy Gift Cards</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Ways to Watch</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Terms of Use</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Privacy</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Cookie Preferences</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Corporate Information</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Contact Us</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Speed Test</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Legal Notices</a>
                    </li>
                    <li className="w-1/2 sm:w-1/3 md:w-1/4 pr-3 mb-4">
                        <a href="#">Only on Netflix</a>
                    </li>
                </ul>
                <div className="w-auto relative mt-3">
                    <label htmlFor="language-switcher-select" className="w-0 h-0 overflow-hidden whitespace-nowrap m-[-1px] absolute">Select Language</label>
                    <div className="w-auto relative">
                        <select className="inline-block relative w-full py-4 px-5 border border-solid border-gray-500 bg-[rgba(0,0,0,.8)] text-white overflow-hidden whitespace-nowrap rounded-sm" name="" id="language-switcher-select" tabIndex={0} placeholder="language-switcher">
                            <option value="/" lang="en">English</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer_card