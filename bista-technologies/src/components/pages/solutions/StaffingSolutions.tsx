import { motion } from "framer-motion";

export default function StaffingSolutions() {
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vw' }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}

        >
            <div>
                <img className="w-full mt-5 fade-in-up" src="https://www.bistatechnologies.com/static/staffsol(1).jpg" alt="Staffing Solutions Banner" />
            </div>
            <div className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center">
                <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
                Our Staffing Solutions                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/staffsol(2).jpg" alt="Permanent Staffing" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Permanent Staffing:</div>
                        <p className="text-gray-700 text-base">
                            We help businesses build their core teams by providing top-notch candidates for permanent positions. Our extensive network and rigorous vetting process ensure that you find the perfect fit for long-term success.
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/staffsol(3).jpeg" alt="Temporary Staffing" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Temporary Staffing:</div>
                        <p className="text-gray-700 text-base">
                            Our temporary staffing solutions offer the flexibility to meet short-term staffing needs. Whether you require seasonal workers or temporary replacements, we provide qualified candidates who can hit the ground running.
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/staffsol(4).jpg" alt="Project-Based Staffing" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Project-Based Staffing:</div>
                        <p className="text-gray-700 text-base">
                            Our project-based staffing services provide you with skilled professionals for specific projects. We ensure that you have the right talent to meet your project's requirements and deliver successful outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
