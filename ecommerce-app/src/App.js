import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Women from './pages/Women.js';
import Men from './pages/Men.js';
import Kids from './pages/Kids.js';
import Baby from './pages/Baby.js';
import NavBar from './NavBar.js';
import Home from './Home.js';

function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/baby" element={<Baby />} />
      </Routes>
    </div>
  );
}

export default App;
