
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Accordion from './components/accordion/Accordion';
import Accordion2 from './components/accordion2/Accordion2';
import SyncedInputs from './components/SyncedInputs';
import SyncedInputs2 from './components/SyncedInputs2';

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <Card name={name} setName={setName} title={'card 1'} />

      <div className='br' />

      <Card name={name} setName={setName} title={'card 2'} />

      <div className='br' />
      
      <p>PARENT COMPONENT input value : {name}</p>

      <div className='br' />

      <Accordion />

      <div className='br' />

      <Accordion2 />

      <div className='br' />

      <SyncedInputs />

      <div className='br' />

      <SyncedInputs2 />


    </div>
  )
}

export default App