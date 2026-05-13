import './App.css'
import UserCard from './components/UserCard'
import raeesPic from './assets/raees.jpg'
import react from './assets/reactLogo.png'
import js from './assets/js.png'

function App() {

  return (
    <div className='container'>
      <UserCard name="Raees Mughal" desc={'Description for card 1'} image={raeesPic} style={{backgroundColor:'aqua'}}/>
      <UserCard name="2nd card name" desc={'Description for card 2'} image={react} />
      <UserCard name="3rd card name" desc={'Description for card 3'} image={js} />
    </div>
  )
}

export default App
