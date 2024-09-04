import { useEffect, useState } from "react";
import { MissionVisionconfig, Missionandvision, WhyChooseUs } from "./config/MissionVisionconfig";
import useObserver from "../../../../shared/hooks/useObserver";
import MainCard from "../../../../ui/merged_components/service-cards/mainCard/MainCard";
import { motion } from "framer-motion";
import "../../homepage/our-services/animation.css";

export default function MissionVision() {
    useObserver('ITStaffingCards', 0.5);
    
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newScale = Math.max(1 - scrollY / 500, 0.8); 
            setScale(newScale);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            initial={{ translateX: "-100vw" }}
            animate={{ translateX: "0" }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="page-body mt-10 bg-white shadow-lg rounded-lg"
        >
            <div className="img-container flex-col items-center pb-10">
                <motion.img
                    src="https://www.bistatechnologies.com/static/1.jpg"
                    className="mx-auto w-full"
                    style={{ maxHeight: "500px", scale }}
                    alt="Company Image"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>
            <div className="bg-white  p-6 rounded-lg shadow-md mb-4 w-full flex items-center justify-center">
            <h1 className="text-center text-sky-600 font-sans text-5xl font-semibold leading-tight tracking-normal">
            About Us
                </h1>
            </div>
            <div className="info-container w-full">
                <div className="info-cards">
                    
                    {MissionVisionconfig.map(({ heading1, heading2, imageSrc, description, cardCss, headingCss }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, translateY: 30 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
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
                        initial={{ opacity: 0, translateY: 30 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.2,
                            ease: "easeOut",
                        }}
                        className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:border-2 hover:border-blue-400 ease-in-out hover:bg-blue-50 transition-colors duration-300 m-2 w-full md:w-1/2"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.3,
                                ease: "easeOut",
                            }}
                            className="flex-shrink-0"
                        >
                             <img
        className="w-32 h-32 rounded-full transition-transform duration-300 ease-in-out md:ml-4"
        src={imgsrc}
        alt={heading}
    />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.4,
                                ease: "easeOut",
                            }}
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
                    <h5 className="text-2xl font-bold tracking-tight text-sky-700 text-center">
                        Why Choose Us:
                    </h5>
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-4">
                    
                    {WhyChooseUs.map(({ heading, description, color }, index) => (
                        <motion.a
                            key={index}
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                            href="#"
                            className={`flex flex-col items-center ${color} border border-gray-200 rounded-lg shadow-lg  m-2 w-full md:w-1/5`}
                        >
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.3,
                                    ease: "easeOut",
                                }}
                                className="flex flex-col justify-between p-4 leading-normal"
                            >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight ">
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
