import React, { Component, PropTypes } from 'react';

class TeamRow extends Component {
  static PropTypes = {
    teams : React.PropTypes.array
  };

  render() {
    const {teams} = this.props;
    console.log(teams);
    // video should be the API response
    return (
      <div style={{width: '800px'}} >
        team {team}
      </div>
    );

  }
};

export default TeamRow;
