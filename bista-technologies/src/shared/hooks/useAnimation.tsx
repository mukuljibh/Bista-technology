import { useEffect, useState } from "react"

export default function useAnimation(setIntialFlag: boolean) {
    const [isOpen, setisOpen] = useState(setIntialFlag)
    const [isAnimating, setIsAnimating] = useState(setIntialFlag)
    useEffect(() => {
        if (isOpen) {
            setIsAnimating(() => true)
        }

    }, [isOpen])


    function handleAnimation() {
        if (!isOpen) {
            setisOpen(() => true)
        }
        else {
            setIsAnimating(() => false)
            setTimeout(() => {
                setisOpen(false)
            }, 150)
        }
    }
    return { isOpen, isAnimating, handleAnimation }

}