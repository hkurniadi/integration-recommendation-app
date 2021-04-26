import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components Import
import SolutionsList from './components/SolutionsList';
import UserCriteria from './components/UserCriteria';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'

function App() {
  return (
    <div className="App">
      <Container>
        <Jumbotron>
          <h1>Sales Engineering Recommendation Tool</h1>
          <p>Welcome! To use this tool, follow the steps below</p>
        </Jumbotron>
        <SolutionsList></SolutionsList>
        <UserCriteria></UserCriteria>  
      </Container>      
    </div>
  );
}

export default App;
