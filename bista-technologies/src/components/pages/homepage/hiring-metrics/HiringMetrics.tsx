import CountUp from 'react-countup';
import { useState, useEffect } from 'react';

interface stylesProps {
    extras?: string,
    imageBG: string,
    text: string,
    hover: string,
    animationTime: number
}

interface HiringMetricsProps {
    item: {
        label: string
        counting: number
        imgSrc: string
        styles: stylesProps
    }
}

export default function HiringMetrics({ item }: HiringMetricsProps) {
    const [animating, isAnimating] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            isAnimating(() => true)
        }, 250 + item.styles.animationTime
        )
    })
    return (
        <div className={` border ${animating ? 'opacity-1 ' : 'opacity-0 -translate-x-2 '} rounded-xl text-center lg:w-1/4 py-8  transition-all hover:scale-105 hover:${item.styles.hover} ${item.styles?.extras} duration-700 space-y-3`}>
            <div className={`p-2 w-20 h-20 m-auto ${item.styles.imageBG} rounded-full`}>
                <img className=" w-full h-full object-cover"
                    src={item.imgSrc}
                    alt="hiring logo"
                    width="80"
                    height="80"
                />
            </div>
            <div className={`lg:text-5xl  text-3xl font-bold ${item.styles.text}`}>
                <CountUp start={0} end={item.counting} duration={5} />+
            </div>
            <h1 className="text-gray-600 text-lg">{item.label}</h1>
        </div>

    )
}