import React from 'react';


import './index.css';
 
 // create for every time a row in the table
 class TimeRow extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.selectedMachine = 0;
    }

    
    handleChange(event) {
      // save which machine is selected
      const idName = event.target.id;
      if (idName === "machine1") {
        this.selectedMachine = 1;
      } else if (idName === "machine2") {
        this.selectedMachine = 2;
      } else if (idName === "machine3") {
        this.selectedMachine = 3;
      }

      // save selected time
      this.props.setTime(event.target.value, this.selectedMachine);
      //selectedTime = event.target.value;
    
      console.log("this.selectedMachine: ", this.selectedMachine);
      console.log("event.target.value: ", event.target.value);
      console.log("idName: ", idName);      
    }

    // for every free machine at specific time create button
    // for every booked machine write booked out
    render() {
      const timeMMM = this.props.timeMMM;
      var m1 = <p className="bookedout">booked out</p>;
      var m2 = <p className="bookedout">booked out</p>;
      var m3 = <p className="bookedout">booked out</p>;
      if (timeMMM.machine1 === true) {
        m1 = <button className="button" value={timeMMM.key}  id="machine1" onClick={this.handleChange}>sign up</button>;
      }
      if (timeMMM.machine2 === true) {
        m2 = <button className="button" value={timeMMM.key} id="machine2" onClick={this.handleChange}>sign up</button>;
      }
      if (timeMMM.machine3 === true) {
        m3 = <button className="button" value={timeMMM.key} id="machine3" onClick={this.handleChange}>sign up</button>;
      }

      return (
        <tr>
          <td>{timeMMM.time}</td>
          <td>{m1}</td>
          <td>{m2}</td>
          <td>{m3}</td>
        </tr>
      );
    }
  }
  
  // create table with time and machines
  class TimeTable extends React.Component {
    constructor(props) {
      super(props);
      this.giveTimeToMain = this.giveTimeToMain.bind(this);
      this.setTime = this.setTime.bind(this);
      this.selectedTime = 0;
      this.selectedMachine = 0;
    }
    // time to main
    giveTimeToMain() {
      this.props.giveTimeToMain(this.selectedTime, this.selectedMachine);
    }
    setTime(time, machine) {
      console.log("time: ", time);
      console.log("machine: ", machine);
      this.selectedTime = time;
      this.selectedMachine = machine;
      


    }

    render() {
      const rows = [];

      // create rows of table
      this.props.times.forEach((timeMMM) => {
        rows.push(
          <TimeRow
            timeMMM={timeMMM}
            key={timeMMM.key} 
            setTime = {this.setTime.bind(this)}/>
        );
      });
  
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th className="time">Time</th>
                <th className="machine">Machine 1</th>
                <th className="machine">Machine 2</th>
                <th className="machine">Machine 3</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
          <button className="submit" onClick={this.giveTimeToMain}>
              Submit
          </button>
        </div>
      );
    }
  }
  
  // Table time machines
  export class Table extends React.Component {
    constructor(props) {
      super(props);
      this.giveTimeToMain = this.giveTimeToMain.bind(this);

    }
    // time to main
    giveTimeToMain(time, machine) {
      this.props.setParentTimeData(time, machine);
    }

    render() {
      return (
        <div className="around">
          <p>Choose a time and a machine!</p>
          <TimeTable times={this.props.times} giveTimeToMain={this.giveTimeToMain.bind(this)}/>
        </div>
      );
    }
  }
  
 
