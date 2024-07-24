import { useEffect, useState } from "react"
import MobileNavElements from "./MobileNavElements"
import { submenuData } from "../NavBar"

export default function MobileNavBar() {
    const [isVisible, setIsvisible] = useState(false)
    const [isAnimation, setIsAnimation] = useState(false)

    useEffect(() => {
        if (isVisible) {
            setIsAnimation(() => true)
        }

    }, [isVisible])
    function handleMenu() {
        if (!isVisible) {
            setIsvisible(() => true)
        }
        else {
            setIsAnimation(() => false)
            setTimeout(() => {
                setIsvisible(false)
            }, 300)
        }
    }

    return (
        <div  >
            <button className="p-3  hover:bg-gray-200" onClick={handleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            </button>
            {
                isVisible && < div
                    className={`mt-1 border  right-0 overflow-auto bg-white pl-9 space-y-7 transition-all duration-500  absolute w-full  ${isAnimation ? "top-12 h-72 opacity-100" : " top-12 h-0 opacity-0"}`}
                >
                    {submenuData.map((menu, index) => {
                        return (
                            <MobileNavElements key={index}
                                label={menu.label}
                                submenu={menu.submenu}
                            />
                        )
                    })}
                    <button className=' hover:text-black border-2 border-black rounded-lg'>Apply Here</button>

                </div >
            }

        </div >


    )
}