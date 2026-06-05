import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        alert('I will run on every render');
    })

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        </div>
    )
}

export default Count