import useObserver from "../../../../shared/hooks/useObserver"
import Card from "../../../../ui/merged_components/service-cards/Card"
import { healthCareConfig, healthcareCardsConfig } from "./config/healthCareConfig"
export default function HealthCareServices() {
    useObserver('healthCareCards', 0.5)
    const { isCardVisible } = useObserver('ex', 0.5)
    return (
        <div className="space-y-10 bg-slate-50 ">
            <div className="space-y-20 mb-16">

                <img className="w-full " src="https://www.bistatechnologies.com/static/10.jpg" />
                <h1 className="text-4xl  font-semibold text-center text-gray-700">Welcome to HealthCare Staffing</h1>
            </div>
            {healthCareConfig.map(({ heading1, heading2, imageSrc, description, cardCss, headingCss }, index) => {
                return (<div key={index} className={`${cardCss} py-4 min-h-screen healthCareCards opacity-0 duration-1000 delay-100 items-center justify-evenly  px-5 space-y-4 lg:h-96 transition-all`}>
                    <div className="lg:w-2/5 p-14 h-full px-3">
                        <img className="w-full lg:h-full object-cover rounded-lg " src={imageSrc} />
                    </div>
                    <div className=" max-w-2xl space-y-3">
                        <h1 className={`inline px-4 py-1 rounded-2xl font-normal ${headingCss}`}>{heading1}</h1>
                        <h1 className="text-2xl text-sky-700 font-bold">{heading2}</h1>
                        <p className="text-md text-gray-600 ">{description}</p>
                    </div>
                </div>)
            })}
            <div className="bg-slate-50 py-20 space-y-10">
                <h1 className="text-3xl text-gray-700 text-center font-semibold">Why choose us?</h1>
                <div className="ex flex flex-wrap justify-evenly gap-5 lg:px-15 px-10 lg:space-y-0 space-y-10">
                    {isCardVisible && healthcareCardsConfig.map((item, index) => {
                        return <Card
                            key={index}
                            heading={item.heading}
                            description={item.description}
                            imgSrc={item.imageSrc}
                            css={item.css}
                            animationTime={item.animationTime} />
                    })}
                </div>
            </div>

            <img className="h-96 w-full" src="/banner.gif" />
        </div >
    )
}