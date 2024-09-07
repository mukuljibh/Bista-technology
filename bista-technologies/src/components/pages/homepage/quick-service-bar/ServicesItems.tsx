import { useEffect, useState } from "react"


type ServicesItemsProps = {
    item: {
        label: string,
        image: { imageSrc: string, alt: string }
        animationTime: number
    }

}
export default function ServicesItems({ item }: ServicesItemsProps) {
    const [animating, isAnimating] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            isAnimating(() => true)
        }, 800 + item.animationTime)
    }, [item])
    return (
        <div className={`flex flex-col   ${animating ? ' scale-100 ' : 'scale-0 '} items-center gap-2 pr-3 transition-all duration-700`}>
            <img
                className="lg:w-10 w-8"
                src={item.image.imageSrc}
                alt={item.image.alt}
                width="40"
                height="40"
            />
            <h1 className="text-sm">{item.label}</h1>
        </div>
    )
}