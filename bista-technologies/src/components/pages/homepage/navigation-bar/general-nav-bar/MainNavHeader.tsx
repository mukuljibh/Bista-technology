import { Link } from "react-router-dom"
import NavElements from "./NavElements";


type SubmenuItem = {
    text: string;
    link: string;
}

type MenuItem = {
    label: string;
    submenu: SubmenuItem[];
}
type MainNavHeaderProps = {
    submenuData: MenuItem[];
}
export default function MainNavHeader({ submenuData }: MainNavHeaderProps) {
    return (
        <div className="sticky top-0 z-50">
            {/*Nav bar elements*/}
            < div className='flex  py-3 bg-sky-50 justify-around text-gray-600 bg-white transition-all ' >
                <div className="">
                    <img className="w-56" src="https://www.bistatechnologies.com/static/logo.png" />
                </div>
                <ul className='flex items-center'>
                    <li className="border p-3 bg-zinc-200 cursor-pointer text-sky-700 hidden lg:block ">
                        <Link to="/">Home</Link>
                    </li>

                    <div className="flex"> {submenuData.map((menu, index) => {
                        return (
                            <NavElements key={index}
                                label={menu.label}
                                submenu={menu.submenu}
                            />
                        )
                    })}</div>

                    <li className=" p-3 hover:text-black hidden lg:block">
                        <a href="#">Contact Us</a>
                    </li>
                </ul>

                <div>
                    <button className='flex items-center text-lg w-36 h-12 border-2 border-sky-700 rounded-lg  text-sky-700 hover:text-white hover:bg-sky-700 hidden lg:flex  transition-all '>
                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={28} viewBox="0 0 24 24" fill="#0369a1" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram hover:fill-white">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                        </svg>
                        <p>Apply Here</p>
                    </button>
                </div>


            </div >
        </div >
    )
}   