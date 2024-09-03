import useObserver from "../../../../shared/hooks/useObserver"
import { ourServicesData } from "../config/homepage.config"
import Card from "../../../../ui/merged_components/service-cards/Card"
import "./animation.css"
export default function OurServices() {
    const { isCardVisible } = useObserver('ourServices', 0.5)
    return (
        <div className="ourServices relative flex flex-wrap gap-16 justify-center py-32 bg-purple-50 lg:px-20 px-5 ">
            <ul className='circles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="lg:block hidden absolute w-2/5 h-3/5 rounded-full  -top-32  -left-32 bg-gradient-to-r from-pink-50 to-white"></div>
            <div className="space-y-4 z-10 ">
                <h1 className="lg:text-3xl text-4xl font-semibold">OUR SERVICES</h1>
                <p className="lg:text-md text-md text-slate-600">By leveraging cutting-edge technology, we continuously innovate our IT services, IT staffing services in USA, and workforce management solutions to assist clients in achieving their business objectives.</p>
            </div>
            {isCardVisible && ourServicesData.map((data, index) => {
                return <Card
                    key={index}
                    heading={data.heading}
                    description={data.description}
                    imgSrc={data.image.imageSrc}
                    alt={data.image.alt}
                    css={data.css}
                    animationTime={data.animationTime} />
            })}
        </div>
    )
}