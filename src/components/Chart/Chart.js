import React, { PropTypes, Component } from 'react';
import {LineChart} from 'react-d3';
import data from '../../data';

const teamMap = {
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
};
const statMap = {
  'STL': 17,
  'FG': 5,
  'FT': 8,
  '3PM': 10,
  'PTS': 12,
  'REB': 15,
  'OREB': 13,
  'BLK': 18,
  'AST': 16,
};

export class Chart extends Component {
  static PropTypes = {
    teams: React.PropTypes.any,
    statId: React.PropTypes.any
  };

  render() {
    const {teams, statId} = this.props;

    /**
     * input teamId # and statId #
     * @param teamId
     * @param statId
     * @returns {Array}
     */
    const getTeamStats = (teamId, statId) => {
      const res = [];
      const teamStats = data[teamId];
      const weeks = 16;
      for (var i = 1; i < weeks + 1; i++) {
        var weekStats = teamStats[i];
        for (var j = 0; j < weekStats.length; j++) {
          if (weekStats[j].stat.stat_id == statId) {
            res.push(weekStats[j].stat.value)
          }
        }
      }
      return res
    };

    const buildLineData = (arr1, arr2) => {
      const res = [];
      res.push({
        name: teamMap[teams[0]],
        values: arr1.map((stat, idx) => {
          return {x: idx + 1, y: parseFloat(stat)}
        }),
        strokeWidth: 2,
      });
      res.push({
        name: teamMap[teams[1]],
        values: arr2.map((stat, idx) => {
          return {x: idx + 1, y: parseFloat(stat)}
        }),
      });
      return res;
    };
    const d = buildLineData(getTeamStats(teams[0], statMap[statId]), getTeamStats(teams[1], statMap[statId]));

    console.log('statid',statId);
    return (
      <LineChart
        legend={true}
        data={d}
        width={700}
        height={100}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 700,
          height: 300
        }}
        title={statId}
        yAxisLabel={statId}
        xAxisLabel="Week"
        gridHorizontal={true}
      />
    )
  }
}
