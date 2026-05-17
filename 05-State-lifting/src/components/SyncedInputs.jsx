import { useState } from "react"


// function 'input' is representing the child behavior while the "SyncedInput" is representing the parent.

function Input({ label }) {

  const [text, setText] = useState('');


  return (
    <label> {label}
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </label>
  )

}





const SyncedInputs = () => {
  return (
    <div>
      <Input label={'input no. 1 : '} />
      <br /><br />
      <Input label={'input no. 2 : '} />
    </div>
  )
}

export default SyncedInputs