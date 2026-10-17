# Day 6 — React Forms and Controlled Inputs

## What I Learned Today

### 1. Controlled Inputs Using `useState`

A controlled input is an input field whose value is managed by React state.

We used `useState('')` to store the name entered by the user.

**Example:**

```jsx
const [name, setName] = useState('');
```

- `name` stores the current input value.
- `setName` updates the value.
- `useState('')` initializes the input with an empty string.

We connected the input field to state using `value` and `onChange`.

```jsx
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your name"
  className="form-control"
/>
```

**How it works:**
- `value={name}` displays the current state in the input.
- `onChange` runs whenever the user types.
- `e.target.value` gets the text entered by the user.
- `setName()` updates the state.

### 2. Handling Form Submission

We used the `onSubmit` event to handle form submission.

**Example:**

```jsx
function handleSubmit(e) {
  e.preventDefault();
  console.log(name);
}
```

- `e` represents the form submission event.
- `e.preventDefault()` prevents the browser's default form submission, which normally reloads the page.
- `console.log(name)` prints the entered name in the browser console.

We connected the function to the form:

```jsx
<form onSubmit={handleSubmit}>
  {/* Input field and Submit button */}
  <button type="submit" className="btn btn-success">
    Submit
  </button>
</form>
```

When the user clicks Submit, `handleSubmit` runs.

### 3. Storing the Submitted Name

We created a separate state variable to store the submitted name.

```jsx
const [submittedName, setSubmittedName] = useState('');
```

Inside `handleSubmit`, we updated this state:

```jsx
function handleSubmit(e) {
  e.preventDefault();

  setSubmittedName(name);
  setName('');
}
```

- `setSubmittedName(name)` saves the entered name for display.
- `setName('')` clears the input field after submission.

We used two separate state variables because the input value and submitted value serve different purposes.

### 4. Conditional Rendering Using `&&`

We used the `&&` operator to display the greeting only when a submitted name exists.

```jsx
{submittedName && <h3>Hello, {submittedName}!</h3>}
```

**Example:**

If `submittedName` contains `"Aayush"`, the page displays:

Hello, Aayush!

If `submittedName` is an empty string, the greeting is not displayed.

### 5. JSX Attributes

We learned to use React's JSX attribute names:

- `className` instead of `class`.
- `htmlFor` instead of `for`.

**Example:**

```jsx
<label htmlFor="Name" className="col-form-label">
  Name
</label>

<input type="text" id="Name" className="form-control" />
```

---

## How I Implemented It

I created a React form application using Vite and Bootstrap.

### Complete Code — `App.jsx`

```jsx
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name);
    setSubmittedName(name);
    setName('');
  }

  return (
    <div className="container mt-2">
      <h1 className="text-center">Day 6 - React Forms</h1>

      <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label
              htmlFor="Name"
              className="col-form-label fs-3"
            >
              Name
            </label>

            <span className="fs-3">:</span>
          </div>

          <div className="col-auto">
            <input
              type="text"
              id="Name"
              placeholder="Enter your name"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="btn-style d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>

      {submittedName && (
        <h3 className="mt-3">
          Hello, {submittedName}!
        </h3>
      )}
    </div>
  );
};

export default App;
```

## Example Output

**Step 1:** Enter `Aayush` in the input field.

**Step 2:** Click Submit.

**Step 3:** The input field becomes empty, and the page displays:

```text
Hello, Aayush!
```

**Step 4:** Enter another name, such as `Rahul`, and click Submit again.

The greeting updates to:

```text
Hello, Rahul!
```

## Key Takeaway

Today, I learned how to manage form input using React state, handle form submission with `onSubmit`, prevent page reloads with `e.preventDefault()`, display data conditionally, and clear an input field after submission while keeping the submitted value visible.