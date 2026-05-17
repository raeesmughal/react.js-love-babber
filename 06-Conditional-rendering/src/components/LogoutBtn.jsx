import React from 'react'

const LogoutBtn = ({isLogedIn,setIsLogedIn}) => {
    function handleClick() {
        setIsLogedIn(false)
    }
    return (
        <div>
            <button type="button" onClick={handleClick}>Logout</button>
        </div>
    )
}

export default LogoutBtn