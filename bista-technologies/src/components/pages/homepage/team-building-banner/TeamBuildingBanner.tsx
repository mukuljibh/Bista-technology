import "./animation.css"
import useObserver from "../../../../shared/hooks/useObserver"
export default function TeamBuildingBanner() {
    useObserver("team-building-banner", 0.4, ["gap-x-32", "opacity-100"])
    return (
        <section className="relative ">
            {/*floating object animation*/}
            <ul className='TeamBuildingBanner -z-10 absolute '>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="team-building-banner lg:flex items-center justify-center opacity-0 gap-72 px-5 space-y-5 z-20 relative transition-all duration-1000 delay-75">

                <div className=" lg:w-1/3 space-y-5">
                    <h1 className="text-4xl font-bold">
                        <span className="text-orange-500">Find, Evaluate,</span>  Hire The Right People With Us
                    </h1>
                    <p className="text-sm text-gray-500 text-justify">
                        At Bista Technologies, we recognize the importance of finding, evaluating, and hiring the right
                        talent to propel your business forward. Our end-to-end recruitment solutions are designed to simplify
                        the hiring process, ensuring you attract top candidates who align with your company's values and goals.
                        We collaborate with your team to create tailored recruitment strategies that meet your specific needs,
                        utilizing advanced assessment tools to thoroughly evaluate candidates' skills, experience, and cultural fit.
                        With our expertise, you can make informed hiring decisions quickly and efficiently, securing the right people
                        to drive your business success.
                    </p>
                </div>

                <div className="lg:w-2/5 hover:lg:translate-x-3  transition-all duration-1000">
                    <img
                        className="rounded-2xl"
                        src="/homepage/team-building-banner/team-building.webp"
                        width="1920"
                        height="1080"
                        alt="Team Building Banner"
                    />
                </div>
            </div>
        </section>
    )
}