import './App.css'
import Counter from './components/Counter';
import Counter2 from './components/counter2';
import { useState } from 'react';
import Input from './components/Input';
import Input2 from './components/Input2';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <Counter2 count={count} setCount={setCount} />

      {/* <h2>Updated Count is : {count}</h2> */}

      <Input text={text} setText={setText} />
      <Input2 text={text} setText={setText} />


    </div>
  )
}

export default App
