import React, { useState } from 'react'
import ContentArea from './components/ContentArea';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
    const [theme, setTheme] = useState('dark');
    function toggleTheme() {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div style={{
                backgroundColor: theme == 'light' ? '#fff' : '#000',
                color: theme == 'light' ? '#000' : '#fff',
                transition: '.5s all ease',
                height: '100vh',
                width: '100vw',
            }}>
                <h1>UseContext Hook Demo</h1>
                <ContentArea />
            </div>
        </ThemeContext.Provider>
    )
}

export default App