import React from 'react';
import './App.css';

import './css/Style.css';

import Navbar from './components/Navs/Navbar';
import Landing from './pages/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
