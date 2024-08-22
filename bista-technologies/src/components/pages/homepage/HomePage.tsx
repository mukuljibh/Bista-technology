import Card from "../../../ui/merged_components/service-cards/Card"
import NewsLetter from "./newsletter/NewsLetter"
import { Typewriter } from 'react-simple-typewriter'
import useObserver from "../../../shared/hooks/useObserver"
import { homePage_cards_data } from "./config/home_page.config"
import { motion } from "framer-motion"

export default function HomePage() {
    const { isCardVisible } = useObserver('homePageCards', 0.5)
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }
            }
            transition={{ duration: 0.6 }}
        >
            <div className="relative flex justify-center items-center  w-full min-h-screen ">
                <div className="lg:mt-28 mt-20 absolute text-center z-10 lg:font-normal font-semibold lg:space-y-5 space-y-2 " >
                    <div className="2xl:text-6xl md:text-3xl  md:text-3xl text-3xl font-semibold text-white transition-colors duration-300 cursor-pointer">
                        Your Vision, Our Talent Solutions
                    </div>

                    <div className="text-green-600 font-semibold 2xl:text-6xl md:text-2xl text-3xl">
                        <Typewriter
                            words={["A Global Staffing Company", "Connecting Talent Worldwide", "Empowering Global Careers", "Transforming Businesses with Top Talent", "Expertise Across Industries"]}
                            loop={100}
                            cursor
                            typeSpeed={200}
                        />
                    </div>
                    <div className="2xl:text-2xl md:text-2xl text-lg text-gray-100 font-medium">
                        <h1>Tomorrow's Success Starts with Our Recruitment</h1>
                    </div>
                </div>
                <video
                    className="absolute contrast-75 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/homepage/bista-video.mp4" type="video/mp4" />
                </video>

            </div>

            <div className="xl:flex md:flex pointer-events-none	select-none	  lg:text-lg text-sm justify-evenly  lg:space-y-0 space-y-5 text-white font-bold lg:h-32 items-center pl-5 py-8  gap-8 lg:text-center bg-gradient-to-r from-sky-700 via-teal-600 to-green-600">
                {[{ label: "Quick To Hire", imgSrc: "/homepage/bulb.svg" }, { label: "Best Talented Experts", imgSrc: "./homepage/bolt.svg" }, { label: "360-Degree Recruitment Services", imgSrc: "./homepage/user.svg" }, { label: "Connected you with Talented WorldWide", imgSrc: "./homepage/globe.svg" }]
                    .map((item, index) => {
                        return (
                            <div className=" flex flex-col items-center  gap-2 pr-3" key={index}>
                                <img className="lg:w-10 w-8" src={item.imgSrc} />
                                <h1>{item.label}</h1>
                            </div>
                        )
                    })}
            </div>
            {/*<div className="flex relative justify-center py-10 items-center">
                <img className="  w-5/6" src="great-work-to-place-banner.png" />
            </div> */}

            <div className="homePageCards flex flex-wrap gap-16 justify-center py-20 bg-gray-100 lg:px-20 px-10">
                <div className="space-y-10  ">
                    <h1 className="lg:text-4xl text-4xl font-semibold">OUR SERVICES</h1>
                    <p className="lg:text-xl text-md ">By leveraging cutting-edge technology, we continuously innovate our IT services, IT staffing services in USA, and workforce management solutions to assist clients in achieving their business objectives.</p>
                </div>
                {isCardVisible && homePage_cards_data.map((data, index) => {
                    return <Card
                        key={index}
                        heading={data.heading}
                        description={data.description}
                        imgSrc={data.imageSrc}
                        css={data.css}
                        animationTime={data.animationTime} />
                })}

            </div>


            <div className="py-16 flex justify-center bg-slate-50 ">
                <div className=" relative flex justify-center items-center w-11/12   ">
                    <h1 className="absolute w-full py-3 lg:text-5xl  bg-green-500   text-md text-center text-white opacity-90"> CULTURE | INNOVATION | OPPORTUNITY | TRUST   </h1>
                    <img src="https://www.bistatechnologies.com/static/1.webp" className="rounded-lg object-cover lg:h-96 h-42 w-full" />
                </div>
            </div>

            <NewsLetter />
        </motion.div >


    )
}