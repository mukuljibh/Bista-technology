import { useState, useEffect } from "react"


export default function useObserver(className: string, threshold: number) {
    const [isCardVisible, setIsCardVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver((entries, self) => {

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100')
                    setIsCardVisible(true)
                    self.unobserve(entry.target)
                }
            })

        }, { threshold: threshold })

        const target = document.querySelectorAll(`.${className}`)
        target.forEach(item => observer.observe(item))
    }, [])

    return { isCardVisible }
}
