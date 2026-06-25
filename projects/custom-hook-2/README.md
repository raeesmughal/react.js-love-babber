```
/src
 ├── /context
 │    └── ApiContext.js         <-- Holds our global API settings
 ├── /hooks
 │    └── useUserProfile.js     <-- Our custom hook (the star of the show)
 ├── /components
 │    └── UserCard.js           <-- The component that consumes the hook
 └── App.js                     <-- The root component that ties it all together
 ```



## File 1: /context/ApiContext.js

This file sets up useContext. It creates an ApiContext and an ApiProvider. By wrapping our application in this provider, we ensure that any deeply nested component (or custom hook!) can access the baseUrl without us having to pass it down manually through dozens of component props.

## File 2: /hooks/useUserProfile.js

This is the core logic center. It is completely decoupled from the UI. It securely reaches into useContext to find out where to fetch data, uses the userId provided by the component, and uses useEffect to trigger the network request. It actively manages the lifecycle of that request using useState (handling loading, success, and error phases) and returns a clean, predictable object.

## File 3: /components/UserCard.js

This UI component is incredibly clean because it doesn't have to worry about how to fetch data, handle errors, or manage loading states. It simply takes a userId as a prop, hands it to useUserProfile, and then builds the HTML based on the answers the hook gives back.

## File 4: /App.js

This is the root of our app. It wraps the application in our ApiProvider so the context is active. It also renders some buttons to change a number (currentId) and passes that number down to the UserCard as a prop. Because userId is in the dependency array of our custom hook's useEffect, clicking these buttons will cause the custom hook to automatically run the fetch logic again with the new ID.