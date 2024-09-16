import { useLocation } from "react-router-dom"
import NewsLetter from "../../pages/homepage/newsletter/NewsLetter"
function FooterWrapper({ children }: { children: React.ReactNode }) {
    const { pathname } = useLocation()
    return (
        <div>
            {pathname == "/" ? <NewsLetter /> : <img className="lg:h-[32rem] w-full" src="/banner.gif" />}
            {children}
        </div >

    )
}
export default FooterWrapper