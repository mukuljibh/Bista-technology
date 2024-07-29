import { useEffect, useState } from "react"
import ServiceCards from "./service-cards/ServiceCards"
import NewsLetter from "./newsletter/NewsLetter"
import { Typewriter } from 'react-simple-typewriter'

export default function Section() {
    const cards = [
        { heading: "Healthcare Staffing", description: "We specialize in recruiting healthcare professionals, including doctors, nurses, allied health staff, and administrative personnel. Our focus is on delivering candidates who are not only qualified but also committed to providing high-quality patient care.", imageSrc: "https://www.bistatechnologies.com/static/healthcarelogo.png", animationTime: 0 },
        { heading: "IT Staffing", description: "From software developers to cybersecurity experts, we provide IT professionals who are at the forefront of technology. Our candidates are selected for their technical skills, industry knowledge, and ability to adapt to your business environment.", imageSrc: "https://www.bistatechnologies.com/static/itlogo.png", animationTime: 200 },
        { heading: "Engineering Staffing", description: "From mechanical engineers to civil engineers, we connect you with skilled engineering professionals who possess the expertise to tackle complex projects and drive innovation in your field.", imageSrc: "https://www.bistatechnologies.com/static/engineeringlogo.png", animationTime: 300 },
        { heading: "Non-IT Staffing", description: "Our Non-IT staffing services cover a wide range of industries, including finance, marketing, human resources, and more. We find the right talent to support your business operations and drive growth.", imageSrc: "https://www.bistatechnologies.com/static/nonitlogo.png", animationTime: 400 }
    ]
    const [isCardVisible, setIsCardVisible] = useState(false)

    useEffect(() => {

        const observer = new IntersectionObserver((entries, self) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsCardVisible(() => true)
                    self.unobserve(entry.target)
                }
            })
        }, { threshold: 0.5 })

        const target = document.querySelectorAll(".section")
        target.forEach(item => observer.observe(item))
    }, [])

    return (
        <div>
            <div className="relative flex justify-center">
                <div className="lg:mt-28 mt-20 absolute text-center z-10 lg:font-normal font-semibold lg:space-y-5  " >
                    <div className="2xl:text-6xl md:text-3xl  md:text-3xl text-lg font-semibold text-sky-500 transition-colors duration-300 hover:text-white cursor-pointer">
                        Your Vision, Our Talent Solutions
                    </div>

                    <div className="text-amber-600 font-medium 2xl:text-6xl md:text-2xl">
                        <Typewriter
                            words={["A Global Staffing Company", "Connecting Talent Worldwide", "Empowering Global Careers", "Transforming Businesses with Top Talent", "Expertise Across Industries"]}
                            loop={100}
                            cursor
                            typeSpeed={200}
                        />
                    </div>
                    <div className="2xl:text-2xl md:text-2xl text-sm text-white font-medium">
                        <h1>Tomorrow's Success Starts with Our Recruitment</h1>
                    </div>
                </div>
                <video
                    className="contrast-75"
                    autoPlay
                    muted
                    loop
                >
                    <source src="https://www.bistatechnologies.com/static/vid2.mp4" type="video/mp4" />
                </video>

            </div>

            <div className="flex lg:text-3xl justify-center text-xs h-32 items-center pl-10 text-white gap-8 text-center bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
                {["Quick To Hire", "Best Talented Experts", "360-Degree Recruitment Services", "Connected you with Talented WorldWide"]
                    .map((item, index) => {
                        return (
                            <h1 key={index}>{item}</h1>
                        )
                    })}

            </div>
            <div className="flex justify-center py-10">
                <img className=" w-5/6" src="https://www.opusing.com/images/great-work-to-place-banner-f.png" />
            </div>

            <div className="section flex flex-wrap gap-16 justify-center py-20 bg-gray-100 lg:px-20 px-10">
                <div className="space-y-10  ">
                    <h1 className="lg:text-4xl text-4xl font-semibold">OUR SERVICES</h1>
                    <p className="lg:text-xl text-md ">By leveraging cutting-edge technology, we continuously innovate our IT services, IT staffing services in USA, and workforce management solutions to assist clients in achieving their business objectives.</p>
                </div>
                {isCardVisible && cards.map((info, index) => {
                    return <ServiceCards key={index} heading={info.heading} description={info.description} imgSrc={info.imageSrc} animationTime={info.animationTime} />
                })}

            </div>


            <div className="py-16 flex justify-center bg-slate-50 ">
                <div className=" relative flex justify-center items-center w-11/12   ">
                    <h1 className="absolute w-full py-3 lg:text-5xl  bg-green-500   text-md text-center text-white opacity-90"> CULTURE | INNOVATION | OPPORTUNITY | TRUST   </h1>
                    <img src="https://www.bistatechnologies.com/static/1.webp" className="rounded-lg object-cover lg:h-96 h-42 w-full" />
                </div>
            </div>

            <NewsLetter />
        </div >


    )
}