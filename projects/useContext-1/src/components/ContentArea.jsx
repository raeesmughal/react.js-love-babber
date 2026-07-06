import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ThemeButton() {
    const {theme,toggleTheme} = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} style={{
            backgroundColor: theme == 'light' ? '#000' : '#fff',
            color: theme == 'light' ? '#fff' : '#000',
            padding : '.5rem 1rem',
            border : 'none',
            outline : 'none',
            borderRadius : '8px'
        }}>Turn {theme == 'light' ? 'dark' : 'light'} Mode</button>
    )
}

const ContentArea = () => {
    return (
        <div style={{
            marginTop : '2rem',
            display: 'flex',
            gap:'2rem',
            flexDirection : 'column',
            alignItems : 'flex-start'
        }}>
            <h2>Inside the Content Area</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda animi et illum vitae harum, corrupti neque cumque nisi impedit consequuntur ad beatae facilis ex numquam fuga odio modi sed.</p>
            <ThemeButton/>
        </div>
    )
}

export default ContentArea