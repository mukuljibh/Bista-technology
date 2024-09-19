import useObserver from "../../../../shared/hooks/useObserver"
import Card from "../../../../ui/merged_components/service-cards/Card"
import { healthCareConfig, healthcareCardsConfig } from "./config/healthCareConfig"
import { motion } from 'framer-motion'
import MainCard from "../../../../ui/merged_components/service-cards/mainCard/MainCard"
export default function HealthCareServices() {
    useObserver('healthCareCards', 0.4, ['opacity-100', 'gap-x-0'])
    const { isCardVisible } = useObserver('ex', 0.5, ['opacity-100', 'gap-0'])
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 ">
            <div className="space-y-10 lg:mb-16">
                <img className="w-full" src="/services/health-care/banner.jpg" />
                <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">Welcome to HealthCare Staffing</h1>
            </div>
            {healthCareConfig.map(({ heading1, heading2, image, description, cardCss, headingCss }, index) => {
                return (
                    <MainCard
                        key={index}
                        heading1={heading1}
                        heading2={heading2}
                        image={image}
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
        </motion.div >
    )
}