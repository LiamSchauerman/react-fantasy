import data from '../data';
const initialState = {
  data: data,
  activeTeams: [1, 7],
  teamMap: {
    '1': 'The Réal Béal',
    '2': 'King and his Court',
    '3': 'Super Splash Bros',
    '4': 'The Gobert Report',
    '5': 'Silver Surfer',
    '6': 'Playa Players Club',
    '7': 'The Hoops Doctor',
    '8': 'Take No Ls',
    '9': 'Portlandia Punishers',
    '10': 'KAT Fan Club',
    '11': 'Duane or Dwayne Wade',
    '12': 'ChefCurryWithTheShot',
  },
  statMap: {
    'STL': 17,
    'FG': 5,
    'FT': 8,
    '3PM': 10,
    'PTS': 12,
    'REB': 15,
    'OREB': 13,
    'BLK': 18,
    'AST': 16,
  }
};

console.log(initialState);

export const mainReducer = (state = initialState, action) => {
  console.log('setting initial state ');
  console.log(state);
  switch (action.type) {
    case 'SET_TEAM':
      return {
        ...state,
        [activeTeams[action.idx]]: action.teamName
      };
    default:
      return state;
  }
}
