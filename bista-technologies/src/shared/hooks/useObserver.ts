import { useState, useEffect } from "react"


export default function useObserver(className: string, threshold: number, styles: string[]) {
    const [isCardVisible, setIsCardVisible] = useState(false)
    console.log(styles)
    useEffect(() => {
        const observer = new IntersectionObserver((entries, self) => {

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(...styles)
                    setIsCardVisible(true)
                    self.unobserve(entry.target)
                }
            })

        }, { threshold: threshold })

        const target = document.querySelectorAll(`.${className}`)
        target.forEach(item => observer.observe(item))
    }, [className, threshold, styles])

    return { isCardVisible }
}
