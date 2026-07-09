## All about routing.

## basic routing
- using react we can create SPA but for building MPA we have to import the routing functionality as routing is not a build in part of the React.js

- instead of `browserRouter` we are gonna use `createBrowserRouter` as its modern and used for large scale projects

- install `react-router-dom` to use `createBrowserRouter`

- created simple routing setup inside the `App.jsx`

## Link & NavLink tags

- now to prevent page from reloading, created a navbar and instead of using `anchor tags` we used `Link` tag (that is a part of react-router-dom)

- Replaced `Link` tag with `NavLink` tag as it provides an `active` class.

- `NavLink` Automatically receives an `active` class when the URL matches

- inside the `NavLink` their is a default `isactive` boolean flag that is `true` when you are active on a `NavLink`

## route parameter | Dynamic Routing | URL Parameters
- in this type of routing we are gonna use parameter in url like `https://www.codehelp.in/student/:id`, the `:id` part of the url is a parameter that you can pass in your url.

- access this value inside the element using `useparams`


## query parameter (search parameters)
- these are the key-values pairs appended to the end of a URL after a question mark 
- `/products?search=shoes&sort=price` here `/products` is a route and their are 2 query parameters after (?)

- unlike <b>dymanic route parameters `/products/:id`</b> query parameters do not need to be defined in your route paths. They are inherently optional and are primarily used for tracking state like filtering, searching, pagination, or sorting.
