import { motion } from "framer-motion";

export default function MissionVision() {
    return (
        <>
            <motion.div
                initial={{ translateX: '-100vw' }}
                animate={{ translateX: '0' }}
                exit={{ transition: { duration: 0.2 } }}
                transition={{ duration: 0.6 }}
                className="page-body mt-10 bg-white shadow-lg rounded-lg ">
                <div className="img-container flex-col items-center pb-10">
                    <img
                        src="https://www.bistatechnologies.com/static/1.jpg"
                        className="mx-auto w-full  transition-transform duration-300 ease-in-out transform hover:scale-110"
                        style={{ maxHeight: '500px' }} 
                    />
                </div>
                <div className="info-container">
                    <div className="info-cards">
                        <a href="#" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2">
                            <img className="object-cover w-full rounded-t-lg h-60 md:h-80 md:w-72 md:rounded-none md:rounded-l-lg" src="https://www.bistatechnologies.com/static/whoweare.jpg" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Who We Are</h5>
                                <p className="mb-3 font-normal text-gray-700">Established in 2023, Bista Technologies Inc. is a dynamic global staffing organization headquartered in Noida, India, with a mission to connect businesses with top-tier talent worldwide.</p>
                            </div>
                        </a>
                        <a href="#" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2">
                            <div className="flex flex-col justify-between p-4 leading-normal md:order-1">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Who We Are</h5>
                                <p className="mb-3 font-normal text-gray-700">Bista Technologies Inc. specializes in providing comprehensive staffing solutions tailored to the unique needs of businesses across industries and continents. From IT to healthcare, engineering, and beyond, we leverage our expertise to deliver customized staffing solutions that drive success for our clients.</p>
                            </div>
                            <img className="object-cover w-full h-60 md:h-80 md:w-72 md:rounded-none md:rounded-r-lg md:order-2" src="https://www.bistatechnologies.com/static/whatwedo.jpg" alt="" />
                        </a>
                        <a href="#" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2">
                            <img className="object-cover w-full rounded-t-lg h-60 md:h-80 md:w-72 md:rounded-none md:rounded-l-lg" src="https://www.bistatechnologies.com/static/ourapproach.jpg" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Our Approaches:</h5>
                                <p className="mb-3 font-normal text-gray-700">We believe in the power of personalized service and industry expertise. Our team of dedicated professionals works closely with each client to understand their specific requirements and deliver customized staffing solutions that drive success. With a focus on excellence, integrity, and innovation, we strive to exceed our clients' expectations at every turn.</p>
                            </div>
                        </a>
                    </div>
                    <div className="mission-vision-cards flex flex-col md:flex-row gap-4">
                        <a className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2 w-full md:w-1/2">
                            <div className="flex-shrink-0">
                                <img className="w-32 h-32 rounded-full md:ml-4" src="https://www.bistatechnologies.com/static/mission.png" alt="Mission" />
                            </div>
                            <div className="flex flex-col justify-center p-4 leading-normal text-center md:text-left">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mission</h5>
                                <p className="mb-3 font-normal text-gray-700">"At Bista Technologies Inc., our mission is to be the premier global partner for workforce solutions, empowering businesses across borders with top-tier talent. Through our commitment to excellence, innovation, and cultural sensitivity, we aim to connect organizations with the right people, at the right time, to drive sustainable growth and success in a dynamic world."</p>
                            </div>
                        </a>
                        <a className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2 w-full md:w-1/2">
                            <div className="flex-shrink-0">
                                <img className="w-32 h-32 rounded-full md:ml-4" src="https://www.bistatechnologies.com/static/company-vision-icon-T.png" alt="Vision" />
                            </div>
                            <div className="flex flex-col justify-center p-4 leading-normal text-center md:text-left">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Vision</h5>
                                <p className="mb-3 font-normal text-gray-700">"Bista Technologies Inc. envisions a world where talent knows no boundaries and opportunities abound for individuals and organizations alike. As a leading global staffing organization, we strive to break down barriers, transcend borders, and foster meaningful connections that transcend geographical limitations. By leveraging our international expertise, diverse networks, and unwavering dedication to quality, we aspire to be the trusted partner of choice for businesses seeking to build winning teams on a global scale."</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="p-4">
                    <div className="heading mb-4 mt-10">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Why Choose Us:</h5>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-4">
                        <a href="#" className="flex flex-col items-center bg-blue-400 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2 w-full md:w-1/5">
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Global Reach</h5>
                                <p className="mb-3 font-normal text-gray-700">With a presence in key markets around the world, we have the capacity to source talent internationally, ensuring our clients access the best candidates no matter where they are located.</p>
                            </div>
                        </a>
                        <a href="#" className="flex flex-col items-center bg-red-400 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2 w-full md:w-1/5">
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Industry Expertise</h5>
                                <p className="mb-3 font-normal text-gray-700">Our team comprises seasoned professionals with deep industry knowledge and expertise, allowing us to provide insightful guidance and tailored solutions to our clients across various sectors.</p>
                            </div>
                        </a>
                        <a href="#" className="flex flex-col items-center bg-green-400 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 m-2 w-full md:w-1/5">
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Commitment to Quality</h5>
                                <p className="mb-3 font-normal text-gray-700">We are committed to excellence in everything we do, from candidate sourcing to client service. Our dedication to quality ensures that our clients receive the highest standard of staffing solutions, every time.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
