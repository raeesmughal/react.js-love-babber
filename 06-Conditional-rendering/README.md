### Conditional Rendering

Rendering different components or jsx on the basis of different conditions


### 3 ways of Conditional Rendering

#### - using if statement (also called early return)
#### - ternory operator
#### - logical operator



### if-else statement example :

- In if statement example, login or logout button is shown on the screen on the basis of a condition.

- In the video example, we just have to render the simple components without props

- I tried to created these buttons clickable so on click, the state is changed and the button component is also changed

- I tried to use the last concept of ```uplifting state```



### Ternory Operator : 

in if-else, we returned the block of code inside the if-else condition. but for ternory, we used a single return and inside the return, we used ternory operator that changes the condition inside the return statement


### Logical operator

Logical operator only returns when the condition is true, so for the false condition, we are unable to show the other side, in this way our buttons will not work dynamically.

so we used two different logical operator for different conditions. on click of the button the condition changes and Only one of the condition will be true at a time and this way our button is still dynamic.