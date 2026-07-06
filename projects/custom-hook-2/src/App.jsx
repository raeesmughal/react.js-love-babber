import React, { useState } from 'react'
import { ApiContext } from './context/ApiContext'
import UserCard from './components/UserCard';

const App = () => {

  const [currentId, setCurrentId] = useState(1);
  const [customId, setCustomId] = useState(0);

  function handleCustomUser() {
    setCurrentId(customId);
    console.log(currentId);
    console.log(customId);
  }

  const globalConfig = {
    baseURL: `https://jsonplaceholder.typicode.com`,
  }

  return (
    // <ApiProvider>
    //   <div>
    //     <h1>Custom hook dashboard</h1>

    //     <div>
    //       <button type="button" onClick={() => setCurrentId(1)}>Load User 1</button>
    //       <button type="button" onClick={() => setCurrentId(2)}>Load User 2</button>
    //       <button type="button" onClick={() => setCurrentId(999)}>Load fake user (trigger Error)</button>

    //       <div>
    //         <input type="number" onChange={(e)=>setCustomId(e.target.value)}/> 
    //         <button onClick={handleCustomUser}>Load User {customId}</button>
    //       </div>
    //     </div>

    //     <UserCard userId={currentId} />

    //   </div>
    // </ApiProvider>

    <ApiContext.Provider value={globalConfig}>
      <div>
        <h1>Custom hook dashboard</h1>

        <div>
          <button type="button" onClick={() => setCurrentId(1)}>Load User 1</button>
          <button type="button" onClick={() => setCurrentId(2)}>Load User 2</button>
          <button type="button" onClick={() => setCurrentId(999)}>Load fake user (trigger Error)</button>

          <div>
            <input type="number" onChange={(e) => setCustomId(e.target.value)} />
            <button onClick={handleCustomUser}>Load User {customId}</button>
          </div>
        </div>

        <UserCard userId={currentId} />

      </div>
    </ApiContext.Provider>
  )
}

export default App