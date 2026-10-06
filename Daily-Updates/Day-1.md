# Day 1 — Getting Started with React ⚛️

Today was my first day of learning React from scratch.

I started with basic knowledge of:

- HTML
- CSS
- JavaScript

I had only used Vite to create a React project before today, so today I focused on understanding the basic structure and the fundamental concepts of React.

---

## 1. Creating a React Project with Vite

I created my React project using Vite.

The command used was:

```bash
npm create vite@latest
```

During the setup, I selected:

- Framework → React
- Variant → JavaScript
- Linter → ESLint
- Install and start with npm → Yes

Vite created the basic React project structure for me.

---

## 2. Basic React Project Structure

The important structure of my project is:

```text
react-app/
│
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── package-lock.json
```

For today, the most important files were:

- `index.html`
- `main.jsx`
- `App.jsx`

---

## 3. What is `main.jsx`?

`main.jsx` is where React is connected to the HTML page.

The important code is:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

We understood the important parts of this code.

---

## 4. `import`

`import` is JavaScript syntax used to bring something from another file or package into the current file.

For example:

```jsx
import App from './App.jsx'
```

This means:

> Bring the `App` component from `App.jsx` so that I can use it in this file.

---

## 5. `createRoot()`

We saw:

```jsx
createRoot(document.getElementById('root'))
```

`createRoot()` tells React which HTML element should be used as the root of the React application.

First:

```jsx
document.getElementById('root')
```

finds the HTML element with:

```html
<div id="root"></div>
```

Then React creates a root inside that element.

---

## 6. `render()`

We then use:

```jsx
.render(
  <App />
)
```

This tells React:

> Render the `App` component inside the root element.

---

## 7. How React Starts

The basic flow we learned is:

```text
index.html
    ↓
<div id="root"></div>
    ↓
main.jsx
    ↓
createRoot()
    ↓
<App />
    ↓
App.jsx
    ↓
UI appears in the browser
```

So React does not just randomly appear in the browser.

There is a chain connecting the HTML page to our React components.

---

## 8. What is a Component?

A component is a reusable piece of UI.

A React component can be created using a JavaScript function.

Example:

```jsx
function App() {
  return (
    <h1>Hello React!</h1>
  )
}
```

Here:

```jsx
function App()
```

is a normal JavaScript function.

But we use this function as a React component.

---

## 9. Components Return JSX

A component usually returns JSX.

Example:

```jsx
function App() {
  return (
    <h1>Hello React!</h1>
  )
}
```

The function:

```jsx
App()
```

returns:

```jsx
<h1>Hello React!</h1>
```

So the basic idea is:

```text
Component
    ↓
JavaScript function
    ↓
returns JSX
    ↓
React uses the JSX to create the UI
```

---

## 10. What is JSX?

JSX is a syntax extension that allows us to write HTML-like UI syntax inside JavaScript.

Example:

```jsx
function App() {
  return (
    <h1>Hello React!</h1>
  )
}
```

The following:

```jsx
<h1>Hello React!</h1>
```

looks like HTML, but it is actually JSX.

Important:

> JSX is not exactly HTML. It is HTML-like syntax used inside JavaScript to describe UI.

---

## 11. JSX and Normal Text

We tested this:

```jsx
<h1>2 + 2</h1>
```

React displays:

```text
2 + 2
```

Why?

Because `2 + 2` is being treated as normal text inside JSX.

React does not calculate it.

---

## 12. JavaScript Inside JSX Using `{}`

We then used:

```jsx
<h1>{2 + 2}</h1>
```

React displays:

```text
4
```

The `{}` tells JSX:

> This part is a JavaScript expression.

So:

```jsx
<h1>2 + 2</h1>
```

means:

> Display the text `2 + 2`.

While:

```jsx
<h1>{2 + 2}</h1>
```

means:

> Evaluate the JavaScript expression `2 + 2` and display its result.

---

## 13. Using JavaScript Variables in JSX

We created a JavaScript variable:

```jsx
const name = "React Beginner"
```

and used it inside JSX:

```jsx
<h1>Hello {name}</h1>
```

The browser displayed:

```text
Hello React Beginner
```

The important part is:

```jsx
{name}
```

This tells JSX to evaluate the JavaScript variable `name`.

---

## 14. `{}` as a Doorway to JavaScript

A simple way to remember this is:

