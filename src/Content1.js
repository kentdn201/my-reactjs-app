import {memo} from 'react'

function Content1({onIncrease}) {
    
    console.log("re-render")

    return (
        <>
            <p>Hello</p>
            <button onClick={onIncrease}>Increase</button>
        </>
    )
}

export default memo(Content1);