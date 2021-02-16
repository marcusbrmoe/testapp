import logo from './logo.svg';
import React from 'react';
import './App.css';
import Test from './components/Test';
import TestQ from './components/TestQ';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! This is from team 3
          hello from Q from virtual machine
        </p>
        <p><TestQ /></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div><Test /></div>
    </div>
  );
}

export default App;
