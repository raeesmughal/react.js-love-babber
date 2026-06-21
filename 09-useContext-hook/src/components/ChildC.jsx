import React, { useContext, useState } from 'react'

import { UserContext, ThemeContext } from '../App'

const ChildC = () => {
    const {user, setUser} = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);

    const [inputValue,setInutValue] = useState('')

    function toggleTheme() {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }

    function handleClick() {
        setUser(inputValue);
    }

    return (
        <div>
            <button type="button" onClick={toggleTheme}>change Theme</button>

            <br />

            <p>user is : {user}</p>

            <input type="text" value={inputValue} onChange={(e)=>setInutValue(e.target.value)} />
            <button type="button" onClick={handleClick}>update user</button>
        </div>
    )
}

export default ChildC