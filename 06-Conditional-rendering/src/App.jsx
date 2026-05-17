import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {

  const [isLogedIn, setIsLogedIn] = useState(true);

  // if else statement

  // if (isLogedIn) {
  //   return (
  //     <div>
  //       <LogoutBtn isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <LoginBtn isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />
  //     </div>
  //   )
  // }


  // ternary operator

  // return (
  //   <div>
  //     {
  //       isLogedIn ? <LogoutBtn isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} /> : <LoginBtn isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />
  //     }
  //   </div>
  // )



  // logical opeartor

  return (
    <div>
      {
        isLogedIn && <LogoutBtn setIsLogedIn={setIsLogedIn} />
      }
      {
        !isLogedIn && <LoginBtn setIsLogedIn={setIsLogedIn} />
      }
    </div>
  )




}

export default App