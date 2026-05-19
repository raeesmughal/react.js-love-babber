import React from 'react'

const ChangeColorBtn = ({ changeColor }) => {
    return (
        <button type="button" onClick={(e) => {
            e.stopPropagation();
            changeColor();
        }}>
            
            Change Color

        </button>
    )
}

export default ChangeColorBtn