## Learn useEffect Hook in React.js


## Count.jsx

1. use the useEffect hook (without dependency array variation), inside the body of Count.jsx

    - so anytime you click the button, ```state``` updates
    - useEffect runs on every re-render (everytime count updates)
    - you will see alert everytime count updates

1. Now use the useEffect inside the App.jsx
    
    - useEffect runs on first render, ( on page load ) and never runs after that
    - Everytime clicking on button updates the state but useEffect never runs again
    - Actually the state is updated in the Count.jsx (in child component)
    - their is no updation in App.js
    - ```The render cascades downward```
    - ```Re-render never goes upward```
    - App.jsx has no idea that their is a state update in its child.

1. Lift up State
    - create a state in App.jsx (parent)
    - pass it as a prop to ```<Child />```
    - use these props inside the Count.jsx to update the state.
    - in this way the state is updated in parent component using the child component.
    - both are updated.
    - now the useEffect used in App.jsx will run on every count updates.


## 