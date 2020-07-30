let solutionsData = require('../../models/solutions.json');

let solutionsListArray = solutionsData.map((x) => {
  return `<li>${x.name}</li>`;
});

console.log("This is the solutions array", solutionsListArray);

