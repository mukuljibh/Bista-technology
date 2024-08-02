import React from 'react';

export default function OurStoryLine() {
    return (
        <>
            <div className="container">
                <div className="text-container">Our Growth Path</div>
                
                <div className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center">
                    <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text">
                        Our Story
                    </h1>
                </div>
                
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                    <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                        <a href="#">
                            <img className="w-full" src="https://www.bistatechnologies.com/static/ourstory.jpg" alt="Sunset in the mountains" />
                        </a>
                        <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                            <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                                Bista Technologies
                            </a>
                            <p className="text-gray-500 text-sm">
                                Founded in 2023 by Vipul Bhatia and his esteemed colleagues, Bista Technologies Inc. is revolutionizing global staffing and recruitment. With expertise in strategic workforce planning and global talent acquisition, we drive innovation and collaboration, empowering businesses and individuals to reach their full potential. Under Vipul Bhatia's visionary leadership, we remain committed to shaping the future of work in an ever-evolving global economy.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-gray-600 to-gray-400 bg-clip-text">
                    Our Growth Path
                </div>
                
                <div className="journey relative max-w-5xl mx-auto my-20">
                    <div className="timeline-line absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2 z-0"></div>
                    
                    <div className="container1 left-container rounded-md border-0 relative w-1/3 bg-gray-300 mb-10 ml-0">
                        <div className="text-box p-6 relative rounded-lg text-base">
                            <h2>August</h2>
                            <small>2023</small>
                            <p>Bista Technologies founded with a single member in the organization.</p>
                            <span className="right-containerarrow"></span>
                        </div>
                    </div>
                    
                    <div className="container1 right-container rounded-md border-0 p-0 relative w-1/3 bg-gray-300 mb-10 ml-auto">
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
                    </div>
                    
                    <div className="container1 mr-3 left-container border-0 rounded-md relative w-1/3 bg-gray-300 mb-10 ml-0">
                        <div className="text-box p-6 relative rounded-lg text-base">
                            <h2>January</h2>
                            <small>2024</small>
                            <p>Established 100+ consultant database across UAE. Provided services to 10+ clients across UAE.</p>
                            <span className="right-containerarrow"></span>
                        </div>
                    </div>
                    
                    <div className="container1 right-container rounded-md border-0 p-0 relative w-1/3 bg-gray-300 mb-10 ml-auto">
                        <div className="text-box p-6 relative rounded-lg text-base">
                            <h2 className="fontweight-100 mb-4">April</h2>
                            <small>2024</small>
                            <p>Expanding into USA.</p>
                            <span className="left-containerarrow"></span>
                        </div>
                    </div>
                    
                    <div className="container1 mr-3 left-container border-0 rounded-md relative w-1/3 bg-gray-300 mb-10 ml-0">
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
                    </div>
                    
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-sm shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-white-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full h-full md:w-48 md:h-full rounded-t-sm md:rounded-none md:rounded-s-sm ml-2" src="https://www.bistatechnologies.com/static/key%20highlights.jpg" alt="Key Highlights" />
                        <div className="flex flex-1 flex-col mt-10 justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray">Key Highlights</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Bista Technologies Inc. is a dynamic global staffing organization, founded in 2023 with a commitment to delivering exceptional staffing solutions worldwide.
                                As a 100% global staffing entity, we specialize in providing comprehensive staffing solutions tailored to the unique needs of businesses across various industries and geographies.
                                Our team of experienced specialists serves as your strategic talent partner, driving enhanced operational effectiveness and increased productivity.
                                Today, Bista Technologies Inc. stands as a testament to the power of perseverance and vision. From its humble beginnings with one team member, the company has grown to a workforce of over 100 dedicated professionals, spanning multiple continents and serving clients around the globe.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
