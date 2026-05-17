import React from 'react'

const LoginBtn = ({ isLogedIn, setIsLogedIn }) => {
    function handleClick() {
        setIsLogedIn(true)
    }
    return (
        <div>
            <button type="button" onClick={handleClick} >LogIn</button>
        </div>
    )
}

export default LoginBtn