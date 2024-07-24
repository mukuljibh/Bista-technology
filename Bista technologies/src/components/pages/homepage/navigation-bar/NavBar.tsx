import NavElements from "./NavElements"
import MobileNavBar from "./mobile-nav-bar/MobileNavBar";
import { useScreenSize } from "../../../../contexts/ScreenSizeProvider";

export const submenuData = [
    { label: "About Us", submenu: ['Mission and Vision', 'Our Story Line', 'Our Leaders'] },
    { label: "Solutions", submenu: ['Staffing Solution', 'Lead Generation', 'Training and Development', 'Staff Augementation', 'Market Research'] },
    { label: "Services", submenu: ['Enginnering Services', 'Healthcare Staffing', 'IT Staffing', 'Non IT Staffing'] },
    { label: "Carriers", submenu: ['Job Posting', 'Employee Login', 'Employer Login'] },
];
export default function NavBar() {
    const screenSize = useScreenSize();
    //below z index make sure nav bar always stays on the top
    return (
        <div className='flex border-2 justify-between text-gray-600 z-50  sticky top-0 bg-white '>
            <ul className='flex items-center'>
                <div>
                    <img className="w-56" src="https://www.bistatechnologies.com/static/logo.png" />
                </div>
                <li className="border p-3 bg-zinc-200 cursor-pointer hidden lg:block ">
                    home
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

            <div className='mr-10 flex border items-center rounded-lg hidden lg:flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                </svg>
                <button className='text-lg w-32 h-12 '>Apply Here</button>
            </div>
            {/*mobile nav menu */}
            {(!screenSize.isExtraLargeDevice && !screenSize.isLargeDevice) && <MobileNavBar />}

        </div>
    )
}
