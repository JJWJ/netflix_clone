import Netflix_SVG from "../SVG/Netflix_SVG"

const Header = () => {
    return (
        <div className="absolute top-0  w-full z-10 bg-transparent pt-5 max-w-[1920px]">
            <div className="flex flex-row items-start justify-start flex-nowrap my-0 mx-[5%] h-auto pt-2 relative bg-transparent">
                <div className="mr-auto ">
                    <Netflix_SVG />
                </div>
                <div className="w-auto relative mx-3">
                    <label htmlFor="language-switcher-select" className="w-0 h-0 overflow-hidden whitespace-nowrap m-[-1px] absolute">Select Language</label>
                    <div className="w-auto relative">
                        <select className="inline-block relative w-full py-1 px-5 border border-solid border-gray-500 bg-[rgba(0,0,0,.8)] text-white overflow-hidden whitespace-nowrap rounded-sm" name="" id="language-switcher-select" tabIndex={0} placeholder="language-switcher">
                            <option value="/" lang="en">English</option>
                        </select>
                    </div>
                </div>
                <a className="py-1 px-2 bg-[#e50914] text-white text-base rounded" href="">Sign In</a>
            </div>
        </div>
    )
}

export default Header

