import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {LineChart} from 'react-d3';
import data from '../../data';

const lineData = [
  {
    name: "Real Beal",
    values: [{x: 0, y: 20}, {x: 24, y: 10}],
    strokeWidth: 3,
    strokeDashArray: "5,5",
  },
  {
    name: "King and his Court",
    values: [{x: 70, y: 82}, {x: 76, y: 82}]
  }
];
const buildLineData = (arr1, arr2) => {
  const res = [];
  res.push({
    name: "real beal",
    values: arr1.map((stat, idx) => {
      return {x: idx + 1, y: parseInt(stat)}
    }),
    strokeWidth: 2,
  });
  res.push({
    name: 'king and his court',
    values: arr2.map((stat, idx) => {
      return {x: idx + 1, y: parseInt(stat)}
    }),
  })
  return res;
};


const liamstats = ['201',
  '241',
  '263',
  '225',
  '234',
  '297',
  '290',
  '238',
  '224',
  '264',
  '296',
  '238',
  '260',
  '250',
  '217',
  '286'
];
const dadstats = ['146',
  '172',
  '198',
  '173',
  '192',
  '186',
  '222',
  '208',
  '183',
  '213',
  '190',
  '196',
  '188',
  '207',
  '232',
  '243',
];

const d = buildLineData(liamstats, dadstats);
console.log(d);
console.log('line data');
const Chart = ({stat, team1Data, team2Data }) => {
  return (
    <LineChart
      legend={true}
      data={d}
      width={500}
      height={100}
      viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 300
        }}
      title="REB"
      yAxisLabel="Rebounds"
      xAxisLabel="Week"
      gridHorizontal={true}
    />
  )
}

class TeamRow extends Component {
  static PropTypes = {
    teams: React.PropTypes.array
  };

  render() {
    const {teams} = this.props;
    console.log(teams);
    // video should be the API response
    return (
      <div style={{width: '800px'}}>
        <div style={{width: '200px', float: 'left'}}>
          {teams[0]}
        </div>
        <div style={{width: '200px', float: 'left'}}>
          {teams[1]}
        </div>
      </div>
    );

  }
}
;

//class Category extends Component {
//  // here we pass an array with two objects
//  /**
//   * {
//   *  teamID: (1-12)
//   *  stat: ('PTS', 'OREB', 'FT', etc)
//   *  week: (1-18);
//   * }
//   *
//   * use these to get relevant info from this.data
//   */
//  static PropTypes = {
//    matchupStat: React.PropTypes.array
//  }
//}

/* actions */
import {setTeam} from 'actions/teams';


const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTeam,
  }, dispatch);

};
@connect(mapStateToProps, mapDispatchToProps)
export class NewHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    console.log(TeamRow);
    const data = (
      <section>
        <div className="container">
          <TeamRow teams={["Real Beal", "King and Court"]}/>
          <Chart />
        </div>
      </section>
    );
    console.log(data);

    return data
  }
}