```text
JSX
  ↓
Hello
  ↓
{name}
  ↓
JavaScript expression
  ↓
value of name
  ↓
React displays it
```

For example:

```jsx
const name = "Aayush"

return (
  <h1>Hello {name}</h1>
)
```

The result is:

```text
Hello Aayush
```

---

## 15. `export default`

We used:

```jsx
export default App
```

at the bottom of `App.jsx`.

This makes the `App` component available to other files.

For example:

```jsx
export default App
```

allows another file to write:

```jsx
import App from './App.jsx'
```

So:

```text
App.jsx
    ↓
export default App
    ↓
main.jsx
    ↓
import App
```

---

## 16. Creating Our Own Component

We created another component called `Greeting`.

```jsx
function Greeting() {
  return (
    <h2>Welcome to React!</h2>
  )
}
```

This is our own custom component.

It was not provided by React or Vite.

---

## 17. Using One Component Inside Another

We then used `Greeting` inside `App`.

```jsx
function Greeting() {
  return (
    <h2>Welcome to React!</h2>
  )
}

function App() {
  const name = "React Beginner"

  return (
    <>
      <h1>Hello {name}</h1>
      <Greeting />
    </>
  )
}

export default App
```

The important part is:

```jsx
<Greeting />
```

This tells React:

> Render the `Greeting` component here.

So when React renders `App`, it also renders `Greeting`.

---

## 18. Component Composition

The idea of putting one component inside another is called component composition.

For example:

```text
App
│
├── Header
├── Greeting
├── Content
└── Footer
```

A component can contain other components.

This allows large applications to be broken into smaller, manageable pieces.

Our example was:

```text
App
│
└── Greeting
```

---

## 19. React Component Flow

The complete flow we learned today is:

```text
index.html
    │
    │ <div id="root"></div>
    ↓
main.jsx
    │
    │ imports App
    ↓
App component
    │
    │ contains <Greeting />
    ↓
Greeting component
    │
    │ returns JSX
    ↓
React renders everything
    │
    ↓
Browser
```

---

## 20. Fragment `<> </>`

We used:

```jsx
<>
  <h1>Hello {name}</h1>
  <Greeting />
</>
```

The:

```jsx
<>
</>
```

is called a React Fragment.

We used it so that `App` can return multiple JSX elements together.

We did not study Fragments deeply today.

We will learn more about them later.

---

## 21. What I Practiced Today

Today I practiced:

- Creating a React project using Vite
- Understanding the basic project structure
- Understanding `main.jsx`
- Understanding `App.jsx`
- Understanding `createRoot()`
- Understanding `render()`
- Creating a React component
- Returning JSX from a component
- Understanding JSX
- Using JavaScript inside JSX
- Using `{}` to evaluate JavaScript expressions
- Using JavaScript variables inside JSX
- Exporting a component
- Importing a component
- Creating a custom component
- Using one component inside another
- Understanding basic component composition

---

## 22. Important Things I Learned

### React

React is a JavaScript library used to build user interfaces.

### Component

A component can be a JavaScript function that returns JSX.

```jsx
function App() {
  return <h1>Hello React!</h1>
}
```

### JSX

JSX allows us to write HTML-like UI syntax inside JavaScript.

```jsx
<h1>Hello React!</h1>
```

### JavaScript inside JSX

We can use `{}` to evaluate JavaScript expressions inside JSX.

```jsx
<h1>{2 + 2}</h1>
```

Result:

```text
4
```

### Variables inside JSX

```jsx
const name = "Aayush"

<h1>Hello {name}</h1>
```

Result:

```text
Hello Aayush
```

### Components inside Components

```jsx
function Greeting() {
  return <h2>Welcome!</h2>
}

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Greeting />
    </>
  )
}
```

`App` renders `Greeting`.

---

## 23. Day 1 Summary

Today I learned the basic foundation of React.

The most important mental model I learned is:

```text
React application
      ↓
Components
      ↓
Components are JavaScript functions
      ↓
Functions return JSX
      ↓
JSX describes the UI
      ↓
{} allows JavaScript expressions inside JSX
      ↓
React renders the UI in the browser
```

I also learned that components can be combined together to build larger interfaces.

Today was mainly about understanding how React works at a basic level, rather than learning many React features at once.

---

## Next

Tomorrow I will continue learning React from these fundamentals and gradually move toward more interactive React applications.