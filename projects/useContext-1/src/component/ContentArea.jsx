import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'



function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <button type='button' onClick={toggleTheme} style={{
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: theme === 'light' ? '#1a1a1a' : '#ffffff',
            color: theme === 'light' ? '#ffffff' : '#1a1a1a',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
        }}>
            Turn to {theme === 'light' ? 'dark' : 'light'} Mode
        </button>
    )
}

const ContentArea = () => {
    return (
        <div>
            <h3>Inside the Content Area Component</h3>
            <p>This Component doesn't take any theme props, but it holds the button below.</p>
            <ThemeButton />
        </div>
    )
}

export default ContentArea