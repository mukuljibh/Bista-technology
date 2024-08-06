import { Link } from "react-router-dom"
import NavElements from "./NavElements";
import { submenuData } from "../config/nav_bar.config";
import TopNavHeader from "./TopNavHeader";

export default function MainNavHeader() {
    return (
        <>
            <TopNavHeader />
            <div className="sticky top-0 z-50">
                {/*Nav bar elements*/}
                < div className='flex  py-3 bg-sky-50 justify-around text-gray-600 bg-white transition-all'>
                    <div className="">
                        <Link to="/"><img className="w-56" src="https://www.bistatechnologies.com/static/logo.png" /></Link>
                    </div>

                    <div className="flex items-center"> {submenuData.map((menu, index) => {
                        return (
                            <NavElements key={index}
                                label={menu.label}
                                directPath={menu.directPath}
                                submenu={menu.submenu}
                            />
                        )
                    })}
                    </div>

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
        </>
    )
}   