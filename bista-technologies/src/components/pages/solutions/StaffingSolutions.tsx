import { motion } from "framer-motion";
import { StaffingSolution } from "./config/Staffingsolution";
export default function StaffingSolutions() {
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vw' }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
        >
            <div>
                <img
                    className="w-full mt-5 fade-in-up"
                    src="https://www.bistatechnologies.com/static/staffsol(1).jpg"
                    alt="Staffing Solutions Banner"
                />
            </div>
            <div className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center">
                <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
                    Our Staffing Solutions
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {StaffingSolution.map((card, index) => (
                    <motion.div
                        key={index}
                        className="max-w-md rounded hover-bg-sky-50 overflow-hidden shadow-lg card  hover:shadow-xl transition-shadow duration-300 hover:scale-105 hover:shadow-xl border-b-2 border-transparent hover:border-sky-900"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }} 
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            className="w-full"
                            src={card.imgSrc}
                            alt={card.title}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{card.title}</div>
                            <p className="text-gray-700 text-base">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
