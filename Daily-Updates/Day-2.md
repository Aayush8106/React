# Day 2 — JSX and Props ⚛️

Today was my second day of learning React.

The main focus today was understanding how JSX works with JavaScript and learning how components can communicate with each other using **Props**.

---

## 1. JSX Must Have One Outer Structure

We first learned that a React component cannot directly return multiple JSX elements at the same level.

This does not work:

```jsx
function App() {
  return (
    <h1>Hello React</h1>
    <p>Today is Day 2</p>
  )
}
```

The problem is that the component is trying to return two separate elements:

```text
<h1>...</h1>
<p>...</p>
```

React expects one outer JSX structure.

---

## 2. Using a Fragment

We can use a React Fragment to group multiple elements together:

```jsx
function App() {
  return (
    <>
      <h1>Hello React</h1>
      <p>Today is Day 2</p>
    </>
  )
}
```

The:

```jsx
<>
</>
```

is called a **Fragment**.

It allows multiple JSX elements to be returned together without creating an extra HTML element.

---

## 3. Fragment vs `<div>`

We also tested using a `<div>` instead of a Fragment.

### Using `<div>`

```jsx
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>Today is Day 2</p>
    </div>
  )
}
```

### Using Fragment

```jsx
function App() {
  return (
    <>
      <h1>Hello React</h1>
      <p>Today is Day 2</p>
    </>
  )
}
```

Both looked the same in the browser.

The difference is in the actual DOM.

A `<div>` creates a real HTML element:

```html
<div>
  <h1>Hello React</h1>
  <p>Today is Day 2</p>
</div>
```

A Fragment does not create an extra HTML element:

```html
<h1>Hello React</h1>
<p>Today is Day 2</p>
```

So:

```text
<div>
  = real HTML element/container

<> </>
  = invisible React wrapper
```

---

# 4. JavaScript Variables Inside JSX

We continued working with JavaScript variables inside JSX.

For example:

```jsx
function App() {
  const name = "Aayush"
  const age = 20

  return (
    <>
      <h1>Hello {name}</h1>
      <p>I am {age} years old.</p>
    </>
  )
}
```

The browser displays:

```text
Hello Aayush
I am 20 years old.
```

---

## 5. Static and Dynamic Content

We observed that JSX can contain both static and dynamic content.

For example:

```jsx
<h1>Hello {name}</h1>
```

Here:

```text
Hello
```

is static JSX content.

And:

```jsx
{name}
```

is dynamic JavaScript content.

React evaluates the JavaScript expression and puts its result into the UI.

The basic idea is:

```text
JSX
  ↓
Static content
  +
JavaScript expressions
  ↓
React evaluates the expressions
  ↓
Final UI
```

---

## 6. What Happens When JavaScript Is Used in JSX?

For example:

```jsx
const name = "Aayush"

<h1>Hello {name}</h1>
```

Conceptually:

```text
JSX
<h1>Hello {name}</h1>
          ↓
{name}
          ↓
JavaScript evaluates name
          ↓
"Aayush"
          ↓
React creates/updates the DOM
          ↓
<h1>Hello Aayush</h1>
```

Important:

React does not literally change our source code from:

```jsx
<h1>Hello {name}</h1>
```

to:

```jsx
<h1>Hello Aayush</h1>
```

Our JSX source code stays the same.

React evaluates the JSX and creates/updates the actual DOM based on the result.

---

# 7. Parent and Child Components

We created another component called `User`.

```jsx
function User() {
  return (
    <h2>User Information</h2>
  )
}
```

Then we used it inside `App`:

```jsx
function App() {
  return (
    <>
      <h1>Hello React</h1>
      <User />
    </>
  )
}
```

This creates a relationship:

```text
App
│
└── User
```

`App` is the **parent component**.

`User` is the **child component**.

---

# 8. Why Do We Need Props?

We had data inside `App`:

```jsx
function App() {
  const name = "Aayush"
  const age = 20

  ...
}
```

But the `User` component does not automatically have access to those variables.

The `name` and `age` variables belong to `App`.

We needed a way to send this information from `App` to `User`.

This is where **Props** are used.

---

# 9. Passing Props

We changed:

```jsx
<User />
```

to:

```jsx
<User name={name} age={age} />
```

