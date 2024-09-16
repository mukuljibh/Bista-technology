import useObserver from "../../../../shared/hooks/useObserver"
import { ourServicesData } from "../config/homepage.config"
import Card from "../../../../ui/merged_components/service-cards/Card"
import AnimationCom from "./AnimationCom"
import "./animation.css"
export default function OurServices() {
    const { isCardVisible } = useObserver('ourServices', 0.5, ['opacity-100'])
    return (
        <section className="ourServices relative flex flex-wrap gap-16 justify-center py-32 bg-purple-50 lg:px-20 px-5 ">
            {/* Background floating objects */}
            {isCardVisible && <AnimationCom />}
            {/* Background Gradient design that is white cicle at the left top most */}
            <div className="lg:block hidden absolute w-2/5 h-3/5 rounded-full  -top-32  -left-32 bg-gradient-to-r from-pink-50 to-white" aria-hidden="true"></div>
            {/* Title and Description */}
            <header className="space-y-4 z-10 ">
                <h2 className="lg:text-3xl text-4xl font-semibold">OUR SERVICES</h2>
                <p className="lg:text-md text-md text-slate-600">
                    By leveraging cutting-edge technology, we continuously innovate our IT services,
                    IT staffing services in USA, and workforce management solutions to assist clients
                    in achieving their business objectives.
                </p>
            </header>
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

        </section >
    )
}