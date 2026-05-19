
import './App.css'
import ColorSwitch from './components/ColorSwitch/ColorSwitch'
import Toolbar from './components/Toolbar/Toolbar'

function App() {

  function handleClick() {
    alert('I am clicked')
  }

  function handleMouseOver() {
    alert('You hover the mouse over para tag')
  }

  function handleInputChange(e) {
    console.log(`Value change in Input field : ${e.target.value} `)
  }


  function handleSubmit(event) {
    event.preventDefault()  // prevent the page from reload
    const con = confirm('form submit krdu kia?');

    con && console.log('form submitted');

  }

  return (
    <div>

      {/* 1. onclick event */}
      <button type="button" onClick={handleClick}>Click me</button>
      <div className='br' />


      {/* 2. onclick event inline */}
      <button type="button" onClick={() => alert('I got clicked')}>Click me inline</button>
      <div className='br' />


      {/* 3. mouse hover event */}
      <p className='para' onMouseOver={handleMouseOver}>This is para</p>
      <div className='br' />



      {/* 4. onChange event  */}
      {/* 5. onSubmit event */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
      <div className='br' />



      {/* 6. imediate invokation */}
      <button onClick={alert('you have not clicked on button, the function is imediately invoked')}>
        Click me
      </button>
      <div className='br' />




      <Toolbar />
      <div className='br' />








    </div>
    // <div>
    //   <ColorSwitch />
    // </div>
  )
}

export default App
