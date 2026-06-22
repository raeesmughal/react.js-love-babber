import { useState } from 'react';
import './App.css'

import { ThemeContext } from './context/ThemeContext';
import ContentArea from './component/ContentArea';

function App() {

  const [theme, setTheme] = useState('light');




  return (
    <>

      <ThemeContext.Provider value={theme, setTheme}>
        <div>
          <h1>Theme Context Demo</h1>
          <ContentArea />
        </div>
      </ThemeContext.Provider>

    </>
  )
}

export default App
