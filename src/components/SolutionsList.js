import React, { Component } from 'react';
import availableSolutions from '../models/solutions.json';

class SolutionsList extends Component {
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

export default SolutionsList;