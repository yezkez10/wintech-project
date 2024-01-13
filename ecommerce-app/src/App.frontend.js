import "./App.css";
import "./App.js";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <div className="App">
      <h2> Welcome to </h2>
      <App />
      <ProductDetails productId={1} />
      <ProductDetails productId={2} />
      <ProductDetails productId={3} />
    </div>
  );
}

export default App;

