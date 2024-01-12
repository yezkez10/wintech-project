import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WomenPage from './pages/Women.js';
import MenPage from './pages/Men.js';
import KidsPage from './pages/Kids.js';
import BabyPage from './pages/Baby.js';
import NavBar from './NavBar.js';
import Home from './Home.js';

function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/baby" element={<BabyPage />} />
      </Routes>
    </div>
  );
}

export default App;
