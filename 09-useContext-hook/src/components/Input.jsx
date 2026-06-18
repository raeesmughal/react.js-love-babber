import React, { useState } from 'react'

const Input = ({text,setText}) => {
    

    function handleChange(e) {
        setText(e.target.value)
    }
    function clearInput() {
        setText('')
    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={text}/>
            <h2>Live Output : {text || 'start typing to see the magic'}</h2>

            <button type="button" onClick={clearInput}>Clear input</button>
        </div>
    )
}

export default Input