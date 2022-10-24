import { useEffect, useState } from "react";

function Count() {
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        // setInterval(() => {
        //     setCountdown(prev => prev - 1)
        // }, 1000)
        const timeOut = setTimeout(() => {
            setCountdown(prev => prev - 1)
            console.log("Time Out: ", countdown)
        }, 1000)

        return() => {
            clearTimeout(timeOut)
        }
    }, [countdown])  

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Count;