// App.js
import React from 'react';
import { Clock } from '../clock/Clock';
 
class Myapp extends React.Component {
  render() {
    return (
      <div>
        <h1>What time is it?</h1>
        <Clock />
      </div>
    );
  }
}