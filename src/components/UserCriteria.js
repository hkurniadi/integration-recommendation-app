import React, { Component, useState } from 'react';
import RecommendedSolutions from './RecommendedSolutions';
import allCriteria from '../models/criteria.json'

/* Using Class Component */
/* class UserCriteria extends Component {
  constructor() {
    super();
    this.state = {
      userRequirements: allCriteria,
      selectedRequirements: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.clearAll = this.clearAll.bind(this);

  };

  handleClick(event) {
    event.stopPropagation();
    // console.log("this is is the input", event.target);
    let userInput = event.target;
    let currentUserRequirements = this.state.userRequirements; 
    let currentSelectedRequirements = this.state.selectedRequirements;

    currentUserRequirements.forEach(requirement => {
      if (requirement.value === userInput.value) {
        requirement.isChecked = !requirement.isChecked;
        if (requirement.isChecked === true && currentSelectedRequirements.includes(requirement.value) === false) {
          currentSelectedRequirements.push(requirement.value);
        } else if (requirement.isChecked === false && currentSelectedRequirements.includes(requirement.value) === true) {
          let positionOfFoundValue = currentSelectedRequirements.indexOf(requirement.value);
          currentSelectedRequirements.splice(positionOfFoundValue, 1);
        };
      };
    });

    this.setState({
      userRequirements: currentUserRequirements,
      selectedRequirements: currentSelectedRequirements
    });
  };

  clearAll(event) {
    event.preventDefault();
    let currentUserRequirements = this.state.userRequirements;
    let currentSelectedRequirements = this.state.selectedRequirements;

    currentUserRequirements.forEach(requirement => {
      requirement.isChecked = false;
      if (currentSelectedRequirements.includes(requirement.value) === true) {
        let positionOfFoundValue = currentSelectedRequirements.indexOf(requirement.value);
        currentSelectedRequirements.splice(positionOfFoundValue, 1);
      };
    });
    
    this.setState({
      userRequirements: currentUserRequirements
    }, () => console.log("After clear", this.state.userRequirements))
  }

  render() {
    return (
      <div>
        <h1>::UserCriteria Component::</h1>
        <p>Select your user requirements</p>
        {
          this.state.userRequirements.map((x, index) =>
            <div key={x.id}>
              <input key={x.id} type="checkbox" checked={x.isChecked} value={x.value} onClick={this.handleClick} />
              {x.name}
            </div>
          )
        }
        <input type="submit" value="Clear" onClick={this.clearAll}/>
        <h1>::::</h1>
        <RecommendedSolutions userInput={this.state.selectedRequirements} />
      </div>
    );
  }
};


export default UserCriteria; */

/* Using Functional Component AND Hooks */
function UserCriteria(props) {
  const [userRequirements, setUserRequirements] = useState(allCriteria);
  const [selectedRequirements, setSelectedRequirements] = useState([]);

  // console.log("Initializing UserCriteria Component");
  // console.log("Current userRequirements State Variable", userRequirements);
  // console.log("Current selectedRequirements State Variable", selectedRequirements);

  const handleChange = (e) => {
    // console.log("Event.Target.Value =", e.target);
    let userInput = e.target;
    
    let currentUserRequirements = [];
    userRequirements.forEach(requirement => {
      currentUserRequirements.push(requirement);
    }); 

    let currentSelectedRequirements = [];
    selectedRequirements.forEach(requirement => {
      currentSelectedRequirements.push(requirement);
    });

    currentUserRequirements.forEach(requirement => {
      if (requirement.value === userInput.value) {
        // Update the isChecked property of each requirement, so the the checkbox will show as checked
        requirement.isChecked = !requirement.isChecked;
        // Add or Remove the selection in the selectedRequirements State Variable
        if (requirement.isChecked === true && currentSelectedRequirements.includes(requirement.value) === false) {
          currentSelectedRequirements.push(requirement.value);
        } else if (requirement.isChecked === false && currentSelectedRequirements.includes(requirement.value) === true) {
          let positionOfFoundValue = currentSelectedRequirements.indexOf(requirement.value);
          currentSelectedRequirements.splice(positionOfFoundValue, 1);
        };
      };
    });

    setUserRequirements(currentUserRequirements);
    // console.log("After ticking checkbox, userRequirements State Variable is now", userRequirements);
    setSelectedRequirements(currentSelectedRequirements);
    // console.log("After ticking checkbox, selectedRequirements State Variable is now", selectedRequirements);
  };

  const clearAll = (e) => {
    e.preventDefault();

    setUserRequirements((prevUserRequirements) => {
      let clearedUserRequirements = [];
      prevUserRequirements.forEach(requirement => {
        requirement.isChecked = false;
        clearedUserRequirements.push(requirement);
      });
      return clearedUserRequirements;
    });
    console.log("After clear", userRequirements);

    setSelectedRequirements([]);
  };

  return (
    <div>
        <h1>::UserCriteria Component::</h1>
        <p>Select your user requirements</p>
        {
          userRequirements.map((x) =>
            <div key={x.id}>
              <input key={x.id} type="checkbox" checked={x.isChecked} value={x.value} onChange={handleChange} />
              {x.name}
            </div>
          )
        }
        <input type="submit" value="Clear" onClick={clearAll}/>
        <h1>::::</h1>
        <RecommendedSolutions userInput={selectedRequirements} />
      </div>
  )
};

export default UserCriteria;