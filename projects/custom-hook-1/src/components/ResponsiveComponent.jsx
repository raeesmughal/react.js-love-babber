import React from 'react'
import useWindowSize from '../hook/useWindowSize'

const ResponsiveComponent = () => {
    const {height,width} = useWindowSize();


  return (
    <div>
        <h2>Real time window dimensions</h2>
        <p><strong>Width :</strong> {width}</p>
        <p><strong>Height :</strong> {height}</p>
    </div>
  )
}

export default ResponsiveComponent