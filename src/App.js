import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components Import
import SolutionsList from './components/SolutionsList';
import UserCriteria from './components/UserCriteria';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <SolutionsList></SolutionsList>
        <UserCriteria></UserCriteria>  
      </Container>      
    </div>
  );
}

export default App;
