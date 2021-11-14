import React from 'react';
import ReactDOM from 'react-dom';

import {ShowCalendar} from './components/laundryCalendar.js';
import './components/index.css';
import {Table} from './components/laundryTime.js';
//const Table = React.lazy(() => import('./laundryTime.js'));
import {SignUp} from './components/laundrySignUp.js';



// free and booked machines (example)
const TIMES = [
  {key: 8, time: '8:00am - 9:00am ', machine1: true, machine2: true, machine3: true},
  {key: 9, time: '9:00am - 10:00am ', machine1: false, machine2: true, machine3: true},
  {key: 10, time: '10:00am - 11:00am ', machine1: false, machine2: false, machine3: false},
  {key: 11, time: '11:00am - 12:00pm ', machine1: true, machine2: true, machine3: true},
  {key: 12, time: '12:00pm - 1:00pm ', machine1: true, machine2: true, machine3: true},
  {key: 13, time: '1:00pm - 2:00pm ', machine1: true, machine2: true, machine3: true},
  {key: 14, time: '2:00pm - 3:00pm ', machine1: true, machine2: true, machine3: true},
  {key: 15, time: '3:00pm - 4:00pm ', machine1: true, machine2: true, machine3: true},
  {key: 16, time: '4:00pm - 5:00pm ', machine1: true, machine2: true, machine3: true},
  {key: 17, time: '5:00pm - 6:00pm ', machine1: true, machine2: true, machine3: true},
  {key: 18, time: '6:00pm - 7:00pm ', machine1: true, machine2: true, machine3: true},
  {key: 19, time: '7:00pm - 8:00pm ', machine1: true, machine2: true, machine3: true},
  {key: 20, time: '8:00pm - 9:00pm ', machine1: true, machine2: true, machine3: true},
  {key: 21, time: '9:00pm - 10:00pm ', machine1: true, machine2: true, machine3: true},
  {key: 22, time: '10:00pm - 11:00pm ', machine1: true, machine2: true, machine3: true},
];



  // Main window 
  class MainWindow extends React.Component {
    
    constructor(props) {
      super(props);
      this.submitData = this.submitData.bind(this);
      this.state = {
        step: 0
      }    
      this.selectedPerson = {
        firstname: '',
        lastname: '',
        email: '',
        roomnumber: ''
      };
      this.selected = [];
      this.selectedTime = [];
      this.selectedMachine = 0;
      this.selectedDate = new Date();
      this.timeToShow = "0 am";
    }

    // when data about person is submited -> next step
    submitData() {
      console.log(this.selectedDate);      
      var newStep = this.state.step + 1;
      console.log("step: "+newStep);
      this.setState({
        step: newStep
      });
    }

    setDateData(date) {
      this.selectedDate = date;
      console.log("this.selectedDate: ", this.selectedDate);
      this.submitData();
    }

    setTimeData(time, machine) {
      this.selectedTime = time;
      this.selectedMachine = machine;
      console.log("this.selectedTime", this.selectedTime);
      if (time<12) {
        this.timeToShow = ""+time+" am";
      } else if (time===12) {
        this.timeToShow = ""+time+" pm";
      } else {
        time = time-12;
        this.timeToShow = ""+time+" pm";
      }
      this.submitData();
    }

    // save all data as json string
    setPersonData(person) {
      this.selectedPerson = person;
      var day = this.selectedDate.getDate();    
      var month = this.selectedDate.getMonth();
      var year = this.selectedDate.getFullYear();
      var hour = this.selectedTime;
      console.log(this.selectedDate);
      this.selectedDate = new Date(year, month, day, hour, 0);
      console.log(this.selectedDate);
      console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
      var room = this.selectedPerson.roomnumber
      this.selected = JSON.stringify({[room]:{
        roomnumber: room, 
        firstname: this.selectedPerson.firstname,
        lastname: this.selectedPerson.lastname,
        email: this.selectedPerson.email,
        date: this.selectedDate,
        machine: this.selectedMachine
      }});
      console.log("selected: ", this.selected);
      console.log("this.selectedPerson: ", this.selectedPerson) 
      this.submitData();
    }
       
    // show first calendar, second time, third sign up
    render() {
      var element;
      console.log("MainWindow");
      if (this.state.step===0) {
        element = (
          <div className="laundry-calendar">
            <ShowCalendar setParentDateData={this.setDateData.bind(this)}/>
          </div>
        );
      } else if (this.state.step===1) {
        element = (
          <div className="laundry-time">
            <Table times={TIMES} setParentTimeData={this.setTimeData.bind(this)}/>
          </div>
        );      
        console.log(this.selectedDate.toString()) 
      } else if (this.state.step===2) {
        element = (
          <div className="laundry-calendar">
            <SignUp setParentPersonData={this.setPersonData.bind(this)}/>
          </div>
        );       
      } else {
        element = (
          <div >
            <p>Hey {this.selectedPerson.firstname}!</p>
            <p>You booked machine {this.selectedMachine} for {this.selectedDate.toDateString()} at {this.timeToShow}. </p>
          </div>
        ); 
      }     
  
      return (
        
        <div className="laundry">
          <h1>Duck Republik</h1>       
            {element}
        </div>
      );
    }
  }

   
   
  // ========================================
  
  ReactDOM.render(
    <MainWindow />,
    document.getElementById('root')
  );

