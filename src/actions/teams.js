export function setTeam(team) {
  console.log('SET TEAM action fired');
  return {
    type: 'SET_TEAM',
    teamName: team.teamName || 'teamteam',
    idx: team.idx || 10
  };
}
