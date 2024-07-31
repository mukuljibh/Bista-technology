import { Link } from "react-router-dom"
import useAnimation from "../../../../../shared/hooks/useAnimation"
type submenu = {
    text: string
    link: string
}
type NavElementsProps = {
    label: string
    submenu?: submenu[]
    directPath?: string
}
export default function NavElements({ label, submenu, directPath }: NavElementsProps) {
    const { isOpen, isAnimating, handleAnimationOff, handleAnimationOn } = useAnimation();
    return (
        <div className="p-3 hover:text-black" onMouseEnter={handleAnimationOn} onMouseLeave={handleAnimationOff} onClick={handleAnimationOff}>
            <div className="flex relative">
                <div className="flex">
                    {submenu ? <h1 className="cursor-pointer">{label}</h1> : <Link to={directPath || '#'}>{label}</Link>}
                    {submenu && <svg xmlns="http://www.w3.org/2000/svg" width={12} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                    </svg>}
                </div>
                {
                    (isOpen && submenu) && <div className={`absolute rounded-lg w-56 ${isAnimating ? 'opacity-95 transform scale-100' : 'opacity-0 transform scale-95'} top-6 pt-3 pb-4 bg-white transition  duration-200 mt-3 text-md space-y-4 transition-all text-nowrap`}>
                        <div className="relative flex justify-start items-center border-2 border-green-600">
                            <div className="w-7 h-3 rounded-full bg-green-600 ml-3 absolute "></div>
                        </div>
                        <div>
                            {submenu.map((menu, ind) => {
                                return (
                                    <div className="pl-6 mb-2 text-zinc-700  hover:text-sky-700 hover:font-medium" key={ind} >
                                        <Link to={menu.link}>{menu.text} </Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                }

            </div>
        </div>

    )
}