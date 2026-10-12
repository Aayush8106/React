import './App.css'

function Product({ name, price, category, inStock }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>

      <p className="product-price">₹{price}</p>

      <p>Category: {category}</p>

      <p
        className={`stock-status ${
          inStock ? "in-stock" : "out-of-stock"
        }`}
      >
        {inStock ? "In Stock" : "Out Of Stock"}
      </p>
    </div>
  );
}

const App = () => {
  const Products = [
    { name: "Keyboard", price: 999, category: "Accessories", inStock: true },
    { name: "Mouse", price: 499, category: "Accessories", inStock: false },
    { name: "Headphones", price: 1499, category: "Audio", inStock: true },
  ];

  return (
    <>
      <h1>My Products</h1>

      <div className="product-list">
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
      </div>
    </>
  );
};

export default App;
