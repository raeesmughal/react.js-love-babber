import React, { useState } from 'react';
import { ApiProvider } from './context/ApiContext';
import UserCard from './components/UserCard';

function App() {
  // We manage a simple state here just to demonstrate passing different props
  const [currentId, setCurrentId] = useState(1);

  return (
    // 1. Wrap the app in the Provider. Now everything inside has access to ApiContext.
    <ApiProvider>
      <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Custom Hook Dashboard</h1>
        
        {/* Buttons to change the ID, demonstrating how the hook reacts to changing props */}
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => setCurrentId(1)}>Load User 1</button>
          <button onClick={() => setCurrentId(2)} style={{ margin: '0 10px' }}>Load User 2</button>
          <button onClick={() => setCurrentId(999)}>Load Fake User (Trigger Error)</button>
        </div>

        {/* 2. Render the component and pass the 'currentId' as a prop */}
        <UserCard userId={currentId} />
      </div>
    </ApiProvider>
  );
}

export default App;