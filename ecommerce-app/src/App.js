
import './App.css';
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await Axios.get("http://localhost:3000");
    setData(response.data);
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div>{data}</div>
  );
}

export default App;



