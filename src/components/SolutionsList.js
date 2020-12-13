import React, { Component, useState, useEffect } from 'react';
import availableSolutions from '../models/solutions.json';

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
      <h1>::SolutionsList Component::</h1>
      <p>These are the available Integration Solutions</p>
      <ul>
        {
          allSolutions.map((x) =>
            <li key={x.id}>
              {x.name}
            </li>
          )
        }
      </ul>
      <h1>::::</h1>
    </div>
  )
}

export default SolutionsList;