import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components Import
import SolutionsList from './components/SolutionsList';
import UserCriteria from './components/UserCriteria';

function App() {
  return (
    <div className="App">
      <SolutionsList></SolutionsList>
      <UserCriteria></UserCriteria>
    </div>
  );
}

export default App;