This means that `App` is sending data to `User`.

The complete example:

```jsx
function App() {
  const name = "Aayush"
  const age = 20

  return (
    <>
      <h1>I am {name}</h1>
      <p>My current Age is {age}</p>

      <User name={name} age={age} />
    </>
  )
}
```

Here:

```jsx
name={name}
```

means:

```text
prop name = name
value = value of the JavaScript variable name
```

And:

```jsx
age={age}
```

means:

```text
prop name = age
value = value of the JavaScript variable age
```

---

# 10. Receiving Props

The child component can receive the props through a parameter.

We changed:

```jsx
function User() {
```

to:

```jsx
function User(props) {
```

Then we could access the values using:

```jsx
props.name
```

and:

```jsx
props.age
```

Example:

```jsx
function User(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </>
  )
}
```

The browser displays:

```text
Aayush
Age: 20
```

---

# 11. What is the `props` Object?

When we write:

```jsx
<User name={name} age={age} />
```

React provides the child component with an object containing the props.

Conceptually:

```js
{
  name: "Aayush",
  age: 20
}
```

Then:

```jsx
function User(props)
```

receives that object.

Therefore:

```jsx
props.name
```

gives:

```text
"Aayush"
```

and:

```jsx
props.age
```

gives:

```text
20
```

---

# 12. Props Flow

The complete flow is:

```text
App (Parent)
│
├── name = "Aayush"
├── age = 20
│
│   <User name={name} age={age} />
│              │
│              │ Props
│              ↓
│        User (Child)
│              │
│              ├── props.name → "Aayush"
│              └── props.age  → 20
│
└── UI
```

The important idea is:

> Props allow a parent component to pass data to a child component.

---

# 13. Complete React Component Flow

The overall flow we learned today is:

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
    │ contains <User />
    │
    │ passes props
    ↓
User component
    │
    │ receives props
    ↓
React renders the UI
    │
    ↓
Browser
```

---

# 14. Complete Example

The final example we created today was:

```jsx
function User(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </>
  )
}

function App() {
  const name = "Aayush"
  const age = 20

  return (
    <>
      <h1>I am {name}</h1>
      <p>My current Age is {age}</p>

      <User name={name} age={age} />
    </>
  )
}

export default App
```

---

# 15. Important Things I Learned Today

### JSX

A React component must return one outer JSX structure.

Multiple elements can be grouped using:

```jsx
<>
  ...
</>
```

### Fragment

A Fragment groups JSX elements without creating an additional HTML element.

```jsx
<>
  <h1>Hello</h1>
  <p>React</p>
</>
```

### Dynamic JSX

JavaScript expressions can be used inside JSX using `{}`.

```jsx
<h1>Hello {name}</h1>
```

### Parent Component

The component that renders another component is the parent.

```jsx
function App() {
  return <User />
}
```

### Child Component

The component being rendered by another component is the child.

```jsx
function User() {
  return <h2>User</h2>
}
```

### Props

Props are used to pass data from a parent component to a child component.

```jsx
<User name={name} age={age} />
```

### Receiving Props

The child receives the props through the function parameter:

```jsx
function User(props) {
  return <h2>{props.name}</h2>
}
```

---

# 16. Most Important Rule From Today

Remember the direction of Props:

```text
Parent
  │
  │ Props
  ↓
Child
```

Props flow **from parent to child**.

The child can use the data received through props.

---

# 17. Day 2 Summary

Today I learned how JSX handles multiple elements, how Fragments work, how JavaScript values can be displayed dynamically inside JSX, and how components can pass information to other components using Props.

The most important concepts from today are:

```text
JSX
  ↓
JavaScript expressions {}
  ↓
Parent Component
  ↓
Props
  ↓
Child Component
  ↓
Dynamic UI
```

The biggest new concept today was **Props**.

Props allow components to become reusable because the same component can receive different data.

For example:

```jsx
<User name="Aayush" age={20} />
<User name="Rahul" age={25} />
<User name="John" age={30} />
```

The same `User` component can display different information depending on the props it receives.

---

## Day 2 Completed ⚛️

Today I moved from simply understanding how React displays JSX to understanding how React components can **share data with each other**.

Next, I will continue from Props and learn the next React concepts step by step.