
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <Card name={name} setName={setName} title={'card 1'} />
      <Card name={name} setName={setName} title={'card 2'} />

      <p>PARENT COMPONENT input value : {name}</p>


    </div>
  )
}

export default App