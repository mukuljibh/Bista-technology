import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StaffingSolutions() {
    const [inView, setInView] = useState(false);

    // Check if the component is in the viewport
    useEffect(() => {
        const handleScroll = () => {
            const staffingElement = document.getElementById('staffing-trigger');
            
            // Check if the element exists
            if (staffingElement) {
                const position = window.scrollY + window.innerHeight;
                const triggerPosition = staffingElement.offsetTop;

                if (position > triggerPosition) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            id="staffing-trigger"
            className="staffing-solutions-container"
        >
            <div>
                <motion.img
                    initial={{ opacity: 0, y: '-50px' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full mt-5 fade-in-up"
                    src="https://www.bistatechnologies.com/static/staffsol(1).jpg"
                    alt="Staffing Solutions Banner"
                />
            </div>
            <motion.div
                className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
                    Our Staffing Solutions
                </h1>
            </motion.div>
            <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-6 lg:justify-center lg:w-full">
                {[
                    {
                        title: "Permanent Staffing",
                        imgSrc: "https://www.bistatechnologies.com/static/staffsol(2).jpg",
                        description: "We help businesses build their core teams by providing top-notch candidates for permanent positions. Our extensive network and rigorous vetting process ensure that you find the perfect fit for long-term success."
                    },
                    {
                        title: "Temporary Staffing",
                        imgSrc: "https://www.bistatechnologies.com/static/staffsol(3).jpeg",
                        description: "Our temporary staffing solutions offer the flexibility to meet short-term staffing needs. Whether you require seasonal workers or temporary replacements, we provide qualified candidates who can hit the ground running."
                    },
                    {
                        title: "Project-Based Staffing",
                        imgSrc: "https://www.bistatechnologies.com/static/staffsol(4).jpg",
                        description: "Our project-based staffing services provide you with skilled professionals for specific projects. We ensure that you have the right talent to meet your project's requirements and deliver successful outcomes."
                    }
                ].map((card, index) => (
                    <motion.div
                        key={index}
                        className="max-w-md min-h-[400px] rounded overflow-hidden shadow-lg card fade-in-up lg:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-b-2 border-transparent hover:border-sky-900"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                        transition={{ duration: 0.6, delay: 0.5 + index }}
                    >
                        <img className="w-full h-48 object-cover" src={card.imgSrc} alt={card.title} />
                        <div className="px-6 py-8 flex flex-col justify-between h-full"> {/* Increased vertical padding */}
                            <div className="font-bold text-xl mb-2">{card.title}</div>
                            <p className="text-gray-700 text-base">{card.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
