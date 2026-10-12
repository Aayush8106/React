# Day 4 - React Learning

## Topic: Reusable Components, Conditional Rendering, Arrays, `.map()`, and the `key` Prop

## 1. What I Learned Today

Today, I learned how to create a Product List using React. I practiced reusable components, props destructuring, conditional rendering, arrays of objects, the `.map()` method, and the `key` prop. I also learned how to style the product list using CSS.

## 2. Creating a Reusable Product Component

I learned how to create a reusable `Product` component that displays information about a product.

Example:

```jsx
function Product({ name, price, category, inStock }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{category}</p>
      <p>{inStock ? "In Stock" : "Out Of Stock"}</p>
    </>
  );
}
```

Here:

- `Product` is the component name.
- `name`, `price`, `category`, and `inStock` are props.
- Destructuring allows us to access these props directly.
- The component can display different products depending on the values it receives.

Instead of writing the same JSX for every product, we can reuse this component.

## 3. Passing Multiple Props

I learned how to pass multiple properties to the `Product` component.

Example:

```jsx
<Product
  name="Keyboard"
  price={999}
  category="Accessories"
  inStock={true}
/>
```

Important points:

- Strings can be passed using quotation marks.
- Numbers and booleans can be passed using curly braces.
- Each prop has a name and a value.
- The child component receives these values through its props.

## 4. Conditional Rendering

I learned how to display different text based on a condition using the ternary operator.

Example:

```jsx
{inStock ? "In Stock" : "Out Of Stock"}
```

Here:

- If `inStock` is `true`, the output is `In Stock`.
- If `inStock` is `false`, the output is `Out Of Stock`.
- The condition is checked inside the JSX.
- Conditional rendering helps display different UI depending on the data.

I also learned that the original boolean value should be passed to the component rather than converting it into text unnecessarily.

Example:

```jsx
<Product inStock={product.inStock} />
```

The `Product` component then decides which text to display.

## 5. Arrays of Objects

I learned how to store multiple products inside an array of objects.

Example:

```jsx
const Products = [
  {
    name: "Keyboard",
    price: 999,
    category: "Accessories",
    inStock: true,
  },
  {
    name: "Mouse",
    price: 499,
    category: "Accessories",
    inStock: false,
  },
  {
    name: "Headphones",
    price: 1499,
    category: "Audio",
    inStock: true,
  },
];
```

Important points:

- An array can store multiple objects.
- Each object represents one product.
- Each product has properties such as `name`, `price`, `category`, and `inStock`.
- We can access object properties using dot notation.

Example:

```jsx
product.name
product.price
product.category
product.inStock
```

Here, `product` represents one product object.

## 6. The `.map()` Method

I learned how to use `.map()` to iterate over an array and create a new array from its elements.

Example:

```jsx
const names = Products.map((product) => {
  return product.name;
});
```

If `Products` contains the three products above, the result will be:

```text
["Keyboard", "Mouse", "Headphones"]
```

Here:

- `.map()` processes every element in the array.
- `product` represents the current object in each iteration.
- `product.name` accesses the current product's name.
- The `return` statement determines what each iteration produces.

In React, `.map()` is commonly used to render lists of components.

## 7. Rendering Components Using `.map()`

Instead of writing a separate `<Product />` component for every product, I learned how to render the products dynamically using `.map()`.

Example:

```jsx
{Products.map((product) => {
  return (
    <Product
      key={product.name}
      name={product.name}
      price={product.price}
      category={product.category}
      inStock={product.inStock}
    />
  );
})}
```

Here:

- `Products.map()` iterates through the products array.
- Each iteration provides one product object.
- The object's properties are passed to the reusable `Product` component.
- React renders one product component for each object.

This makes the application easier to maintain. If I add another product to the array, it can appear automatically without manually writing another `<Product />` element.

## 8. The `key` Prop

I learned why React uses the `key` prop when rendering lists.

Example:

```jsx
<Product
  key={product.name}
  name={product.name}
  price={product.price}
/>
```

Here:

- `key` helps React identify each item in a list.
- Each key should be unique among sibling elements.
- I used `product.name` as the key because the product names are unique in my current array.
- Keys help React track which items have been added, removed, or changed.
- React may show a warning if a list of elements does not have keys.

Important: `key` is a special React attribute. It is used internally by React and is not available as a normal prop inside the `Product` component.

## 9. My Day 4 Project: My Products

I created a Product List application using React.

The application displays product names, prices, categories, and stock availability.

### Products included

| Product | Price | Category | Availability |
|---|---:|---|---|
| Keyboard | ₹999 | Accessories | In Stock |
| Mouse | ₹499 | Accessories | Out Of Stock |
| Headphones | ₹1499 | Audio | In Stock |

### Features implemented

- Created a reusable `Product` component.
- Passed multiple props to the component.
- Used destructuring to access props.
- Stored product information in an array of objects.
- Used conditional rendering for stock availability.
- Used `.map()` to render products dynamically.
- Added a `key` prop to the rendered product components.
- Styled the application using CSS.
- Created product cards with rounded corners, shadows, and hover effects.
- Used a responsive CSS grid to arrange the product cards.
- Added different colors for in-stock and out-of-stock labels.

## 10. CSS Styling

I learned how CSS can improve the appearance of a React application.

I used CSS classes such as:

```css
.product-list
.product-card
.product-price
.stock-status
.in-stock
.out-of-stock
```

Their purposes are:

- `.product-list` creates the grid layout for the products.
- `.product-card` styles each product card.
- `.product-price` highlights the price.
- `.stock-status` styles the stock label.
- `.in-stock` gives the available status a green appearance.
- `.out-of-stock` gives the unavailable status a red appearance.

I also learned that JSX uses `className` instead of the HTML `class` attribute.

Example:

```jsx
<div className="product-card">
  <h2>{name}</h2>
</div>
```

## 11. Important Things to Remember

1. Components allow us to divide a React application into reusable pieces.
2. Props pass data from a parent component to a child component.
3. Destructuring makes props easier to access.
4. Conditional rendering allows the UI to change depending on a condition.
5. Arrays of objects can store structured data for multiple products.
6. Dot notation is used to access object properties.
7. `.map()` processes every element in an array and returns a new array.
8. In React, `.map()` is commonly used to render lists.
9. Each rendered list item should have a suitable, unique `key`.
10. The `key` prop helps React track list items.
11. Boolean values such as `true` and `false` can be used for conditional rendering.
12. CSS classes control the appearance and layout of components.
13. JSX uses `className` instead of `class`.

## 12. Common Mistakes

### Mistake 1: Passing the Wrong Value to a Prop

Incorrect:

```jsx
<Product
  inStock={product.inStock ? "In Stock" : "Out Of Stock"}
/>
```

If the component expects `inStock` to be a boolean, this passes a string instead.

Correct:

```jsx
<Product inStock={product.inStock} />
```

The component can then use the ternary operator to decide which status to display.

### Mistake 2: Duplicating JSX Inside `.map()`

Instead of manually writing all the product headings and paragraphs inside `.map()`, I learned to reuse the `Product` component.

This avoids duplicating the same JSX and makes the code easier to maintain.

### Mistake 3: Forgetting the `key` Prop

When rendering a list using `.map()`, React expects each sibling element to have a suitable key.

Example:

```jsx
<Product key={product.name} name={product.name} />
```

### Mistake 4: Confusing an Array with an Object

An array contains elements that can be accessed by index, while an object contains properties that can be accessed by name.

Example:

```jsx
Products[0]       // First product object
Products[0].name  // Name of the first product
```

### Mistake 5: Forgetting `className`

In JSX, use `className` to assign a CSS class.

Correct:

```jsx
<div className="product-card">
```

## 13. Day 4 Summary

Today, I learned:

- How to create reusable React components.
- How to pass multiple props and destructure them.
- How to use conditional rendering with the ternary operator.
- How to store data in arrays of objects.
- How to access object properties using dot notation.
- How to use `.map()` to render lists dynamically.
- Why React uses the `key` prop.
- How to reuse components instead of duplicating JSX.
- How to style product cards using CSS.
- How to build a responsive Product List application.

**Day 4 completed!**