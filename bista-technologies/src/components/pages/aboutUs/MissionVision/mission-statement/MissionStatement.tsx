

type missionStatementProps = {
    heading: string
    description: string
    image: { imageSrc: string, alt: string }
}

export default function MissionStatement({ heading, description, image }: missionStatementProps) {
    return (
        <div className="bg-white shadow-2xl transition-all ease-linear tracking-wider hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-2xl px-5 py-10">
            <img className='w-20 m-auto ' src={image.imageSrc} alt={image.alt} />
            <h1 className="text-2xl font-semibold">{heading}</h1>
            <p >{description}</p>
        </div>
    )
}