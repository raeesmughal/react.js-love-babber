import React from 'react'

const Card = ({ name, setName, title }) => {
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <p>CHILD COMPONENT TITLE : {title} , input value : {name}</p>
        </div>
    )
}

export default Card