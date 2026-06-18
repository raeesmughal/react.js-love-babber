import React, { useState } from 'react'

const Counter = ({ count, setCount }) => {
    return (
        <div>
            <button type="button" onClick={() => setCount(count => count + 1)}>Count : {count}</button>
        </div>
    )
}

export default Counter