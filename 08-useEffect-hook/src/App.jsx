import { useEffect, useRef, useState } from 'react'
import './App.css'
import UserDashboard from './components/UserDashboard';
import Count from './components/Count';
import Variations from './components/Variations';
import LoggerComponent from './components/love-babbar/LoggerComponent';
import TimerComponent from './components/love-babbar/TimerComponent';

function App() {
  return (
    <>
      {/* <Variations /> */}
      {/* <LoggerComponent /> */}
      <TimerComponent />
    </>
  )

}

export default App
