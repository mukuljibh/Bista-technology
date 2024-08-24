import { MissionVisionconfig, Missionandvision, WhyChooseUs } from "./config/MissionVisionconfig";
import useObserver from "../../../../shared/hooks/useObserver";
import MainCard from "../../../../ui/merged_components/service-cards/mainCard/MainCard";
import { motion } from "framer-motion";

export default function MissionVision() {
    useObserver('ITStaffingCards', 0.5);

    return (
        <motion.div
            initial={{ translateX: "-100vw" }}
            animate={{ translateX: "0" }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
            className="page-body mt-10 bg-white shadow-lg rounded-lg"
        >
            <div className="img-container flex-col items-center pb-10">
                <img
                    src="https://www.bistatechnologies.com/static/1.jpg"
                    className="mx-auto w-full"
                    style={{ maxHeight: "500px" }}
                    alt="Company Image"
                />
            </div>

            <div className="info-container w-full">
                <div className="info-cards">
                    {MissionVisionconfig.map(({ heading1, heading2, imageSrc, description, cardCss, headingCss }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, translateY: -20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <MainCard
                                heading1={heading1}
                                heading2={heading2}
                                imageSrc={imageSrc}
                                description={description}
                                cardCss={cardCss}
                                headingCss={headingCss}
                                observingClass={"ITStaffingCards"}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mission-vision-cards flex flex-col md:flex-row gap-4">
                {Missionandvision.map(({ heading, imgsrc, description }, index) => (
                    <motion.a
                        key={index}
                        initial={{ opacity: 0, translateY: -20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2 w-full md:w-1/2"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex-shrink-0"
                        >
                            <img
                                className="w-32 h-32 rounded-full md:ml-4"
                                src={imgsrc}
                                alt={heading}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                            className="flex flex-col justify-center p-4 leading-normal text-center md:text-left"
                        >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                {heading}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700">
                                {description}
                            </p>
                        </motion.div>
                    </motion.a>
                ))}
            </div>

            <div className="p-4">
                <div className="heading mb-4 mt-10">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
                        Why Choose Us:
                    </h5>
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-4">
                    {WhyChooseUs.map(({ heading, description, color }, index) => (
                        <motion.a
                            key={index}
                            initial={{ opacity: 0, translateY: -20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            href="#"
                            className={`flex flex-col items-center ${color} border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2 w-full md:w-1/5`}
                        >
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col justify-between p-4 leading-normal"
                            >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    {heading}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700">
                                    {description}
                                </p>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
