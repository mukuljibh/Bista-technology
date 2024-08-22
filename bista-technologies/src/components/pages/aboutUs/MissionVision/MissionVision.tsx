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
                    ))}
                </div>
            </div>

            <div className="mission-vision-cards flex flex-col md:flex-row gap-4">
                {Missionandvision.map(({ heading, imgsrc, description }, index) => (
                    <a
                        key={index}
                        className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2 w-full md:w-1/2"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="w-32 h-32 rounded-full md:ml-4"
                                src={imgsrc}
                                alt={heading}
                            />
                        </div>
                        <div className="flex flex-col justify-center p-4 leading-normal text-center md:text-left">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                {heading}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700">
                                {description}
                            </p>
                        </div>
                    </a>
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
                        <a
                            key={index}
                            href="#"
                            className={`flex flex-col items-center ${color} border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2 w-full md:w-1/5`}
                        >
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    {heading}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700">
                                    {description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
