import { useState } from "react"

export function useCount() {

    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)

    return {
        count, increment
    }
}