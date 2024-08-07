import { motion } from 'framer-motion'
export default function OurLeaders() {

    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
        >

            <div className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center">
                <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text">
                    About Us
                </h1>
            </div>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                    <a href="#">
                        <img className="w-full" src="https://www.bistatechnologies.com/static/ourleader2.jpg" alt="Sunset in the mountains" />
                    </a>
                    <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                        <a href="#"
                            className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Leadership and Achievement:
                        </a>
                        <p className="text-gray-500 text-sm">
                            Vipul's most notable achievement lies in his ability to cultivate a high-performing team of over 100 professionals at Bista Technologies. Through his exceptional leadership and mentorship, he has inspired each team member to give their utmost, enabling the organization to achieve unparalleled success. Vipul firmly believes that when every individual contributes their best effort, the organization as a whole can achieve exponential growth – a philosophy reflected in his vision to see Bista Technologies achieve its full potential, akin to 10,000%.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-10">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://www.bistatechnologies.com/static/LEADER-PIC-WITH%20LIGHT-BLUE.png" alt="Vipul Bhatia" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Vipul Bhatia</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Co-founder and Managing Director, Bista Technologies Inc.</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

