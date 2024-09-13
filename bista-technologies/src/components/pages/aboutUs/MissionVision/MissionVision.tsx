import { motion } from "framer-motion";
import MainCard from "../../../../ui/merged_components/service-cards/mainCard/MainCard";
import useObserver from "../../../../shared/hooks/useObserver";
import { missionStatement, MissionVisionconfig, offeringsAndStrategy } from "./config/MissionVisionconfig";
import OfferingsAndStrategy from "./offering-and-startegy/OfferingsAndStrategy";
import MissionStatement from "./mission-statement/MissionStatement";

export default function MissionVision() {
    useObserver('mission-vision', 0.4, ['opacity-100', 'gap-x-0'])
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
        >
            <div className="space-y-10 lg:mb-16">
                <img className="w-full" src="/about-us/mission-vision/1.webp" />
                <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">About Bista Technologies Inc</h1>
            </div>
            <div className="bg-red-50 py-1">
                {MissionVisionconfig.map(({ heading1, heading2, image, description, cardCss, headingCss }, index) => {
                    return (
                        <MainCard
                            key={index}
                            heading1={heading1}
                            heading2={heading2}
                            image={image}
                            description={description}
                            cardCss={cardCss}
                            headingCss={headingCss}
                            observingClass={"mission-vision"}
                        />
                    )
                })}
                <div className="lg:flex gap-16 lg:mx-24 mx-5 lg:space-y-0 space-y-10 my-20 justify-evenly text-justify ">
                    {missionStatement.map((item, index) => {
                        return (
                            <MissionStatement key={index} heading={item.heading} description={item.description} image={item.image} />
                        )
                    })}
                </div>
            </div>
            <div className="space-y-20 my-28">
                <h1 className="text-center text-4xl font-semibold"> Why choose Us ?</h1>
                <div className="lg:flex justify-center gap-5 lg:px-24 px-5 lg:mt-4 mt-10 lg:space-y-0 space-y-10">
                    {offeringsAndStrategy.map((item, index) => {
                        return (
                            <OfferingsAndStrategy key={index} heading={item.heading} description={item.description} image={item.image} />
                        )
                    })}
                </div>
            </div>
            <img className="lg:h-[32rem] w-full" src="/banner.gif" />

        </motion.div >
    );
}
