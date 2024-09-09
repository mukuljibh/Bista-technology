import { useEffect, useState } from "react"

export type cardsProps = {
    heading: string
    description: string
    imgSrc: string
    alt: string
    animationTime: number
    css: string
}
export default function Card({ heading, description, imgSrc, animationTime, css, alt }: cardsProps) {
    const [animating, isAnimating] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            isAnimating(() => true)
        }, 800 + animationTime)
    }, [heading, description, imgSrc, animationTime, css, alt])
    return (
        <article className={` z-30 bg-white  ${css} ${animating ? 'opacity-1 ' : 'opacity-0 -translate-x-7 '} shadow-md	 duration-300 transition-all rounded-xl lg:w-72  border-white `}>
            <div className={`p-5`}>
                <div className="lg:w-32 lg:h-32 w-20 h-20 ">
                    <img className="w-full h-full object-cover border border-black rounded-full"
                        src={imgSrc}
                        alt={alt}
                        width="128"
                        height="128"
                    />
                </div>
                <div className="pb-5">
                    <h1 className="lg:text-2xl  text-xl font-semibold pt-3 ">{heading}</h1>
                    <p className="lg:text-md text-zinc-700 text-md pt-2">{description}</p>
                </div>
            </div>
        </article>
    )
}