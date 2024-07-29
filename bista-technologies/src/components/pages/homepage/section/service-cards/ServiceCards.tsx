import { useEffect, useState } from "react"
type CardsProps = {
    heading: string
    description: string
    imgSrc: string
    animationTime: number
}

export default function ServiceCards({ heading, description, imgSrc, animationTime }: CardsProps) {

    const [animating, isAnimating] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            isAnimating(() => true)
        }, 650 + animationTime)
    })
    return (
        <div className={` bg-white border-2  hover:border-orange-600  ${animating ? 'opacity-1 ' : 'opacity-0 -translate-x-7 '}  duration-500  transition-all rounded-xl lg:w-72  shadow-2xl `}>
            <div className={`p-5`}>
                <div >
                    <img className="lg:w-28 w-20 border-solid border-2 border-black rounded-full" src={imgSrc} />
                </div>
                <div className="pb-5">
                    <h1 className="lg:text-2xl  text-xl font-semibold pt-3 ">{heading}</h1>
                    <p className="lg:text-md text-zinc-700 text-md pt-2">{description}</p>
                </div>

            </div>
        </div>
    )
}