### state lifting in react.js

#### what is state lifting

- In react's unidirectional data flow, data can only be transfer passed from parent to child via props.
- It cannot be passed sideways between sibling components.
- theirfore to share state between siblings , you must move (or 'lift') that state up to their closest common ancestor.

### in practical example, how state is shared

- state (name) is created in parent component, that is passed to the child component as props
- child component (card) is using the state and updating it and uplifting it back to parent
- in parent you are using that same state
- whenever something change in the child component, it automatically uplifted to the parent component
- when it is uplifted, you can use in multiple child components
- in this way both sibling components (Card two times used) shared the same state



### example from react dev


#### Accordion Example :

- <b>Accordion 1</b> : Simple without the use of state lifting

- <b>Accordion 2</b> : Here we are uplifting the state.


#### Input example :

- <b>SyncedInput 1</b> : Simple without the use of state lifting. One does not change its value by changing the value of second.

- <b>SyncedInput 2</b> : Here we are uplifting the state. Both of these are linked through 'text' state. where they both share their value and both are synced.