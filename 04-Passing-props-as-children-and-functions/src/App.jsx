
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Toggle from './components/Toggle';

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1)
  }
  return (
    <div>


      <Card name={"raeesmughal"} children={'hello'} >
        <h1>Best Web Development Course</h1>
        <p>Trying to be consistent in this</p>
        <p>will upload the course soon</p>
      </Card>

      <Card>
        <p>Hello g kese ho sare</p>
      </Card>

      <div className='br' />

      {/* explained in readme */}

      <h1>Custom wrapper component</h1>



      <Button handleClick={handleClick} text={'click me'} >
        <h1>{count}</h1>
      </Button>


      <div className="br" />

      {/* explained in readme */}
      <h1>Function as Child</h1>


      <Toggle>

        {/* this is how function is passed as child */}

        {
          ({ on, toggle }) => {
            return <div className='accordion'>
              <h2 onClick={toggle} >
                {on ? "ON" : "OFF"}
              </h2>
              {on && <p>This content is only visible when on is true</p>}
            </div>
          }
        }

      </Toggle>


    </div >
  )
}

export default App