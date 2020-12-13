import React, { Component } from 'react';
import RecommendedSolutions from './RecommendedSolutions';
import allCriteria from '../models/criteria.json'

class UserCriteria extends Component {
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


export default UserCriteria;