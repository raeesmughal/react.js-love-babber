# useContext Hook in react.js

In React, passing data down through multiple levels of components using props can quickly become a nightmare. This headache is known as ```"prop drilling"```.

## How useContext Works? (3 steps process)

1. ### create the context

- you have to import the createContext from react
- now create this context ```const UserContext = createContext()```

1. ### provide the context
- wrap the components /child heirarchy (all the components / children in which you are gonna use this context) insie the provider. 
```
<UserContext.Provider>
<ChildA />
</UserContext.Provider>
```


1. ### add a value
- inside the opening tag of the ```Provider```, you have to add the value (like an attribute);
```
// value can be any variable
<UserContext.Provider value={value}>
<ChildA />
</UserContext.Provider>
```

1. ### consume the context
- inside any consumer
