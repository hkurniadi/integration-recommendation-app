import React, { Component, useState, useEffect } from 'react';
import availableSolutions from '../models/solutions.json';

/* Using Class Component */
/* class RecommendedSolutions extends Component {
  constructor() {
    super();
    this.state = {
      solutionRecommendations: [],
      allSolutions: availableSolutions
    };

    this.recommendSolutions = this.recommendSolutions.bind(this);
  }

  recommendSolutions(userRequirements) {
    let availableSolutions = this.state.allSolutions;
    let currentRecommendations = [];

    if (userRequirements.length === 1) {
      userRequirements.forEach((requirement, index) => {
        for (let solution of availableSolutions) {
          if (solution.criteria.includes(requirement) === true) {
            currentRecommendations.push(solution);
            // console.log("Current recommended solutions from the first input", currentRecommendations);
          }; 
        };
      });
    } else if (userRequirements.length > 1) {
      for (let solution of availableSolutions) {
        let numOfMatches = 0;

        for (let i = 0; i <= userRequirements.length - 1; i++) {
          if (solution.criteria.includes(userRequirements[i]) === true) {
            numOfMatches++;
          } else {
            numOfMatches = 0;
            break;
          };
        };

        if (numOfMatches === userRequirements.length) {
          currentRecommendations.push(solution);
        };
      };
    };

    this.setState({
      solutionRecommendations: currentRecommendations
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userInput.length === 0) {
      this.setState({
        solutionRecommendations: []
      })
    } else {
      this.recommendSolutions(nextProps.userInput);
    }
  }

  render() {
    return (
      <div>
        <h1>::RecommendedSolutions Component::</h1>
        <p>Here are the recommended solutions</p>
        <ul>
          {
            this.state.solutionRecommendations.map(x => <li key={x.id}>{x.name}</li>)
          }
        </ul>
        <h1>::::</h1>
      </div>
    )
  }

}; */

/* Using Functional Component and Hooks */
const RecommendedSolutions = (props) => {
  // console.log(props);
  const [solutionRecommendation, setSolutionRecommendation] = useState([]);
  const [allSolutions, setAllSolutions] = useState(availableSolutions);

  // Effect to handle updated userRequirements prop from the UserCriteria component
  useEffect(() => {
    const recommendSolutions = (userRequirements) => {
      let availableSolutions = allSolutions;
      let currentRecommendations = [];
  
      if (userRequirements.length === 1) {
        userRequirements.forEach((requirement, index) => {
          for (let solution of availableSolutions) {
            if (solution.criteria.includes(requirement) === true) {
              currentRecommendations.push(solution);
              // console.log("Current recommended solutions from the first input", currentRecommendations);
            }; 
          };
        });
      } else if (userRequirements.length > 1) {
        for (let solution of availableSolutions) {
          let numOfMatches = 0;
  
          for (let i = 0; i <= userRequirements.length - 1; i++) {
            if (solution.criteria.includes(userRequirements[i]) === true) {
              numOfMatches++;
            } else {
              numOfMatches = 0;
              break;
            };
          };
  
          if (numOfMatches === userRequirements.length) {
            currentRecommendations.push(solution);
          };
        };
      };
  
      setSolutionRecommendation(currentRecommendations);
    };

    if (props.userInput.length === 0) {
      setSolutionRecommendation([]);
    } else {
      recommendSolutions(props.userInput);
    }
  },
    [props, allSolutions]
  );

  return (
    <div>
      <h1>::RecommendedSolutions Component::</h1>
      <p>Here are the recommended solutions</p>
      <ul>
        {
          solutionRecommendation.map(x => <li key={x.id}>{x.name}</li>)
        }
      </ul>
      <h1>::::</h1>
    </div>
  );
};

export default RecommendedSolutions;