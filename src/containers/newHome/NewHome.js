import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Chart} from '../../components/Chart/Chart';

class TeamRow extends Component {
  static PropTypes = {
    teams: React.PropTypes.array
  };

  render() {
    const {teams} = this.props;
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

/* actions */
import {setTeam} from 'actions/teams';


const mapStateToProps = ({league}) => {
  return {
    data: league.data,
    activeTeams: league.activeTeams,
    teamMap: league.teamMap,
    statMap: league.statMap
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
    const {data, activeTeams, statMap, teamMap} = this.props;
    console.log(statMap, activeTeams);
    const content = (
      <section>
        <div className="container">
          {
            Object.keys(statMap).map((stat) => {
              // for each stat return a chart
              return (
                <div key={stat}>
                  <br />
                  <Chart teams={activeTeams} statId={stat} />
                  <br />

                </div>
              );
            })
          }
        </div>
      </section>
    );

    return content
  }
}
