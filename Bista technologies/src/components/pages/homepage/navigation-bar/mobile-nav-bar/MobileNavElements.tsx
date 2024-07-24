import { useState } from "react"
type NavElementsProps = {
    label: string
    submenu?: string[]
}
export default function MobileNavElements({ label, submenu }: NavElementsProps) {
    const [isOpen, setisOpen] = useState(false)
    function handleMenu() {
        setisOpen(prev => !prev)
    }
    return (

        <div className={`mt-5 hover:text-black  ${isOpen ? 'bg-zinc-200' : ''}`} onClick={handleMenu} >
            <div className="flex  justify-between " >
                <p className="cursor-pointer">{label}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                </svg>
            </div>
            <div className=" bg-white space-y-2 mt-2">
                {isOpen ? submenu?.map((menu, ind) => {
                    return (
                        <h1 key={ind}><a href="#">{menu}</a></h1>
                    )
                }) : null}
            </div>


        </div>
    )
}