This is my first React App.


## Create your FIRST React App 2024 (video title)

### in this video : 

try to understand the folder structure
<br>
erase all the unnecessary files and the code inside the files (predefined code that we don't need)
<br>

### Difference between /public/ and /src/assets folder :
- think of it like this : <b>Assets</b> go throught the 'processing plant' while <b>public</b> just gets moved to the new house in the box.
- #### Assets
  - in this folder all the files are the part of the source code's depencency graph. 
  - Example: import logo from './assets/logo.png'
  - assets are your assets in the project (as name said)

- #### Public
  - In this folder all the files are completely ignored during the build process
  - You reference these with absolute paths. You do not import them
  - Example: ```<img src="/logo.png" />``` (Note: No ./ or ../, just /).
  - their is no processing for these files, these are directly handover to the browser. (directly make public as name said)

### Understand the folder structure and Erase unnecessary code :

- App component is your first component to render
- remove all the code from App.css index.css and the prebuild landing page code from the App.jsx.
- Now App.jsx contains a function "App" that is only gonna return some text you enter inside the p tag
- now style p tag in index.css
- define the universal styles for your project

### Install Extensions
- for autocomplete their are extensions ES7, ES7+, Simple React Snippets etc.
- also install for tailwind autocomplete for easily use for future

### JSX
- jsx is type of file in which you can both html and javascript
- while writing javascript you can directly return HTML code by a function
- inside that HTML code you can directly write javascript logic by only using curly braces inside your html tags.
- when you have to render your jsx code, it is converted into react code and that is converted into simple html, css, javascript and your browser render this format because browser only understand this format.


### How to create your own component
- inside the src folder create a subfolder called components and inside the components create folder/file for your component like Navbar.jsx
- src/components/Navbar.jsx
- export that component function and import this in your App.jsx or Main.jsx to render