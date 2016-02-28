import data from '../data';
const initialState = {
  data: data,
  activeTeams: []
};

console.log(initialState);

export function main(state = initialState, action) {
  switch (action.type) {
    case 'SET_TEAM':
      return {
        ...state,
        [activeTeams[action.idx]]:  action.teamName
      };
    default:
      return state;
  }
}
