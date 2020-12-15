import React, { Component, useState, useEffect } from 'react';
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
  console.log("UserCriteria Component is rendered top");
  
  const [userRequirements, setUserRequirements] = useState(allCriteria);
  const [selectedRequirements, setSelectedRequirements] = useState([]);

  console.log("UserCriteria Component is rendered bottom");

  const handleChange = (e) => {
    // console.log("Event.Target.Value =", e.target.value);
    let userInput = e.target;
    let currentUserRequirements = userRequirements; 
    let currentSelectedRequirements = selectedRequirements;

    currentUserRequirements.forEach(requirement => {
      if (requirement.value === userInput.value) {
        // Update the isChecked property of each requirement, so the the checkbox will show as checked
        requirement.isChecked = !requirement.isChecked;
        if (requirement.isChecked === true && currentSelectedRequirements.includes(requirement.value) === false) {
          currentSelectedRequirements.push(requirement.value);
        } else if (requirement.isChecked === false && currentSelectedRequirements.includes(requirement.value) === true) {
          let positionOfFoundValue = currentSelectedRequirements.indexOf(requirement.value);
          currentSelectedRequirements.splice(positionOfFoundValue, 1);
        };
      };
    });
    // console.log("This is currentUserRequirements", currentUserRequirements);

    setUserRequirements(currentUserRequirements);
    // console.log("New userRequirments State Variable", userRequirements);
    setSelectedRequirements(currentSelectedRequirements);
    // console.log("New selectedRequirements State Variable", selectedRequirements);
  };

  const clearAll = (e) => {
    e.preventDefault();
    let currentUserRequirements = userRequirements;
    let currentSelectedRequirements = selectedRequirements;

    currentUserRequirements.forEach(requirement => {
      // Clear off all check marks
      requirement.isChecked = false;
      // Clear off the suggested values
      if (currentSelectedRequirements.includes(requirement.value) === true) {
        let positionOfFoundValue = currentSelectedRequirements.indexOf(requirement.value);
        currentSelectedRequirements.splice(positionOfFoundValue, 1);
      };
    });
    
    setUserRequirements(currentUserRequirements);
    console.log("After clear", userRequirements)
  };

  return (
    <div>
        <h1>::UserCriteria Component::</h1>
        <p>Select your user requirements</p>
        {
          userRequirements.map((x) =>
            <div key={x.id}>
              <input key={x.id} type="checkbox" defaultChecked={x.isChecked} value={x.value} onChange={handleChange} />
              {x.name}
            </div>
          )
        }
        {/* TODO: clearAll cannot clear the check marks yet, might be because the component is not re-rendered so the list HTML elements are not updated */}
        <input type="submit" value="Clear" onClick={clearAll}/>
        <h1>::::</h1>
        <RecommendedSolutions userInput={selectedRequirements} />
      </div>
  )
};

export default UserCriteria;