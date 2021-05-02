import React, { Component, useState, useEffect } from 'react';
import availableSolutions from '../models/solutions.json';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

/* Using Class Component */
/*class RecommendedSolutions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: props.userInput,
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

  componentDidMount() {
    if (this.state.userInput.length === 0) {
      this.setState({
        solutionRecommendations: []
      })
    } else {
      this.recommendSolutions(this.state.userInput);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userInput !== this.props.userInput) {
      this.setState({
        userInput: this.props.userInput
      }, () => {
        this.recommendSolutions(this.state.userInput)
      })
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

};*/

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
      <h1><Badge variant="primary">3. Here are the recommended solutions</Badge></h1>
      <CardDeck>
        {
          solutionRecommendation.map(x => 
            <Card key={x.id}>
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>
                <Card.Text>Lorem ipsum</Card.Text>
              </Card.Body>
            </Card>
          )
        }
      </CardDeck>
    </div>
  );
};

export default RecommendedSolutions;