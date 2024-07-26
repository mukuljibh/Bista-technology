
type CardsProps = {
    heading: string
    description: string
    imgSrc: string
}

export default function ServiceCards({ heading, description, imgSrc }: CardsProps) {
    return (

        <div className="border-2 bg-white hover:border-orange-600 rounded-xl lg:w-72 w-90 shadow-2xl " >

            <div className="p-5">
                <div >
                    <img className="lg:w-28 w-20 border-solid border-2 border-black rounded-full" src={imgSrc} />
                </div>
                <div className="pb-5">
                    <h1 className="lg:text-2xl  text-xl font-semibold pt-3 ">{heading}</h1>
                    <p className="lg:text-md  text-zinc-700 text-md pt-2">{description}</p>
                </div>
            </div>

        </div>
    )
}