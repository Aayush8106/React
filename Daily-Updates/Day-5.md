# Day 5 - React Learning

## Topic: Event Handling, useState, State Updates, and Interactive Components

### 1. What I Learned Today

Today, I learned how to handle events in React, update state using `useState`, and create interactive components. I also practiced toggling boolean values, updating a counter, preventing negative values, and resetting the counter.

### 2. React Event Handling

Event handling allows React components to respond to user actions, such as clicking a button.

Example:

```jsx
function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default App;
```

Important points:

- `onClick` handles click events.
- `handleClick` is the function that runs when the button is clicked.
- We pass the function using `onClick={handleClick}`.
- We do not use `onClick={handleClick()}` when we want React to call the function after a click.

Incorrect:

```jsx
<button onClick={console.log("Button clicked!")}>
  Click Me
</button>
```

Here, `console.log()` executes immediately during rendering instead of waiting for the click.

Correct:

```jsx
<button onClick={() => console.log("Button clicked!")}>
  Click Me
</button>
```

The arrow function delays the execution until the button is clicked.

### 3. What Is useState?

`useState` is a React Hook that allows a component to store and update state.

Example:

```jsx
import { useState } from "react";

function App() {
  const [heading, setHeading] = useState(false);

  return (
    <h2>{heading ? "BTN Clicked" : "BTN Not Clicked"}</h2>
  );
}

export default App;
```

Here:

- `useState(false)` initializes the state with `false`.
- `heading` stores the current state value.
- `setHeading` is the function used to update the state.
- When the state changes, React re-renders the component.

The array returned by `useState` contains the current state value and its setter function.

### 4. Updating State Using a Setter Function

We can update the state when a user clicks a button.

Example:

```jsx
import { useState } from "react";

function App() {
  const [heading, setHeading] = useState(false);

  const handleClick = () => {
    setHeading(true);
  };

  return (
    <>
      <h2>{heading ? "BTN Clicked" : "BTN Not Clicked"}</h2>
      <button onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default App;
```

When the button is clicked:

1. `handleClick` runs.
2. `setHeading(true)` updates the state.
3. React re-renders the component.
4. The heading displays `BTN Clicked`.

### 5. Toggling Boolean State

I learned how to switch a boolean value between `true` and `false`.

The NOT operator (`!`) reverses a boolean value.

Example:

```javascript
!false // true
!true  // false
```

Using it in React:

```jsx
const handleClick = () => {
  setHeading(!heading);
};
```

This toggles the state every time the button is clicked.

A more reliable approach when calculating the next state from the previous state is:

```jsx
const handleClick = () => {
  setHeading((prev) => !prev);
};
```

Here, `prev` represents the previous state value.

Expected behavior:

- Initially: `BTN Not Clicked`
- First click: `BTN Clicked`
- Second click: `BTN Not Clicked`
- Third click: `BTN Clicked`

### 6. Updating State Using the Previous Value

I learned how to use the previous state value to calculate the next state.

Example:

```jsx
setCount((prev) => prev + 1);
```

Here:

- `prev` represents the previous state value.
- `prev + 1` calculates the next value.
- React updates the state using the returned value.

This pattern is useful when the next state depends on the previous state.

Examples:

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev - 1);
setHeading((prev) => !prev);
```

### 7. Creating Separate Components

I practiced separating my application into multiple components.

Project structure:

```text
src/
├── components/
│   ├── Toggle.jsx
│   └── Counter.jsx
├── App.jsx
├── App.css
└── main.jsx
```

Responsibilities:

- `Toggle.jsx` contains the toggle functionality.
- `Counter.jsx` contains the counter functionality.
- `App.jsx` imports and renders both components.

Example:

```jsx
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  return (
    <>
      <Toggle />
      <Counter />
    </>
  );
};

export default App;
```

This keeps the code organized and makes components easier to maintain.

### 8. My Day 5 Project: Counter

I created an interactive counter using React and `useState`.

The counter includes three buttons:

- INC — increases the count by one.
- DEC — decreases the count by one.
- Reset — sets the count back to zero.

Example:

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount((prev) => prev + 1);
  };

  const decr = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h3>Counter: {count}</h3>

      <button onClick={incr}>INC</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decr}>DEC</button>
    </>
  );
};

export default Counter;
```

### 9. Preventing the Counter from Going Below Zero

Initially, decrementing the counter could produce negative values. I added a condition to prevent this.

Example:

```jsx
const decr = () => {
  setCount((prev) => (prev > 0 ? prev - 1 : 0));
};
```

Here:

- If `prev > 0` is true, the count decreases by one.
- Otherwise, the count remains `0`.

I also learned that the same logic can be written using an `if/else` statement.

Example:

```jsx
const decr = () => {
  setCount((prev) => {
    if (prev === 0) {
      return 0;
    } else {
      return prev - 1;
    }
  });
};
```

Both approaches work because the updater function returns the next state value.

### 10. Resetting the Counter

I added a Reset button to set the counter back to zero.

Example:

```jsx
const reset = () => {
  setCount(0);
};
```

Unlike incrementing or decrementing, resetting does not depend on the previous state value. The next value is always `0`.

### 11. Important Things to Remember

1. `onClick` handles click events in React.
2. Pass a function to an event handler instead of calling it immediately.
3. `useState` allows components to store and update state.
4. The first value returned by `useState` is the current state.
5. The second value is the setter function.
6. Updating state causes React to re-render the component when the state changes.
7. The NOT operator (`!`) reverses a boolean value.
8. An updater function can calculate the next state from the previous state.
9. The ternary operator provides a concise way to write conditional logic.
10. Separate components help organize React applications.
11. A counter can use `useState(0)` to maintain its current value.
12. A reset function can set state directly using `setCount(0)`.
13. The updater function must return the next state value.

### 12. Common Mistakes

**Mistake 1: Calling a function immediately**

Incorrect:

```jsx
<button onClick={handleClick()}>
  Click Me
</button>
```

Correct:

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

**Mistake 2: Forgetting to import useState**

Incorrect:

```jsx
const [count, setCount] = useState(0);
```

If `useState` has not been imported, the code will produce an error.

Correct:

```jsx
import { useState } from "react";
```

**Mistake 3: Updating state without returning a value**

Incorrect:

```jsx
setCount((prev) => {
  prev = prev - 1;
});
```

Correct:

```jsx
setCount((prev) => prev - 1);
```

The updater function must return the next state value.

**Mistake 4: Always setting the state to true**

Incorrect for toggling:

```jsx
setHeading(true);
```

This always sets the value to `true`.

Correct for toggling:

```jsx
setHeading((prev) => !prev);
```

This reverses the previous boolean value.

### 13. Day 5 Summary

Today, I learned:

- How to handle button clicks using `onClick`.
- Why event handlers should receive functions.
- How to use `useState` to store and update values.
- How React re-renders components when state changes.
- How to toggle a boolean state.
- How to update state using the previous value.
- How to create separate reusable components.
- How to build an interactive counter.
- How to increment, decrement, and reset a counter.
- How to prevent a counter from going below zero.
- How to use the ternary operator for conditional logic.

**Day 5 completed!**