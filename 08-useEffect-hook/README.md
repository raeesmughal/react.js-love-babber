## Learn useEffect Hook in React.js

In React.js, the ```useEffect``` hook is your tool for handling side effects in functional components.

### What is side effect?

A ```side effect``` is basically anything that needs to happen outside the react's normal rendering process.

If your component just takes data and turns it into HTML, that's standard rendering. If it needs to reach out into the real world, that's side effect.
<br>
In programming, the 'real world' means anything outside of the react's own immediate, local code memory.



### Common Example include : 
<b>Fetching data</b> : Fetching data from an API after the component load. In this case, fetching data is the side effect.

<br />

### Why React cares : 
React is obsessed with speed. To stay fast, it likes to render your components over and over again in a blink of an eye.

If you put a 'real world' action directly inside the component without using the ```useEffect```, look what happens : 

```js
function WeatherComponent () {
    // ❌ BAD : Reaching into the real world during standard rendering
    fetch('https://api.weather.com);

    return <h1>The weather is nice!</h1>
}
```

Because react re-renders the things constantly, it would hit this api hundereds of times a minute, (crashing the server).

By putting that code inside the useEffect, you are telling React : *Hey! Once you are completely done rendering, step outside into the real world and go talk to that server*.



## Syntax

