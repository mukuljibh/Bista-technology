export default function QuickServicesBar() {
    const data = [{ label: "Quick To Hire", image: { imageSrc: "/homepage/bulb.svg", alt: "hire logo" } },
    { label: "Best Talented Experts", image: { imageSrc: "./homepage/bolt.svg", alt: "expert logo" } },
    { label: "360-Degree Recruitment Services", image: { imageSrc: "./homepage/user.svg", alt: "recruitment logo" } },
    { label: "Connected you with Talented WorldWide", image: { imageSrc: "./homepage/globe.svg", alt: "connect with talent logo" } }]

    return (
        <div className="xl:flex md:flex pointer-events-none	select-none	  lg:text-lg text-sm justify-evenly  lg:space-y-0 space-y-5 text-white font-bold lg:h-32 items-center pl-5 py-8  gap-8 lg:text-center bg-gradient-to-r from-sky-700 via-teal-600 to-green-600">
            {data.map((item, index) => {
                return (
                    <div className=" flex flex-col items-center  gap-2 pr-3" key={index}>
                        <img
                            className="lg:w-10 w-8"
                            src={item.image.imageSrc}
                            alt={item.image.alt}
                            width="40"
                            height="40"
                        />
                        <h1>{item.label}</h1>
                    </div>
                )
            })}
        </div>
    )
}