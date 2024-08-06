import { itStaffingConfig, itCardsConfig } from "./config/itStaffingConfig"
import useObserver from "../../../../shared/hooks/useObserver"
import Card from "../../../../ui/merged_components/service-cards/Card"
export default function ItStaffing() {
    useObserver('itStaffingCards', 0.5)
    const { isCardVisible } = useObserver('itCards', 0.5)
    return (
        <div className="space-y-10 bg-slate-50 ">

            <div className="space-y-20 mb-16">
                <img className="w-full " src="https://www.bistatechnologies.com/static/banner-it-staffing.jpg" />
                <h1 className="text-4xl  font-semibold text-center text-gray-700">IT Resource Augmentation</h1>
            </div>
            {itStaffingConfig.slice(0, 3).map(({ heading1, heading2, imageSrc, description, cardCss, headingCss }, index) => {
                return (<div key={index} className={`${cardCss}  min-h-screen itStaffingCards opacity-0 duration-1000 delay-100 items-center justify-evenly  px-5 space-y-4 lg:h-96 transition-all`}>
                    <div className="lg:w-2/5 p-14 h-full  ">
                        <img className="w-full lg:h-full object-cover rounded-lg " src={imageSrc} />
                    </div>
                    <div className=" max-w-2xl space-y-3">
                        <h1 className={`inline px-4 py-1 rounded-2xl font-normal ${headingCss}`}>{heading1}</h1>
                        <h1 className="text-2xl text-sky-700 font-bold">{heading2}</h1>
                        <p className="text-md text-gray-600 ">{description}</p>
                    </div>
                </div>)
            })}
            <div className="bg-purple-50 py-20 space-y-10">
                <h1 className="text-3xl text-gray-700 text-center font-semibold">Scale Up Your Team The Way You Want</h1>
                <div className="itCards  flex flex-wrap justify-evenly gap-5 lg:px-15 px-10 lg:space-y-0 space-y-10">
                    {isCardVisible && itCardsConfig.map((item, index) => {
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

            {itStaffingConfig.slice(3).map(({ heading1, heading2, imageSrc, description, cardCss, headingCss }, index) => {
                return (<div key={index} className={`${cardCss}  min-h-screen itStaffingCards opacity-0 duration-1000 delay-100 items-center justify-evenly px-5 space-y-4 lg:h-96 transition-all`}>
                    <div className="lg:w-2/5 h-full p-14 ">
                        <img className="w-full lg:h-full object-cover rounded-lg " src={imageSrc} />
                    </div>
                    <div className=" max-w-2xl space-y-3">
                        <h1 className={`inline px-4 py-1 rounded-2xl font-normal ${headingCss}`}>{heading1}</h1>
                        <h1 className="text-2xl text-sky-700 font-bold">{heading2}</h1>
                        <p className="text-md text-gray-600 ">{description}</p>
                    </div>
                </div>)
            })}
            <img className="h-96 w-full" src="/banner.gif" />
        </div>
    )
}