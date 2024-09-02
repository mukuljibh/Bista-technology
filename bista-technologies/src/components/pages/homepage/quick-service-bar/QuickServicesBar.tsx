export default function QuickServicesBar() {
    return (
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
    )
}