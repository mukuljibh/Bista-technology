import { nonItStaffingConfig, nonItCardsConfig } from "./config/nonItStaffingConfig"
import useObserver from "../../../../shared/hooks/useObserver"
import Card from "../../../../ui/merged_components/service-cards/Card"
import MainCard from "../../../../ui/merged_components/service-cards/mainCard/MainCard"
import { motion } from 'framer-motion'
import { Helmet } from "react-helmet";

export default function NonItStaffing() {
    useObserver('ITStaffingCards', 0.4, ['opacity-100', 'gap-x-0'])
    const { isCardVisible } = useObserver('ITCards', 0.5, ['opacity-100', 'gap-0'])
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 ">
            <Helmet>
                <title>
                    Non-IT Staffing Solution
                </title>
            </Helmet>
            <div className="space-y-10 lg:mb-16">
                <img className="w-full " src="https://www.bistatechnologies.com/static/12.jpg" />
                <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">Innovative Staffing for the Future of Your Business
                </h1>
            </div>
            {nonItStaffingConfig.slice(0, 3).map(({ heading1, heading2, image, description, cardCss, headingCss }, index) => {
                return (
                    <MainCard
                        key={index}
                        heading1={heading1}
                        heading2={heading2}
                        image={image}
                        description={description}
                        cardCss={cardCss}
                        headingCss={headingCss}
                        observingClass={"ITStaffingCards"}
                    />
                )
            })}
            <div className="bg-purple-50 py-20 space-y-10">
                <div className="space-y-2">
                    <h1 className="text-3xl text-gray-700 text-center font-semibold">Measuring and Enhancing Team Performance </h1>
                    <h1 className="text-lg text-gray-700 text-center">Enjoy seamless access to a vast pool of qualified Non-IT professionals with our expert staff augmentation services.</h1>
                </div>

                <div className="ITCards  flex flex-wrap justify-evenly gap-5 lg:px-15 px-10 lg:space-y-0 space-y-10">
                    {isCardVisible && nonItCardsConfig.map((item, index) => {
                        return <Card
                            key={index}
                            heading={item.heading}
                            description={item.description}
                            imgSrc={item.imageSrc}
                            alt="non IT staffing logo"

                            css={item.css}
                            animationTime={item.animationTime} />
                    })}
                </div>
            </div>

            {nonItStaffingConfig.slice(3).map(({ heading1, heading2, image, description, cardCss, headingCss }, index) => {
                return (
                    <MainCard
                        key={index}
                        heading1={heading1}
                        heading2={heading2}
                        image={image}
                        description={description}
                        cardCss={cardCss}
                        headingCss={headingCss}
                        observingClass={"ITStaffingCards"}
                    />
                )
            })}
            <img className="lg:h-[32rem] w-full" src="/banner.gif" />
        </motion.div>
    )
}