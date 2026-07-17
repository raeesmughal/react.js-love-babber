## useRef in React.js

- `useRef` is very similar to `useState` hook as both used to store mutable values.
- but `useRef` lets you reference a mutable value that `does not trigger a re-render` when it changes.
- `useRef` lets you hold onto a value that `persists` across renders. And changing that value does not trigger a re-render.
- If you change a `useState` variable, the whole component updates to reflect the change. If you change a `useRef` variable, it changes instantly in the background without disturbing the UI.

When you call useRef, it returns a plain JavaScript object with a single property: `current`. 
```js
const myRef = useRef(initialValue);
// Returns: { current: initialValue }
```
You can read or update `myRef.current` at any time. React won't interfere, and it won't reload the component when you do.

# The Two Main Use Cases
While it sounds simple, useRef is incredibly powerful for two specific jobs.

## 1. Grabbing HTML Elements Directly (DOM Manipulation)



## 2. Storing Secrets (Values That Don't Affect the UI) 
