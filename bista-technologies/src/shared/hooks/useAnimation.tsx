import { useEffect, useState } from "react"

export default function useAnimation() {
    const [isOpen, setisOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    useEffect(() => {
        if (isOpen) setTimeout(() => setIsAnimating(true), 100)

        return () => setIsAnimating(false)
    }, [isOpen])

    function handleAnimationOn() {
        if (!isOpen) setisOpen(true)
    }

    function handleAnimationOff() {
        setIsAnimating(false)
        setTimeout(() => setisOpen(() => false), 200)
    }
    function toggleAnimation() {
        if (isOpen) {
            handleAnimationOff();
        } else {
            handleAnimationOn();
        }
    }
    return { isOpen, isAnimating, handleAnimationOff, handleAnimationOn, toggleAnimation }

}