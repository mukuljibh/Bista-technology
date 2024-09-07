import { mainCardsConfig, cardsConfig } from "./config/engServicesConfig"
import useObserver from "../../../../shared/hooks/useObserver"
import Card from "../../../../ui/merged_components/service-cards/Card"
import MainCard from "../../../../ui/merged_components/service-cards/mainCard/MainCard"
import { motion } from 'framer-motion'

export default function EngServices() {

    useObserver('EngServicesCards', 0.4, ['opacity-100', 'gap-x-1'])
    const { isCardVisible } = useObserver('engCards', 0.4, ['opacity-100'])

    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
            className=" bg-slate-50 ">
            <div className="space-y-10 lg:mb-16">
                <img className="w-full" src="/services/eng-services/1.webp" alt="eng-services banner" width="1920" height="600" />
                <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">Welcome to Engineering Staffing Solutions</h1>
            </div>
            {mainCardsConfig.map(({ heading1, heading2, image, description, cardCss, headingCss }, index) => {
                return (
                    <MainCard
                        key={index}
                        heading1={heading1}
                        heading2={heading2}
                        image={image}
                        description={description}
                        cardCss={cardCss}
                        headingCss={headingCss}
                        observingClass={"EngServicesCards"}
                    />
                )
            })}
            <div className="bg-purple-50 py-20 space-y-10">
                <h1 className="text-3xl text-gray-700 text-center font-semibold">Scale Up Your Team The Way You Want</h1>
                <div className="engCards  flex flex-wrap justify-evenly gap-5 lg:px-15 px-5 lg:space-y-0 space-y-10">
                    {isCardVisible && cardsConfig.map((item, index) => {
                        return <Card
                            key={index}
                            heading={item.heading}
                            description={item.description}
                            imgSrc={item.image.imageSrc}
                            alt={item.image.alt}
                            css={item.css}
                            animationTime={item.animationTime} />
                    })}
                </div>
            </div>
            <img className="lg:h-[32rem] w-full" src="/banner.gif" />
        </motion.div>
    )
}