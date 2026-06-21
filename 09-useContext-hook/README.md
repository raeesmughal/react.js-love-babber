# useContext Hook in react.js

In React, passing data down through multiple levels of components using props can quickly become a nightmare. This headache is known as ```"prop drilling"```.

## How useContext Works? (3 steps process)

### create the context

- you have to import the createContext from react
- now create this context ```const UserContext = createContext()```
- also have to export this ``` export {UseContext} ```

### provide the context
- wrap the components /child heirarchy (all the components / children in which you are gonna use this context) insie the provider. 
```
<UserContext.Provider>
<ChildA />
</UserContext.Provider>
```


### add a value
- inside the opening tag of the ```Provider```, you have to add the value (like an attribute);
```
// value can be any variable
<UserContext.Provider value={value}>
<ChildA />
</UserContext.Provider>
```

### consume the context

- inside any consumer component import the useContext from 'react'
- now you can share data between these nested child and parent components without 'prop drilling'