import { itStaffingConfig, itCardsConfig } from "./config/itStaffingConfig"
import useObserver from "../../../../shared/hooks/useObserver"
import Card from "../../../../ui/merged_components/service-cards/Card"
import MainCard from "../../../../ui/merged_components/service-cards/mainCard/MainCard"
import { motion } from 'framer-motion'
import { Helmet } from "react-helmet";

export default function ItStaffing() {
    useObserver('ITStaffingCards', 0.5)
    const { isCardVisible } = useObserver('ITCards', 0.5)
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 ">
            <Helmet>
                <title>IT Staffing Solution</title>
            </Helmet>
            <div className="space-y-20 mb-16">
                <img className="w-full " src="https://www.bistatechnologies.com/static/banner-it-staffing.jpg" />
                <h1 className="text-4xl  font-semibold text-center text-gray-700">IT Resource Augmentation</h1>
            </div>
            {itStaffingConfig.map(({ heading1, heading2, imageSrc, description, cardCss, headingCss }, index) => {
                return (
                    <MainCard
                        key={index}
                        heading1={heading1}
                        heading2={heading2}
                        imageSrc={imageSrc}
                        description={description}
                        cardCss={cardCss}
                        headingCss={headingCss}
                        observingClass={"ITStaffingCards"}
                    />
                )
            })}
            <div className="bg-purple-50 py-20 space-y-10">
                <h1 className="text-3xl text-gray-700 text-center font-semibold">Scale Up Your Team The Way You Want</h1>
                <div className="ITCards flex flex-wrap justify-evenly gap-5 lg:px-15 px-10 lg:space-y-0 space-y-10">
                    {isCardVisible && itCardsConfig.map((item, index) => {
                        return <Card
                            key={index}
                            heading={item.heading}
                            description={item.description}
                            imgSrc={item.imageSrc}
                            alt="healthcare services logo"

                            css={item.css}
                            animationTime={item.animationTime} />
                    })}
                </div>
            </div>
            <img className="lg:h-[32rem] w-full" src="/banner.gif" />
        </motion.div>
    )
}