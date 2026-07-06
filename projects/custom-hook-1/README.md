# window resize

Everytime the window is resized, its size is updated on UI.
<br/>
<br/>
Imagine you have several components that need to know the current height and width of the browser window so they can adjust their layout.
<br/>
<br/>
Instead of writing the eventlistener logic in every component, we can create a single ```useWindowSize``` custom hook.
<br/>
<br/>

```useWindowSize``` returns an object that contains the current height and width

