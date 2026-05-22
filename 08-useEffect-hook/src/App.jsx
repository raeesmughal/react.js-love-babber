import { useEffect } from 'react'
import './App.css'
import UserDashboard from './components/UserDashboard';

function App() {


  // first -> side effect function
  // second -> clean-up function
  // third -> comma seperated dependency list (array), any of the entity updates, your side effect function runs on the spot.

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])



  // 1️⃣️ variation 1 
  // runs on every render
  // below useEffect is gonna run on every render

  useEffect(() => {
    // alert('I will run on every render');


  })



  // 2️⃣ Variation 2
  // runs only once
  // useEffect below is gonna run 




  return (
    <div>
      {/* hello g welcome useEffect hook */}
      <UserDashboard />
    </div>
  )
}

export default App
