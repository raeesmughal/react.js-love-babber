import React, { useState } from 'react'


function Input({ label, text, setText }) {
    return (
        <>
            <label>
                {label}
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
            </label>
        </>
    )
}



const SyncedInputs2 = () => {
    const [text, setText] = useState('')
    return (
        <div>
            <Input label={'input no. 1'} text={text} setText={setText} />
            <br /><br />
            <Input label={'input no. 2'} text={text} setText={setText} />
        </div>
    )
}

export default SyncedInputs2