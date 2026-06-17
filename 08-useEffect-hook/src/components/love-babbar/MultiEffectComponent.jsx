import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {
    const [count, setCount] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        console.log('count is updated : ' + count );
    }, [count]);


    useEffect(() => {
      const intervalId = setInterval(() => {
        setSecond(second=>second+1);
      }, 1000);
    
      return () => {
        clearInterval(intervalId);
      }
    }, []);
    


    return (
        <div>
            <h1>Count : {count}</h1>
            <button type="button" onClick={() => setCount(count => count + 1)}>Increment count</button>

            <h1>Seconds: {second}</h1>
        </div>
    )
}

export default MultiEffectComponent