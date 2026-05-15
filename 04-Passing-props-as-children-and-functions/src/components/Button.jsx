import React from 'react'

const Button = ({ handleClick, text, children }) => {
    return (
        <div>

            <button onClick={handleClick}>
                {text}
            </button>

            <div>
                {children}
            </div>
        </div>
    )
}

export default Button