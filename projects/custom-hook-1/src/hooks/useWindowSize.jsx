import React, { useEffect, useState } from 'react'

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    useEffect(() => {
        const windowResize = () => {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,
            })
        }
        window.addEventListener('resize', windowResize);

        return () => {
            window.removeEventListener('resize', windowResize);
        }
    }, []);

    return windowSize;
    
}

export default useWindowSize;