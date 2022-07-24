import React from 'react';
import logo from '../Assets/Images/crap_hades_logo.png';
import charon_obol from '../Assets/Images/charon_obol.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hades Boon Power Meter</h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={charon_obol} className="rotate-img" alt="logo" />
      </header>
    </div>
  );
}

export default App;
