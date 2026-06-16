import React, { useState } from 'react'
import { useEffect } from 'react';

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    const [isActive, setIsActive] = useState(true);

    
    useEffect(() => {
        
        let intervalId;

        if (isActive) {

            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);

        }


        // looks like this is useless, but everytime event trigger, the component unmount and that is necessary for required output
        
        return () => {
            clearInterval(intervalId);
        }


    }, [isActive]) // isActive is added as dependency, button events change the state and useEffect re-runs everytime isActive is updated



    function toggleTimer() {
        setIsActive(!isActive);
    }

    function resetTimer() {
        setIsActive(false);
        setSeconds(0)


    }


    return (
        <div>
            <h1>Seconds : {seconds}</h1>

            <div className="buttons">
                <button type="button" onClick={toggleTimer}>
                    {isActive ? 'pause' : 'resume'}
                </button>

                <button type="button" onClick={resetTimer}>
                    reset
                </button>
            </div>
        </div>
    )
}

export default TimerComponent