import './App.css';
import ProductDetails from './ProductDetails';

function MyButton() {
  return (
    <button>
      Login
    </button>
  );
}

export function MyApp() {
  return (
    <div>
      <h1>e-commerce</h1>
      <MyButton />
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <h2> Welcome to </h2>
      <MyApp />
      <ProductDetails productId={1} />
      <ProductDetails productId={2} />
      <ProductDetails productId={3} />
    </div>
  );
}

export default App;
