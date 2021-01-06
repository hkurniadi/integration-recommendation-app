import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import C from './constants';
import { selectedCriteria } from './store/reducers';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Redux
const initialSelectedCriteria = [];

// console.log("Initial State", initialSelectedCriteria);

const additionalCriteria = [
  {
    "id": 1,
    "isChecked": false,
    "name": "One-way",
    "value": "one-way"
  }
];

const action = {
  type: C.ADD_CRITERIA,
  payload: additionalCriteria
};

const nextSelectedCriteria = selectedCriteria(initialSelectedCriteria, action);

// console.log("Next State", nextSelectedCriteria);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();