import useObserver from "../../../../shared/hooks/useObserver"
import Card from "../../../../ui/merged_components/service-cards/Card"
import { healthCareConfig, healthcareCardsConfig } from "./config/healthCareConfig"
import { motion } from 'framer-motion'
import MainCard from "../../../../ui/merged_components/service-cards/mainCard/MainCard"
import { Helmet } from "react-helmet"
export default function HealthCareServices() {
    useObserver('healthCareCards', 0.5)
    const { isCardVisible } = useObserver('ex', 0.5)
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
            className="space-y-10 bg-slate-50 ">
            <Helmet>
                <title>
                    Healthcare Staffing Solution
                </title>
            </Helmet>
            <div className="space-y-20 mb-16">
                <img className="w-full " src="https://www.bistatechnologies.com/static/10.jpg" />
                <h1 className="text-4xl font-semibold text-center text-gray-700">Welcome to HealthCare Staffing</h1>
            </div>
            {healthCareConfig.map(({ heading1, heading2, imageSrc, description, cardCss, headingCss }, index) => {
                return (
                    <MainCard
                        key={index}
                        heading1={heading1}
                        heading2={heading2}
                        imageSrc={imageSrc}
                        description={description}
                        cardCss={cardCss}
                        headingCss={headingCss}
                        observingClass={"healthCareCards"}
                    />
                )
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
                            alt="healthcare services logo"

                            css={item.css}
                            animationTime={item.animationTime} />
                    })}
                </div>
            </div>
            <img className="lg:h-[32rem] w-full" src="/banner.gif" />
        </motion.div >
    )
}