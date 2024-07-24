
import { useState } from "react"
import Cards from "./service-cards/ServiceCards"
import NewsLetter from "./newsletter/NewsLetter"
export default function Section() {

    const [cards] = useState([
        { heading: "Healthcare Staffing", description: "We specialize in recruiting healthcare professionals, including doctors, nurses, allied health staff, and administrative personnel. Our focus is on delivering candidates who are not only qualified but also committed to providing high-quality patient care.", imageSrc: "https://www.bistatechnologies.com/static/healthcarelogo.png" },
        { heading: "IT Staffing", description: "From software developers to cybersecurity experts, we provide IT professionals who are at the forefront of technology. Our candidates are selected for their technical skills, industry knowledge, and ability to adapt to your business environment.", imageSrc: "https://www.bistatechnologies.com/static/itlogo.png" },
        { heading: "Engineering Staffing", description: "From mechanical engineers to civil engineers, we connect you with skilled engineering professionals who possess the expertise to tackle complex projects and drive innovation in your field.", imageSrc: "https://www.bistatechnologies.com/static/engineeringlogo.png" },
        { heading: "Non-IT Staffing", description: "Our Non-IT staffing services cover a wide range of industries, including finance, marketing, human resources, and more. We find the right talent to support your business operations and drive growth.", imageSrc: "https://www.bistatechnologies.com/static/nonitlogo.png" }
    ])
    return (
        <div >
            <video
                loop
                autoPlay
                muted
            >
                <source src="https://www.bistatechnologies.com/static/vid2.mp4" type="video/mp4" />
            </video>

            <div className="flex lg:text-3xl text-xs h-32 items-center pl-10 text-white border-2 border-green-500 gap-8 text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  ">
                <div>
                    <h1>Quick To Hire</h1>
                </div>
                <div>
                    <h1>Best Talented Experts</h1>
                </div>
                <div>
                    <h1>360-Degree Recruitment Services</h1>
                </div>
                <div>
                    <h1>Connected you with Talented WorldWide</h1>
                </div>
            </div>

            <div className="pt-3  space-y-10">
                <h1 className="lg:text-4xl text-2xl  text-blue-800 text-center ">OUR SERVICES</h1>
                <p className="lg:text-xl text-md text-center">By leveraging cutting-edge technology, we continuously innovate our IT services, IT staffing services in USA, and workforce management solutions to assist clients in achieving their business objectives.</p>
            </div>
            <div className="flex flex-wrap gap-10 justify-center pt-5">
                {cards.map((info, index) => {
                    return <Cards key={index} heading={info.heading} description={info.description} imgSrc={info.imageSrc} />
                })}
            </div>


            <div className="flex justify-center relative border mt-10">
                <div className="absolute inset-0 flex items-center justify-center text-white lg:text-3xl text-xs font-bold">
                    <h1> CULTURE | INNOVATION | OPPORTUNITY | TRUST   </h1>
                </div>
                <img src="https://www.bistatechnologies.com/static/1.webp" className="w-5/6 h-auto rounded-lg" />
            </div>


            <NewsLetter />
        </div>


    )
}