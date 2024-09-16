
type OfferingsAndStrategyProps = {
    heading: string
    description: string
    image: { imageSrc: string, alt: string }
}

export default function OfferingsAndStrategy({ description, heading, image }: OfferingsAndStrategyProps) {
    return (
        <div className="shadow-md  hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-xl lg:w-1/3 space-y-3  p-4 hover:lg:-translate-y-5 transition-all duration-1000 ease-out  ">
            <div className="w-14">
                <img className="w-full h-full" src={image.imageSrc} alt={image.alt} />
            </div>

            <h1 className="font-bold  text-lg text-blue-950 tracking-wider">{heading}</h1>
            <p className="text-xs tracking-wider text-justify  " >{description}</p>
        </div>
    )
}