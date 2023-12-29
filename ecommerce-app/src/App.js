import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getProducts")
      setData(response.data)
      console.log(response.data)
    } catch (err) {
      console.error(err);
    }
    
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div>
      <header>Testing</header>
      {
      data.map(data => {
        <div>
          <p>{data._id}</p>
          <p>{data.saleDate}</p>
        </div>
      })
      }
      </div>
  );
}

export default App;
