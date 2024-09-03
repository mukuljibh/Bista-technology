import "./animation.css"
export default function TeamBuildingBanner() {
    return (
        <div className="relative ">
            <ul className='TeamBuildingBanner -z-10 absolute '>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className=" lg:flex items-center justify-center gap-32 px-5 space-y-5 z-20 relative">

                <div className=" lg:w-1/3 space-y-5    ">
                    <h1 className="text-4xl font-bold">  <span className="text-orange-500">Find, Evaluate,</span> Hire The Right People With Us</h1>
                    <p className="text-sm text-gray-500">In a time of unprecedented change, candidate choice, digital disruption, and quick innovation, Opusing is driven to provide people-centric solutions for acquiring the right talent. Current talent acquisition is more than just employing people with the necessary qualifications, skill sets, and work experience; it also entails identifying employees who can produce outcomes, share the values of the organizations they serve, provide fresh insights, and promote the goals of those organizations. Discover the staffing agency near me, Opusing, for tailored staffing solutions.</p>
                </div>

                <div className="lg:w-2/5 ">
                    <img className="w-full h-full  rounded-2xl" src="https://www.opusing.com/images/image-4.webp" />
                </div>
            </div>
        </div>
    )
}