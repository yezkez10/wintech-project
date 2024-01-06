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
  const API_URL = 'https://jsonplaceholder.typicode.com/users'
  const [iniData, setIniData] = useState([]);
  const [newData, setNewData] = useState([]);

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


  useEffect(() => {

    const postData = {
      name: 'Posted Man',
      username: 'Postman',
      email: 'psotman@example.com',
    };

    axios.post(API_URL, postData)
      .then(response => {
        console.log('POST Response:', response.data);
        setNewData(prev => [...prev, response.data]);
      })
      .catch(error => {
        console.error('POST Error:', error);
      });
  }, []);

  useEffect(() => {
    const putData = {
      name: 'Updated Name',
      username: 'updatedusername',
      email: 'updated@example.com',
    };

    axios.put('https://jsonplaceholder.typicode.com/users/7', putData)
      .then(response => {
        console.log('PUT Response:', response.data);
        setNewData(prev =>
          prev.map(item =>
            item.id == response.data.id
              ? response.data
              : item));
      })
      .catch(error => {
        console.error('PUT Error:', error);
      });
  }, []);


  useEffect(() => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/11')
      .then(response => {
        console.log('DELETE Response:', response.data);
        setNewData(prev =>
          prev.filter(item => item.id !== 1));
      })
      .catch(error => {
        console.error('DELETE Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <h2> Welcome to </h2>
      <MyApp />
      <h2> Old Data: </h2>
      <ul>
        {iniData.map(item => (
          <li key={item.id}> {item.name} - {item.username} - {item.email} </li>))}
      </ul>

      <h2>New Data:</h2>
      <ul>
        {newData.map(item => (
          <li key={item.id}> {item.name} - {item.username} - {item.email} </li>))}
      </ul>
    </div>
  );
}

export default App;
