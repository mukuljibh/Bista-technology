import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MainCard from "../../../../ui/merged_components/service-cards/mainCard/MainCard";
import useObserver from "../../../../shared/hooks/useObserver";
import { MissionVisionconfig, Missionandvision } from "./config/MissionVisionconfig";

export default function MissionVision() {
    useObserver('mission-vision', 0.4, ['opacity-100', 'gap-x-0'])
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 ">
            <Helmet>
                <title>
                    Mission & Vision
                </title>
            </Helmet>

            <div className="space-y-10 lg:mb-16">
                <img className="w-full" src="/about-us/mission-vision/1.webp" />
                <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">About Bista Technologies Inc</h1>

            </div>

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
            <div className="lg:flex justify-center gap-5 lg:px-24 px-5  mb-28 lg:mt-4 mt-10 lg:space-y-0 space-y-10">
                {Missionandvision.map((item, index) => {
                    return (
                        <div key={index} className="shadow-md rounded-xl lg:w-1/3 space-y-3  p-4 hover:lg:-translate-y-5 transition-all duration-1000 ease-out  ">
                            <div className="w-14">
                                <img className="w-full h-full" src={item.image.imageSrc} alt={item.image.alt} />
                            </div>

                            <h1 className="font-bold  text-lg text-blue-950 tracking-wider">{item.heading}</h1>
                            <p className="text-xs tracking-wider text-justify">{item.description}</p>
                        </div>
                    )
                })}
            </div>
            <img className="lg:h-[32rem] w-full" src="/banner.gif" />

        </motion.div >
    );
}
