import { useEffect, useRef, useState } from "react";

function Count() {
    // const [countdown, setCountdown] = useState(180)
    const [count, setCount] = useState(60)
    
    const timerId = useRef()
    const prevCount = useRef()
    
    useEffect(() => {
        prevCount.current = count

    }, [count])

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    // useEffect(() => {
    //     // setInterval(() => {
    //     //     setCountdown(prev => prev - 1)
    //     // }, 1000)
    //     const timeOut = setTimeout(() => {
    //         setCountdown(prev => prev - 1)
    //         console.log("Time Out: ", countdown)
    //     }, 1000)

    //     return() => {
    //         clearTimeout(timeOut)
    //     }
    // }, [countdown])  

    return (
        <div>
            <h1>So hien tai: {count}</h1>
            <h2>So cu: {prevCount.current || "Chua co"}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Count;