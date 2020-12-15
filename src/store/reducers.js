import C from '../constants';

export const selectedCriteria = (state=[], action) => {
  switch (action.type) {
    case C.ADD_CRITERIA:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;    
  }
};