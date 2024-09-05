import MobileNavElements from "./MobileNavElements"
import { submenuData } from "../config/nav_bar.config"
import useAnimation from "../../../../shared/hooks/useAnimation"
import TopNavHeader from "../general-nav-bar/TopNavHeader"
import Hamburger from 'hamburger-react'

export default function MobileNavBar() {
    const { isOpen, isAnimating, toggleAnimation } = useAnimation()
    return (
        <>
            <TopNavHeader />
            <div className="h-20 border-b sticky -top-1 z-50 bg-white flex justify-center items-center  " >
                <img className="w-52 mr-auto pl-2" src="/logo.png" />
                <button className="mr-2 hover:bg-gray-200" onClick={toggleAnimation} >
                    <Hamburger toggled={isOpen} size={20} />
                </button>

                {/*adding animation here*/}
                {
                    isOpen && < div
                        className={`absolute overflow-y-auto bg-white pl-3 space-y-5 transition-all duration-500  w-11/12  ${isAnimating ? "top-20 h-96 opacity-100" : "top-20 h-0 opacity-0"}`}
                    >
                        {submenuData.map((menu, index) => {
                            return (
                                <MobileNavElements key={index}
                                    label={menu.label}
                                    submenu={menu.submenu}
                                    directPath={menu.directPath}
                                    toggleAnimation={toggleAnimation}
                                />
                            )
                        })}
                        <button className='hover:text-black border-2 border-black rounded-lg'>Apply Here</button>

                    </div >
                }

            </div >
        </>



    )
}