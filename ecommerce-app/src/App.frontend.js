import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
  const API_URL = 'http://localhost:4028/api/products'
  const [iniData, setIniData] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setIniData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div className="App">
      <h2> Welcome to </h2>
      <MyApp />
      
    </div>
  );
}

export default App;
