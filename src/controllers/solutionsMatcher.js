// const readline = require("readline");
// solutionsData represents all available solutions that will be filtered
// const solutionsData = require('../../models/solutions.json');

// userRequirementInput array to be appended with new user inputs from checkbox selections
// let userRequirementInput = ["selfDevelopment"];
// currentRecommendedSolutions will be updated (appended/removed) based on new user input in the userRequirementInput array
// let currentRecommendedSolutions = [];

// 1. For every input, search through all solutions.Tag
// 2. For every tag match, add the solution to a compiled array
// 3. For every next input, search through the previously compiled array

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function solutionsMatcher(userRequirements, availableSolutions, currentRecommendations) {
  console.log("User input are", userRequirements);

  if (userRequirements.length == 0) {
    return "Please provide your criteria";
  } else {
    userRequirements.forEach((requirement, index) => {
      if (index == 0) {
        // Search initial solutions from all available solutions
        for (let solution of availableSolutions) {
          if (solution.criteria.includes(requirement) == true) {
            currentRecommendations.push(solution);
            console.log("Current recommended solutions from the first input", currentRecommendations);
          }
        };
      } else {
        for (let i = currentRecommendations.length - 1; i >= 0; i--) {
          if (currentRecommendations[i].criteria.includes(requirement) == true) {
            // currentRecommendations array is having the right solution recommendations
            console.log("This solution ", currentRecommendations[i], " is good");
          } else {
            // If currentSolution does not match the requirement, remove the solution from the currentRecommendations Array
            let removedSolution = currentRecommendations.splice(i, 1);
            console.log("Removed solution is ", removedSolution);
            console.log("Current recommended solutions are", currentRecommendations);
          }
        };
      };
    });

    return currentRecommendations;
  };
};

export default solutionsMatcher;

// console.log("With these user input ", userRequirementInput, " the final recommended solutions are ", recommendSolutions(userRequirementInput));

/* Below codes are to get userRequirementInput from the terminal */

// function runPrompter() {
//   rl.question("What is your integration requirement? (enter \"done\" if you are finished)", function(requirement) {
//     if (requirement == "done") {
//       console.log("Your final requirements are", userRequirementInput);
//       console.log("Here are the recommended solutions for you", recommendedSolutions(userRequirementInput));
//       rl.close();
//     } else {
//       userRequirementInput.push(requirement);
//       console.log("Your current requirements are ", userRequirementInput);
//       return runPrompter();
//     };
//   });
// };

// runPrompter();

// rl.on("close", function(){
//   console.log("Bye now!");
//   process.exit(0);
// });

