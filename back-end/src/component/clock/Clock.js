// Clock.js
import React from 'react';
import Moment from 'moment';

const moment =  Moment;
 
export class Clock extends React.Component {
  render() {
    return <h4>{ moment().format('MMMM Do YYYY, h:mm:ss a') }</h4>
  }
}
 