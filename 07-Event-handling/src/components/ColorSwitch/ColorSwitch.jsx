import { useState } from 'react'
import ChangeColorBtn from './ChangeColorBtn'



const ColorSwitch = ({ onChangeColor }) => {

  const [count, setCount] = useState(0)



  // get a light random color

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`
  }

  // get a dark random color

  function getRandomDarkColor() {
    let r = Math.round(50 * Math.random());
    let g = Math.round(50 * Math.random());
    let b = Math.round(50 * Math.random());
    return `rgb(${r}, ${g}, ${b})`
  }

  

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomDarkColor();
  }




  function handleClickOutside() {
    setCount(count + 1)
  }





  return (
    <div onClick={handleClickOutside} style={{ height: '100vh', width: '100%' }}>
      <ChangeColorBtn changeColor={handleChangeColor} />

      <br />
      <br />

      <h1>Clicks on this page : {count}</h1>

    </div>
  )
}

export default ColorSwitch