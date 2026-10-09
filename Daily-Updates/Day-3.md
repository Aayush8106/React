# Day 3 - React Learning

## Topic: Props, Props Destructuring, and Reusable Components

### 1. What I Learned Today

Today, I learned how to use props in React to pass data from a parent component to a child component. I also learned how to reuse components with different data and how to destructure props.

### 2. What Are Props?

- Props stands for properties.
- Props are used to pass data from one component to another.
- Props allow us to make components reusable.
- Props are passed from the parent component to the child component.
- Props are read-only; a child component should not directly modify its props.

Example:

```jsx
function User(props) {
  return <h1>{props.name}</h1>
}

function App() {
  return <User name="Aayush" />
}

export default App
```

**Output:**
```text
Aayush
```

Here:
- `App` is the parent component.
- `User` is the child component.
- `name` is the prop name.
- `"Aayush"` is the value passed through the prop.
- `props.name` accesses the value inside the child component.

### 3. Passing Multiple Props

We can pass multiple values to a component using different props.

Example:

```jsx
function User(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>
    </>
  )
}

function App() {
  return (
    <User
      name="Aayush"
      age={20}
      role="React Learner"
    />
  )
}

export default App
```

Important points:

- Use quotation marks to pass string values.
- Use curly braces to pass JavaScript values, such as numbers or variables.
- Each prop has a name and a value.

### 4. Props Destructuring

Instead of accessing values using `props.name`, `props.age`, and `props.role`, we can destructure the props.

Before destructuring:

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

After destructuring:

```jsx
function User({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </>
  )
}
```

Destructuring allows us to access the required properties directly.

Both approaches work. Destructuring is often cleaner when a component uses multiple props.

### 5. Reusable Components

A reusable component can display different information depending on the props it receives.

Example:

```jsx
function User({ name }) {
  return <h2>{name}</h2>
}

function App() {
  return (
    <>
      <User name="Aayush" />
      <User name="Rahul" />
      <User name="Priya" />
    </>
  )
}

export default App
```

**Output:**
```text
Aayush
Rahul
Priya
```

We do not need to create a separate component for every user. We can reuse the same `User` component with different props.

### 6. Parent and Child Components

In React, components can be organized into a parent-child structure.

Example:

```jsx
function User({ name }) {
  return <li>{name}</li>
}

function App() {
  return (
    <ul>
      <User name="Aayush" />
      <User name="Rahul" />
    </ul>
  )
}

export default App
```

Responsibilities:

- `App` is the parent component and manages the list structure.
- `User` is the child component and displays one user's information.
- Data flows from the parent to the child through props.

### 7. My Day 3 Project: My Users

I created a small user directory using React components and props.

The app displays each user's name, age, role, and status.

Example:

```jsx
import "./App.css"

function User({ name, age, role, status }) {
  return (
    <li>
      <h3>{name}</h3>
      — <p>Age: {age}</p>
      — <p>Role: {role}</p>
      — <p>Status: {status}</p>
    </li>
  )
}

const App = () => {
  return (
    <div>
      <ul>
        <User
          name="Aayush"
          age={20}
          role="React Learner"
          status="Learning"
        />

        <User
          name="Rahul"
          age={22}
          role="Designer"
          status="Available"
        />

        <User
          name="Priyanshu"
          age={24}
          role="Developer"
          status="Busy"
        />
      </ul>
    </div>
  )
}

export default App
```

Note: I used CSS in `App.css` to make the heading and paragraph elements appear on the same line.

```css
* {
  box-sizing: border-box;
}

h3,
p {
  display: inline-block;
}
```

### 8. JSX Fragments

A fragment lets us group multiple JSX elements without adding an extra HTML element to the DOM.

Example:

```jsx
function User() {
  return (
    <>
      <h2>Aayush</h2>
      <p>React Learner</p>
    </>
  )
}
```

A fragment is useful when a component needs to return multiple sibling elements.

If the component already returns a single root element, such as one `<li>`, a fragment is unnecessary.

### 9. Important Things to Remember

1. Props pass data from a parent component to a child component.
2. Props make components reusable.
3. Props are read-only.
4. We can pass multiple props to a component.
5. Destructuring makes accessing props cleaner.
6. A component name must start with a capital letter.
7. A component must be used in JSX to appear on the page.
8. When rendering multiple items in a list, the parent can own the list structure while the child renders each item.
9. CSS controls the appearance and layout of elements.
10. JSX uses `className` instead of the HTML `class` attribute.

### 10. Common Mistakes

**Mistake 1: Forgetting to pass a prop**

```jsx
<User />
```

If the component expects a `name` prop, `name` will be `undefined` when no value is passed.

**Mistake 2: Using the wrong prop name**

```jsx
<User username="Aayush" />
```

If the child expects `name`, it will not receive the value through `props.name` because the passed prop is named `username`.

**Mistake 3: Forgetting to render the component**

Defining a component does not automatically display it. It must be used in JSX, for example:

```jsx
<User name="Aayush" />
```

**Mistake 4: Creating separate components unnecessarily**

Instead of creating `Aayush`, `Rahul`, and `Priya` components, create one reusable `User` component and pass different props.

### 11. Day 3 Summary

Today, I learned:

- What props are and why they are useful.
- How to pass data from parent components to child components.
- How to pass multiple props.
- How to destructure props.
- How to create and reuse components.
- How to organize a list using parent and child components.
- How to use CSS to change the layout of JSX elements.
- How to build a simple user directory using React.

**Day 3 completed!**