import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components Import
import SolutionsList from './components/SolutionsList';
import UserCriteria from './components/UserCriteria';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Here!
        </a>        
      </header> */}
      <SolutionsList></SolutionsList>
      <UserCriteria></UserCriteria>
    </div>
  );
}

export default App;
