import { useEffect, useRef, useState } from 'react'
import './App.css'
import UserDashboard from './components/UserDashboard';
import Count from './components/Count';
import Variations from './components/Variations';
import LoggerComponent from './components/love-babbar/LoggerComponent';
import TimerComponent from './components/love-babbar/TimerComponent';
import DataFetcher from './components/love-babbar/DataFetcher';
import ResizeComponent from './components/love-babbar/ResizeComponent';
import MultiEffectComponent from './components/love-babbar/MultiEffectComponent';

function App() {
  return (
    <>
      {/* <Variations /> */}
      {/* <LoggerComponent /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      {/* <ResizeComponent /> */}
      <MultiEffectComponent />
    </>
  )

}

export default App
