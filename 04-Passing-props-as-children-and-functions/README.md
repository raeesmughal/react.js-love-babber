### Passing props as children and function

passing "props as children" and passing "function as a child" are two different patterns for component composition.

### Props as children

when you pass props as children, you don't use the self-closing tag, the content between the opening and closing tags is called children
<br>
you can access that content inside the .jsx component file using ({children}) as parameter of the component function

<br>

In short, when you have to create <b>Higher Order Components</b> or <b>Wrappers</b>, you use this functionality or props.children. 

you have a block of code (inside the opening and closing tag), but you want a wrapper for this code, then you use this functionality and send props as children. in this way you are using that component as a wrapper for that content between the tags.

<br>
<code>Note</code> : if you pass the <code>children</code> as attribute, you can still access it in your .jsx file but the content between the tags will overwrite this.



### Custom wrapper component

- created a component <code>Button</code> and created a button inside
- component is receiving everything from its parent.
  - event to do onclick (handleClick)
  - text for button (click me)
  - update after the action (updated value of count)

- parent is passing 
  - the (function as prop) as attribute 
  - text as attribute
  - passing the <code>h1</code> with dynamic value (changing value of count) as the nested value between tags.


### Toggle function (function as child)

- <b>Passing the Function :</b> 
  - In the parent component, you import Toggle and pass a function inside it as a nested element (as children).
- <b>Managing State in the Child :</b> 
  - Inside the Toggle.jsx file, a state (on and setOn) and a function (toggle) are created. The toggle function's sole job is to update the on state.
- <b>Executing the Child Function :</b> 
  - The Toggle component receives the children prop as a function. It then returns that function by executing it and passing the state and the updater function as arguments: children({ on, toggle })
- <b>Receiving Data in the Parent :</b> 
  - In the parent component, the passed function accepts those two parameters (on and toggle) so it can use them in the UI.
- <b>Toggling the UI :</b> 
  - When the header/element is clicked, it calls the toggle function to change the value of on. The text then automatically shows or hides based on whether on evaluates to true or false.