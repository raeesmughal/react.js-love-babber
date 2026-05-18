import React from 'react'
import Button from './Button'

const PlayButton = ({movieName}) => {
    function handleClick() {
        alert(`Playing ${movieName} `)
    }
  return (
    <div>
        <Button onClick={handleClick}>
            Play {movieName}
        </Button>
    </div>
  )
}

export default PlayButton