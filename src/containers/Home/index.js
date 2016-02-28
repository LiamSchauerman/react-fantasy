import React, { Component, PropTypes } from 'react';

/* global styles for app */
//import './styles/app.scss';
/* application components */
import data from '../../data';
import {setTeam} from 'actions/teams';
const Bar = ({width, height}) => {
  return (
    <div style={{
      backgroundColor: 'green',
      width,
      height
    }}></div>
  )
};

const Team = ({teamName}) => {
  return (
    <div onClick={() => setTeam({})} style={{width: '200px', height: '50px', float: 'left'}}>
      {teamName}
    </div>
  )
};
const Home = () => {
  console.log('render HOME');

  return (
    <div style={{width: '800px'}}>
      <Bar width="100px" height="20px"/>
      <div style={{width: '100%'}}>
        <Team teamName="Real Beal" />
        <Team teamName="King and his Court" />
      </div>
    </div>
  );
};

export default Home;


