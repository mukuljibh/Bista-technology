import { motion } from 'framer-motion'

export default function StaffAugmentation() {
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
        >
            <div>
                <img className="w-full mt-5 fade-in-up" src="https://www.bistatechnologies.com/static/staffaug(1).jpg" alt="Lead Generation Banner" />
            </div>
            <div className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center">
                <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
                    Our Staff Augmentation Solutions
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/staffaug(2).jpg" alt="B2B Lead Generation" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">IT Staff Augmentation:</div>
                        <p className="text-gray-700 text-base">
                            We provide businesses with highly skilled IT professionals who can seamlessly integrate into existing teams to support projects, fill skill gaps, and enhance productivity. Whether you need developers, system analysts, or project managers, we have the talent to meet your needs.
                        </p>                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/staffaug(3).jpg" alt="Market Research" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Technical Staff Augmentation:</div>
                        <p className="text-gray-700 text-base">
                            Our technical staff augmentation services supply experts in engineering, data analysis, and other technical fields. These professionals can be brought on board to assist with specific projects, manage peak workloads, or provide specialized knowledge.
                        </p>                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/staffaug(4).jpeg" alt="B2B Lead Generation" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Operational Staff Augmentation:</div>
                        <p className="text-gray-700 text-base">
                            We offer operational staff augmentation services to help businesses enhance their day-to-day operations. From administrative support to customer service, our professionals are ready to step in and ensure your operations run smoothly.
                        </p>                    </div>
                </div>

                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/staffaug(5).jpeg" alt="B2B Lead Generation" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Strategic Staff Augmentation:</div>
                        <p className="text-gray-700 text-base">
                            Our strategic staff augmentation solutions are designed to provide senior-level professionals and consultants who can offer strategic insights and drive business initiatives. These experts can help with strategic planning, change management, and other high-level functions.                        </p>                    </div>
                </div>
            </div>
        </motion.div>
    );
}
