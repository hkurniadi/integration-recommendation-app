import React, { Component, useState, useEffect } from 'react';
import availableSolutions from '../models/solutions.json';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';

// Using Class Component
/* class SolutionsList extends Component {
  constructor() {
    super();
    this.state = {
      allSolutions: availableSolutions
    };
  }

  render() {
    return (
      <div>
        <h1>::SolutionsList Component::</h1>
        <p>These are the available Integration Solutions</p>
        <ul>
          {
            this.state.allSolutions.map((x) => 
              <li key={x.id}>
                {x.name}
              </li>
            )
          }
        </ul>
        <h1>::::</h1>
      </div>
    );
  }
}

export default SolutionsList; */

// Using Functional Component AND Hooks
function SolutionsList(props) {
  const [allSolutions, setAllSolutions] = useState(availableSolutions);

  return (
    <div>
      <h1><Badge variant="secondary">Available Integration Options</Badge></h1>
      <ListGroup as="ul">
        {
          allSolutions.map((x) =>
            <ListGroup.Item as="li" key={x.id}>{x.name}</ListGroup.Item>
          )
        }
      </ListGroup>
    </div>
  )
}

export default SolutionsList;