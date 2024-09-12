import { motion } from 'framer-motion';
import { OurLeadersAchivement, OurLeader } from './config/OurLeaders';

export default function OurLeaders() {
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vw' }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
        >
            <div className="bg-white mt-10  p-6 rounded-lg shadow-md mb-4 w-full flex items-center justify-center">
            <h1 className="text-center text-sky-600 font-sans text-5xl font-semibold leading-tight tracking-normal">
            {OurLeadersAchivement[0].title}
                </h1>
            </div>

            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                    <a href="#" className="block">
                        <img
                            className="w-full object-cover h-64 md:h-80 lg:h-96 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                            src={OurLeadersAchivement[0].imgsrc}
                            alt="Leadership"
                        />
                    </a>
                    <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10 rounded-lg shadow-lg">
                        <a
                            href="#"
                            className="font-semibold text-lg inline-block text-sky-600 hover:text-sky-400 transition duration-500 ease-in-out inline-block mb-2"
                        >
                            {OurLeadersAchivement[0].heading}
                        </a>
                        <p className="text-gray-500 text-sm">
                            {OurLeadersAchivement[0].description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-10">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex justify-end px-4 pt-4">
                    </div>
                    <div className="flex flex-col items-center p-5 pb-10">
                        <img
                            className="w-32 h-32  rounded-full"
                            src={OurLeader[0].imgsrc}
                            alt={OurLeader[0].leadername}
                        />
                        <h5 className="mb-1 text-xl font-medium text-sky-600">
                            {OurLeader[0].leadername}
                        </h5>
                        <span className="text-sm text-gray-500">
                            {OurLeader[0].description}
                        </span>
                    </div>
                </div>
            </div>
            <img className="lg:h-[32rem] w-full" src="/banner.gif" />

        </motion.div>
    );
}
