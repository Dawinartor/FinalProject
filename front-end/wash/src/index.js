import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './calendar.css';



import { useState } from 'react';
import Calendar from 'react-calendar';

var selectedPerson = [];
var selectedDate = [];
var selectedTime = [];
var selectedMachine = [];
var selected = [];

  function ShowCalendar (){
    
    const [date, setDate] = useState(new Date());
    selectedDate = date;

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
        <p>{date4.getDay().toString()}</p>*/
    

    console.log("ShowCalendar");
    console.log(date);
    console.log(selectedDate);
    
    
  
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
        
        
      </div>
    );
    
  }


  
  class TimeRow extends React.Component {
    
    
    handleChange(event) {
      const idName = event.target.id;
      if (idName === "machine1") {
        selectedMachine = 1;
      } else if (idName === "machine2") {
        selectedMachine = 2;
      } else if (idName === "machine3") {
        selectedMachine = 3;
      }

      selectedTime = event.target.value;

      
      console.log(selectedMachine);
      console.log(selectedTime);
      console.log(idName);
      
    }

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
  
  class TimeTable extends React.Component {
    render() {
      const rows = [];

      
      this.props.times.forEach((timeMMM) => {

        rows.push(
          <TimeRow
            timeMMM={timeMMM}
            key={timeMMM.key} />
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
        </div>
      );
    }
  }
  
  
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
      selectedPerson = this.state;
      console.log(selectedPerson);
      this.props.setParentData("Ich habe hunger!");
      event.preventDefault();
    }
    render() {
      return (
        <div className="around">
          <p>Sign up!</p>
          <form onSubmit={this.handleSubmit}>
            <label className="label">
              Firstname: 
              <input className="labelInput" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
            </label>
            <br />
            <label className="label">
              Lastname: 
              <input className="labelInput" type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
            </label>
            <br />
            <label className="label">
              E-Mail:
              <input className="labelInput" type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
            </label>
            <br />
            <label className="label">
              Room Number:
              <input className="labelInput" type="text" name="roomnumber" value={this.state.roomnumber} onChange={this.handleChange}/>
            </label>
            <br />
            <input type="submit" value="Submit" className="submit" />
          </form>
        </div>
      );
    }
  }

   
  
  class MainWindow extends React.Component {
    
    constructor(props) {
      super(props);
      this.submitData = this.submitData.bind(this);
      this.state = {
        step: 0
      }    
      this.dataFromChild = 0;

    }
    submitData() {
      console.log(selectedDate);
      
      var newStep = this.state.step + 1;
      console.log("step: "+newStep);
      this.setState({
        step: newStep
      });
    }

    setData(data) {
      this.dataFromChild = data;
      var d = new Date(2006, 0, 2, 15, 4, 5)
      console.log(d)
      var day = selectedDate.getDate();
      
      var month = selectedDate.getMonth();
      var year = selectedDate.getFullYear();
      var hour = selectedTime;
      console.log(selectedDate);
      selectedDate = new Date(year, month, day, hour, 0);
      console.log(selectedDate);
      console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
      var room = selectedPerson.roomnumber
      selected = JSON.stringify({[room]:{
        roomnumber: room, 
        firstname: selectedPerson.firstname,
        lastname: selectedPerson.lastname,
        email: selectedPerson.email,
        date: selectedDate,
        machine: selectedMachine
      }});
      console.log(selected);


      console.log(this.dataFromChild)
      this.submitData();
    }
    
    
    render() {
      var element;
      console.log("MainWindow");
      if (this.state.step===0) {
        element = (
          <div className="laundry-calendar">
            <ShowCalendar />
            <button className="submit" onClick={this.submitData}>
              Submit
            </button>
          </div>
        );
      } else if (this.state.step===1) {
        element = (
          <div className="laundry-time">
            <Table times={TIMES}/>
            <button className="submit" onClick={this.submitData}>
              Submit
            </button>
          </div>
        );      
        console.log(selectedDate.toString()) 
      } else if (this.state.step===2) {
        element = (
          <div className="laundry-calendar">
            <SignUp setParentData={this.setData.bind(this)}/>
          </div>
        );       
      } else {
        element = (
          <div >
            <p>hallo</p>
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
   
  //JSON.stringify()
  // ========================================
  
  ReactDOM.render(
    <MainWindow />,
    document.getElementById('root')
  );

