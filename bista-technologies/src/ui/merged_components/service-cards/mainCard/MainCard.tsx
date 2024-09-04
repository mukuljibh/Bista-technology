
type mainCardProps = {
    heading1: string
    heading2: string
    imageSrc: string
    alt?: string
    description: string
    cardCss: string
    headingCss: string
    observingClass: string
}

export default function MainCard({ heading1, heading2, imageSrc, alt, description, cardCss, headingCss, observingClass }: mainCardProps) {

    return (
        <div className={`${cardCss} py-4 min-h-screen ${observingClass} opacity-0 duration-1000 delay-100 items-center justify-evenly  px-5 space-y-4 lg:h-96 transition-all`
        }>
            <div className={`lg:w-2/5 p-14 h-full px-3`}>
                <img className="w-full lg:h-full object-cover rounded-lg "
                    src={imageSrc}
                    alt={alt}
                    width="800"
                    height="600"
                />
            </div>
            <div className={`max-w-2xl space-y-3`}>
                <h1 className={`inline px-4 py-1 rounded-2xl font-normal ${headingCss}`}>{heading1}</h1>
                <h1 className="text-2xl text-sky-700 font-bold">{heading2}</h1>
                <p className="text-md text-gray-600 ">{description}</p>
            </div>
        </div >
    )
}