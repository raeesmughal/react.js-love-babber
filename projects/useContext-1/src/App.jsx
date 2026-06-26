import { useState } from 'react';
import './App.css'

import { ThemeContext } from './context/ThemeContext';
import ContentArea from './component/ContentArea';
import { useEffect } from 'react';

function App() {

  const [theme, setTheme] = useState('dark');

  return (
    <>

      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div style={{
          backgroundColor: theme === 'light' ? '#cacaca' : '#1a1a1a',
          color: theme === 'light' ? '#000000' : '#ffffff',
          minHeight: '100vh',
          padding: '20px',
          transition: 'all 0.3s ease'
        }}>
          <h1>Theme Context Demo</h1>
          <ContentArea />
        </div>
      </ThemeContext.Provider>

    </>
  )
}

export default App