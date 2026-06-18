import React from 'react'

const Input2 = ({ text, setText }) => {
    function handleChange(e) {
        setText(e.target.value)
    }
    return (
        <div>
            <input type="text" value={text} onChange={handleChange}/>
        </div>
    )
}

export default Input2