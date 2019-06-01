import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react'
import Home from './pages/Home'

function App() {
  return (
    <div className="App" style={{ backgroundImage: "radial-gradient(SteelBlue, SlateGray)" }}>
        <Home />
    </div>
  );
}

export default App;
