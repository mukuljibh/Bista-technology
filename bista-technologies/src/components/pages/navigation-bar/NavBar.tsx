
import { useScreenSize } from "../../../contexts/ScreenSizeProvider";
import { lazy } from "react";
import { Suspense } from "react";
const MainNavHeader = lazy(() => import('./general-nav-bar/MainNavHeader'))
const MobileNavBar = lazy(() => import('./mobile-nav-bar/MobileNavBar'))

export default function NavBar() {
    const screenSize = useScreenSize()
    return (
        <Suspense>
            {(screenSize.isMediumDevice || screenSize.isSmallDevice) ? <MobileNavBar /> : <MainNavHeader />}
        </Suspense>
    )
}
