import { motion } from 'framer-motion';

export default function OurStoryLine() {
    return (
        <motion.div
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: '0' }}
            exit={{ opacity: 0, x: '100vw' }}
            transition={{ duration: 0.6 }}
            className="container"
        >
            <motion.div
                className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text">
                    Our Story
                </h1>
            </motion.div>

            <div className="max-w-screen-xl mx-auto shadow-md p-5 sm:p-10 md:p-16">
                <div className="rounded overflow-hidden shadow-xl flex flex-col max-w-xl mx-auto">
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img className="w-full" src="https://www.bistatechnologies.com/static/ourstory.jpg" alt="Sunset in the mountains" />
                    </motion.a>
                    <motion.div
                        className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="#" className="font-semibold text-lg inline-block  hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                            Bista Technologies
                        </a>
                        <p className="text-gray-500  text-sm">
                            Founded in 2023 by Vipul Bhatia and his esteemed colleagues, Bista Technologies Inc. is revolutionizing global staffing and recruitment. With expertise in strategic workforce planning and global talent acquisition, we drive innovation and collaboration, empowering businesses and individuals to reach their full potential. Under Vipul Bhatia's visionary leadership, we remain committed to shaping the future of work in an ever-evolving global economy.
                        </p>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-gray-600 to-gray-400 bg-clip-text"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Our Growth Path
            </motion.div>

            <div className="journey relative max-w-5xl mx-auto my-20">
                <div className="timeline-line absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2 z-0"></div>

                <motion.div
                    className="container1 left-container rounded-md border-0 relative w-1/3 bg-white mb-10 ml-0 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="text-box p-6 relative rounded-lg text-base">
                        <h2>August</h2>
                        <small>2023</small>
                        <p>Bista Technologies founded with a single member in the organization.</p>
                        <span className="right-containerarrow"></span>
                    </div>
                </motion.div>

                <motion.div
                    className="container1 right-container rounded-md border-0 p-0 relative w-1/3 bg-white mb-10 ml-auto shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="text-box p-6 relative rounded-lg text-base">
                        <h2 className="fontweight-100 mb-4">November</h2>
                        <small>2023</small>
                        <p>
                            Acquired very 1st Staffing Assignment with Dubai client. Began operations in Noida.
                            Staff Augmentation
                            Permanent and Contractual Staffing
                            Project Based Consulting
                        </p>
                        <span className="left-containerarrow"></span>
                    </div>
                </motion.div>

                <motion.div
                    className="container1 mr-3 left-container  rounded-md relative w-1/3 shadow-md bg-white mb-10 ml-0 transition-transform transform hover:scale-105 hover:border-gray-500 hover:shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="text-box p-6 relative rounded-lg text-base">
                        <h2>January</h2>
                        <small>2024</small>
                        <p>Established 100+ consultant database across UAE. Provided services to 10+ clients across UAE.</p>
                        <span className="right-containerarrow"></span>
                    </div>
                </motion.div>

                <motion.div
                    className="container1 right-container rounded-md border-0 p-0 relative w-1/3 bg-white mb-10 ml-auto shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="text-box p-6 relative rounded-lg text-base">
                        <h2 className="fontweight-100 mb-4">April</h2>
                        <small>2024</small>
                        <p>Expanding into USA.</p>
                        <span className="left-containerarrow"></span>
                    </div>
                </motion.div>

                <motion.div
                    className="container1 mr-3 left-container   rounded-md relative w-1/3 bg-white mb-10 ml-0 transition-transform shadow-md transform hover:scale-105 hover:border-gray-500 hover:shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="text-box p-6 relative rounded-lg text-base">
                        <h2>May</h2>
                        <small>2024</small>
                        <p>
                            Business expansion with multiple clients across USA for staffing services and contingent workforce solutions.
                            Placed 50+ consultants across 4 top industries:
                            Manufacturing and Engineering
                            Healthcare, Pharmaceuticals & Life Sciences
                            BFSI and Telecom
                            IT and Technology
                        </p>
                        <span className="right-containerarrow"></span>
                    </div>
                </motion.div>

                <motion.a
                    href="#"
                    className="flex flex-col md:flex-row items-center bg-gradient-to-r from-white to-blue-100 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <img className="object-cover w-full h-56 md:w-56 md:ml-2 md:h-full" src="https://www.bistatechnologies.com/static/key%20highlights.jpg" alt="Key Highlights" />
                    <div className="flex flex-1 flex-col justify-between p-6 text-black">
                        <h5 className="text-3xl font-semibold mb-4">Key Highlights</h5>
                        <p className="text-lg leading-relaxed">
                            Bista Technologies Inc. is a dynamic global staffing organization, founded in 2023 with a commitment to delivering exceptional staffing solutions worldwide.
                            As a 100% global staffing entity, we specialize in providing comprehensive staffing solutions tailored to the unique needs of businesses across various industries and geographies.
                            Our team of experienced specialists serves as your strategic talent partner, driving enhanced operational effectiveness and increased productivity.
                            Today, Bista Technologies Inc. stands as a testament to the power of perseverance and vision. From its humble beginnings with one team member, the company has grown to a workforce of over 100 dedicated professionals, spanning multiple continents and serving clients around the globe.
                        </p>
                    </div>
                </motion.a>
            </div>
        </motion.div>
    );
}
