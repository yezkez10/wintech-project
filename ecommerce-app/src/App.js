import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to E-Commerce Platform</Text>
      <Text>NAME OF APP</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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



