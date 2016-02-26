import React, { Component } from 'react';

/* components */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import {setTeam} from '../../actions/team';
import {setChannel, buildSchedule, loadLiveVideo, showEPG, hideEPG} from '../../actions/livetv';
import {EPG, LiveDetails, VideoPlayer} from '../../components';

const mapStateToProps = (state) => {
  return {
    data: state.data.channels,
    teams: state.data.teams
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTeam

  }, dispatch);
};

@connect(mapStateToProps, mapDispatchToProps)

export default class Home extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const styles = require('./LiveTv.scss');
    const {data} = this.props;

    return (
      <div>
        {data}
      </div>
    );
  }
}
