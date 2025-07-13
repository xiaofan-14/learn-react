import {useState} from "react";

export function MyButton({title}: { title: string }) {
    const [count, setCount] = useState(1)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={handleClick}>{title}</button>
            <div>{count}</div>
        </>
    )
}