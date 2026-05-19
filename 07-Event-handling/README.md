## Event handling in React.js

React.js Event handling feels very familiar as i already know the event handling in vanilla javascript.



## Refrencing a function vs Invoking

- ```<button onClick={() => alert('...')}>``` Passing a function
- ```<button onClick={alert('...')}>``` calling a function

Passing a function is the correct way ✅ while Calling the function is incorrect ❎ because Passing inline code like this won’t fire on click—it fires every time the component renders


## Event Propagation

- <b>Event Propagation (specifically bubbling)</b> is when an action like a click starts at the specific element you interacted with and naturally travels upward through all of its parent elements, triggering any matching event handlers along the way unless you stop it using ```e.stopPropagation()```.

ColorSwitch is an example that Stops Propagation