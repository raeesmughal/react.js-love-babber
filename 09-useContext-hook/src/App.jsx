import './App.css'
// import Counter from './components/Counter';
// import Counter2 from './components/counter2';
import { createContext, useContext, useState } from 'react';
// import Input from './components/Input';
// import Input2 from './components/Input2';
import ChildA from './components/ChildA';


// step 1 : create context
const UserContext = createContext();

// step 2 : wrap all the child inside the provider
// step 3 : pass the value
// step 4 : consume the context inside the consumer component

const ThemeContext = createContext();


function App() {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState('');

  const [theme, setTheme] = useState('light');

  const [user, setUser] = useState('Raees Mughal');

  return (
    <div>

      {/* State listing example of counter components */}
      {/* <Counter count={count} setCount={setCount} />
      <Counter2 count={count} setCount={setCount} />
      <h2>Updated Count is : {count}</h2> */}

      {/* Input field examples of live update text in both components, State listing example */}
      {/* <Input text={text} setText={setText} />
      <Input2 text={text} setText={setText} /> */}




      <UserContext.Provider value={[user, setUser]}>
        <ThemeContext.Provider value={[theme, setTheme]}>
          <div id='container' className={theme}>
          {/* <div id='container' style={{ backgroundColor: theme == 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}> */}
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>


    </div >
  )
}

export default App
export { UserContext, ThemeContext }
