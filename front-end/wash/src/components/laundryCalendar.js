import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';


import './index.css';
import './calendar.css';

  // Calendar for selecting date
  export function ShowCalendar (props){   
    // current selected date
    const [date, setDate] = useState(new Date());
    console.log("ShowCalendar");
    // give selected date to main
    const submitDate = () => {
      console.log("date: ", date);
      props.setParentDateData(date);
    };

    console.log(setDate);
    // show calendar and current selected date
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

        <button className="submit" onClick={submitDate}>
          Submit
        </button>          
      </div>
    );    
  }