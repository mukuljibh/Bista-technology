
import { useScreenSize } from "../../../../contexts/ScreenSizeProvider";
import { lazy } from "react";
import { Suspense } from "react";
import TopNavHeader from "./general-nav-bar/TopNavHeader";
const MainNavHeader = lazy(() => import('./general-nav-bar/MainNavHeader'))
const MobileNavBar = lazy(() => import('./mobile-nav-bar/MobileNavBar'))

export const submenuData = [
    { label: "Home", directPath: "/" },
    { label: "About Us", submenu: [{ text: 'Mission and Vision', link: "/aboutUs/mission-vision" }, { text: 'Our Story Line', link: "/aboutUs/our-storyline" }, { text: "Our Leaders", link: "/aboutUs/our-leaders" }] },
    { label: "Solutions", submenu: [{ text: 'Staffing Solution', link: "/solutions/staffing-solutions" }, { text: 'Lead Generation', link: "/solutions/lead-generation" }, { text: 'Training and Development', link: "/solutions/training&dev" }, { text: 'Staff Augementation', link: "/solutions/Staff-augmentation" }, { text: 'Market Research', link: "/solutions/market-research" }] },
    { label: "Services", submenu: [{ text: 'Enginnering Services', link: "/services/engineering-services" }, { text: 'Healthcare Staffing', link: "/services/health-care-services" }, { text: 'IT Staffing', link: "/services/it-staffing" }, { text: 'Non IT Staffing', link: "/services/non-it-staffing" }] },
    { label: "Carriers", submenu: [{ text: 'Job Posting', link: "/career/job-postings" }, { text: 'Employee Login', link: "/career/employee-login" }, { text: 'Employer Login', link: "/career/employer-login" }] },
    { label: "Contact Us", directPath: "/contact-us" }
];

export default function NavBar() {
    const screenSize = useScreenSize()
    return (
        <>
            <TopNavHeader />
            <Suspense>
                {(screenSize.isMediumDevice || screenSize.isSmallDevice) ?
                    <MobileNavBar /> :
                    <MainNavHeader submenuData={submenuData} />
                }
            </Suspense>
        </>
    )
}
