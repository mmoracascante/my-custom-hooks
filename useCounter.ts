import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState<number>(initialValue)

    const handleAddCounter = (value = 1) => {
        setCounter((current) => current + value)
    }

    const handleDecCounter = (value = 1) => {
        if (counter === 0) return
        setCounter((current) => current - value)
    }

    const handleResetCounter = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        handleAddCounter,
        handleDecCounter,
        handleResetCounter,
    }
}