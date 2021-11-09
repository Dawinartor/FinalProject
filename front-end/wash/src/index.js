import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './calendar.css';



import { useState } from 'react';
import Calendar from 'react-calendar';

var selectedPerson = [];
var selectedDate = [];
var selectedTime = [];

  function ShowCalendar() {
    const [date, setDate] = useState(new Date());
    
    /*
    var date2 = new Date("2016-01-04 10:34:23");
    var date3 = new Date();
    var date4 = new Date("2016-1-4 10:34:23");
    <p>{date2.toString()}</p>
        <p>{date2.toTimeString()}</p>
        <p>{date3.toString()}</p>
        <p>{date3.toTimeString()}</p>
        <p>{date4.toString()}</p>
        <p>{date4.toTimeString()}</p>
        <p>{date4.getDate().toString()}</p>
        <p>{date4.getFullYear().toString()}</p>
        <p>{date4.getDay().toString()}</p>*
    */

    console.log("ShowCalendar");
    console.log(date);
  
    return (
      
      <div className='laundry-calendar around'>
        <h2 className='text-calendar'>Laundry Calendar</h2>
        <p>Choose a date!</p>
        
        <p className='text-selected'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} minDate={new Date()}/>
        </div>
        
        <button className="submit" >
          Submit
        </button>
      </div>
    );
  }


  
  class TimeRow extends React.Component {
    render() {
      const timeMMM = this.props.timeMMM;
      var m1 = <p className="bookedout">booked out</p>;
      var m2 = <p className="bookedout">booked out</p>;
      var m3 = <p className="bookedout">booked out</p>;
      if (timeMMM.machine1 === true) {
        m1 = <button className="button">sign up</button>;
      }
      if (timeMMM.machine2 === true) {
        m2 = <button className="button">sign up</button>;
      }
      if (timeMMM.machine3 === true) {
        m3 = <button className="button">sign up</button>;
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
  
  class TimeTable extends React.Component {
    render() {
      const rows = [];

      
      this.props.times.forEach((timeMMM) => {

        rows.push(
          <TimeRow
            timeMMM={timeMMM}
            key={timeMMM.time} />
        );

      });
  
      return (
        <div>
          <p>Selected Time: </p>
          <p>Selected Machine: </p>
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
        </div>
      );
    }
  }
  
  
  class Table extends React.Component {
    render() {
      return (
        <div className="around">
          <p>Choose a time and a machine!</p>
          <TimeTable times={this.props.times} />
          <button className="submit" >
            Submit
          </button>
        </div>
      );
    }
  }
  
  
  const TIMES = [
    {time: '8:00am - 9:00am ', machine1: true, machine2: true, machine3: true},
    {time: '9:00am - 10:00am ', machine1: false, machine2: true, machine3: true},
    {time: '10:00am - 11:00am ', machine1: false, machine2: false, machine3: false},
    {time: '11:00am - 12:00pm ', machine1: true, machine2: true, machine3: true},
    {time: '12:00pm - 1:00pm ', machine1: true, machine2: true, machine3: true},
    {time: '1:00pm - 2:00pm ', machine1: true, machine2: true, machine3: true},
    {time: '2:00pm - 3:00pm ', machine1: true, machine2: true, machine3: true},
    {time: '3:00pm - 4:00pm ', machine1: true, machine2: true, machine3: true},
    {time: '4:00pm - 5:00pm ', machine1: true, machine2: true, machine3: true},
    {time: '5:00pm - 6:00pm ', machine1: true, machine2: true, machine3: true},
    {time: '6:00pm - 7:00pm ', machine1: true, machine2: true, machine3: true},
    {time: '7:00pm - 8:00pm ', machine1: true, machine2: true, machine3: true},
    {time: '8:00pm - 9:00pm ', machine1: true, machine2: true, machine3: true},
    {time: '9:00pm - 10:00pm ', machine1: true, machine2: true, machine3: true},
    {time: '10:00pm - 11:00pm ', machine1: true, machine2: true, machine3: true},
  ];

  class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstname: '',
        lastname: '',
        email: '',
        roomnumber: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
    handleSubmit(event) {
      alert('Machine is booked by '+ this.state.firstname + ' ' + this.state.lastname);
      selectedPerson = [this.state];
      console.log(selectedPerson);
      event.preventDefault();
    }
    render() {
      return (
        <div className="around">
          <p>Sign up!</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Firstname: 
              <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
            </label>
            <br />
            <label>
              Lastname: 
              <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
            </label>
            <br />
            <label>
              E-Mail: 
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
            </label>
            <br />
            <label>
              Room Number: 
              <input type="text" name="roomnumber" value={this.state.roomnumber} onChange={this.handleChange}/>
            </label>
            <br />
            <input type="submit" value="Submit" className="submit" />
          </form>
        </div>
      );
    }
  }

   
  
  class MainWindow extends React.Component {
    
    //constructor(props) {
      //super(props);
    //}
    
    render() {
      console.log("MainWindow");
  
      return (
        
        <div className="laundry">
          <h1>Duck Republik</h1> 
           
          
          <div className="laundry-calendar">
            <ShowCalendar />
          </div>
          <div className="laundry-time">
            <Table times={TIMES}/>
          </div>
          <div className="laundry-calendar">
            <SignUp />
          </div>

 
        </div>
      );
    }
  }
   
  // ========================================
  
  ReactDOM.render(
    <MainWindow />,
    document.getElementById('root')
  );

