import { useState } from 'react';
import './Counter.jsx';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='counter-container'>
            <p className="para">You have clicked {count} times</p>
            <button className='btn' type="button" onClick={() => setCount(count+1)}>Click me</button>
        </div>
    )
}

export default Counter