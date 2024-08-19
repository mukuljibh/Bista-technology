import { motion } from 'framer-motion';

export default function OurStoryLine() {
    return (
        <motion.div
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: '0' }}
            exit={{ opacity: 0, x: '100vw' }}
            transition={{ duration: 0.6 }}
            className="container1"
        >
            <motion.div
                className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-center font-sans text-5xl font-semibold text-sky-600">
                    Our Story
                </h1>
            </motion.div>

            <motion.div
                className="max-w-screen-xl mx-auto shadow-md p-5 sm:p-10 md:p-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="rounded overflow-hidden shadow-xl flex flex-col max-w-xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <a href="#">
                        <img className="w-full" src="https://www.bistatechnologies.com/static/ourstory.jpg" alt="Sunset in the mountains" />
                    </a>
                    <motion.div
                        className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out text-sky-600 mb-2">
                            Bista Technologies
                        </a>
                        <p className="text-gray-500 text-sm">
                            Founded in 2023 by Vipul Bhatia and his esteemed colleagues, Bista Technologies Inc. is revolutionizing global staffing and recruitment...
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-sky-600 to-gray-400 bg-clip-text"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Our Growth Path
            </motion.div>

            <div className="journey relative max-w-5xl mx-auto my-20">
                <div className="timeline-line absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2 z-0"></div>

                {[
                    {
                        month: "August",
                        year: "2023",
                        text: "Bista Technologies founded with a single member in the organization.",
                    },
                    {
                        month: "November",
                        year: "2023",
                        text: "Acquired very 1st Staffing Assignment with Dubai client...",
                    },
                    {
                        month: "January",
                        year: "2024",
                        text: "Established 100+ consultant database across UAE...",
                    },
                    {
                        month: "April",
                        year: "2024",
                        text: "Expanding into USA.",
                    },
                    {
                        month: "May",
                        year: "2024",
                        text: "Business expansion with multiple clients across USA...",
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className={`container1 ${
                            index % 2 === 0 ? 'left-container' : 'right-container'
                        } rounded-md border-0 relative w-1/3 bg-white mb-10 ${
                            index % 2 === 0 ? 'ml-0' : 'ml-auto'
                        } shadow-md transition-transform transform hover:scale-110 hover:shadow-xl`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="text-box p-6 relative rounded-lg text-base">
                            <h2 className='text-sky-600'>{item.month}</h2>
                            <small className='text-sky-400'>{item.year}</small>
                            <p>{item.text}</p>
                            <span
                                className={`${
                                    index % 2 === 0 ? 'right-containerarrow' : 'left-containerarrow'
                                }`}
                            ></span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
    className="flex flex-col md:flex-row items-center    rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full mb-10"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
>
    <img
        className="object-cover w-full h-64 md:w-64 md:ml-4 md:h-full"
        src="https://www.bistatechnologies.com/static/key%20highlights.jpg"
        alt="Key Highlights"
    />
    <div className="flex flex-1 flex-col justify-between p-8 text-gray-800">
        <h5 className="text-3xl font-semibold text-sky-600  mb-4">Key Highlights</h5>
        <p className="text-lg leading-relaxed">
            Bista Technologies Inc. is a dynamic global staffing organization, founded in 2023 with a commitment to delivering exceptional staffing solutions worldwide...
        </p>
        <a
            href="#"
            className="mt-4 inline-block text-sky-600 hover:text-sky-600 transition duration-300 ease-in-out"
        >
            Learn more
        </a>
    </div>
</motion.div>

        </motion.div>
    );
}
