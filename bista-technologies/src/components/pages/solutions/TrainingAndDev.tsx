import { motion } from 'framer-motion'
``
export default function TrainingAndDev() {
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
        >
            <div>
                <img className="w-full mt-5 fade-in-up" src="https://www.bistatechnologies.com/static/14.png" alt="Lead Generation Banner" />
            </div>
            <div className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center">
                <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
                    Our Training and Development Solutions                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="max-w-sm rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/training(2).jpg" alt="B2B Lead Generation" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Employee Onboarding:</div>
                        <p className="text-gray-700 text-base">
                        We provide comprehensive onboarding programs that help new hires integrate seamlessly into your organization. Our onboarding solutions ensure that new employees are equipped with the knowledge and tools they need to succeed from day one.                        </p>                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/training(3).jpg" alt="Market Research" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Skills Development:</div>
                        <p className="text-gray-700 text-base">
                        Our training programs are designed to enhance the skills of your workforce, covering a wide range of areas including technical skills, soft skills, leadership development, and more. We tailor our training solutions to meet the specific needs of your organization.                        </p>                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/training(4).jpg" alt="B2B Lead Generation" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Leadership Training:</div>
                        <p className="text-gray-700 text-base">
                        We offer specialized leadership training programs aimed at developing the next generation of leaders within your organization. Our programs focus on building essential leadership qualities, strategic thinking, and effective management skills.                        </p>                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/training(5).jpg" alt="B2B Lead Generation" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Compliance Training:</div>
                        <p className="text-gray-700 text-base">
                        We provide compliance training solutions to ensure that your employees are aware of and adhere to relevant laws and regulations. Our training programs cover areas such as workplace safety, data protection, and industry-specific regulations.                        </p>                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/training(6).jpg" alt="B2B Lead Generation" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Continuous Learning: </div>
                        <p className="text-gray-700 text-base">
                        Our continuous learning programs are designed to foster a culture of ongoing professional development within your organization. We offer a variety of training formats, including workshops, online courses, and seminars, to keep your employees engaged and up-to-date with the latest industry trends.
                        </p></div>                </div>
            </div>
        </motion.div>
    );
}
