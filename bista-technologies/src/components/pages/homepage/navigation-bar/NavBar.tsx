import NavElements from "./NavElements"
import MobileNavBar from "./mobile-nav-bar/MobileNavBar";
import { useScreenSize } from "../../../../contexts/ScreenSizeProvider";
import { Link } from "react-router-dom";

export const submenuData = [
    { label: "About Us", submenu: [{ text: 'Mission and Vision', link: "/aboutUs/mission-vision" }, { text: 'Our Story Line', link: "/aboutUs/our-storyline" }, { text: "About Us", link: "/aboutUs/our-leaders" }] },
    { label: "Solutions", submenu: [{ text: 'Staffing Solution', link: "/solutions/staffing-solutions" }, { text: 'Lead Generation', link: "/solutions/lead-generation" }, { text: 'Training and Development', link: "/solutions/training&dev" }, { text: 'Staff Augementation', link: "/solutions/Staff-augmentation" }, { text: 'Market Research', link: "/solutions/market-research" }] },
    { label: "Services", submenu: [{ text: 'Enginnering Services', link: "/services/engineering-services" }, { text: 'Healthcare Staffing', link: "/services/health-care-services" }, { text: 'IT Staffing', link: "/services/it-staffing" }, { text: 'Non IT Staffing', link: "/services/non-it-staffing" }] },
    { label: "Carriers", submenu: [{ text: 'Job Posting', link: "/career/job-postings" }, { text: 'Employee Login', link: "/career/employee-login" }, { text: 'Employer Login', link: "/career/employer-login" }] },
];
export default function NavBar() {
    const screenSize = useScreenSize();
    //below z index make sure nav bar always stays on the top
    return (
        <div className="sticky top-0 z-50 ">
            {/*top address code */}
            <div className="bg-sky-700 py-1 w-full ">
                < div className=" flex lg:justify-end justify-center gap-5 lg:mr-10   " >
                    <div className="flex text-white gap-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                        <p>+91-9808283188 </p>
                    </div>
                    <div className="flex text-white gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512"><path fill="#ffffff" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        <p>Dubai, UAE</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="border-2 inline-block p-1 border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                        </div>
                        <div className="border-2 inline-block p-1 border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        </div>
                    </div>
                </div >
            </div >
            {/*Nav bar elements*/}
            < div className='flex  py-3 bg-sky-50 justify-around text-gray-600 bg-white  ' >
                <div className="">
                    <img className="w-56" src="https://www.bistatechnologies.com/static/logo.png" />
                </div>
                <ul className='flex items-center'>
                    <li className="border p-3 bg-zinc-200 cursor-pointer  text-sky-700 hidden lg:block ">
                        <Link to="/">Home</Link>
                    </li>
                    {(screenSize.isExtraLargeDevice || screenSize.isLargeDevice) &&
                        <div className="flex"> {submenuData.map((menu, index) => {
                            return (
                                <NavElements key={index}
                                    label={menu.label}
                                    submenu={menu.submenu}
                                />
                            )
                        })}</div>}

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

                {/*mobile nav menu */}
                {(!screenSize.isExtraLargeDevice && !screenSize.isLargeDevice) && <MobileNavBar />}

            </div >
        </div >
    )
}
