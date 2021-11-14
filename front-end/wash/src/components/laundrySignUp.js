import React from 'react';

import './index.css';
import './calendar.css';

  // Sign up: ask for name, email and room number
  export class SignUp extends React.Component {
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

    // save input when data in label has changed
    handleChange(event) {
      this.setState({value: event.target.value});
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }
    // submit data
    handleSubmit(event) {
      this.props.setParentPersonData(this.state);
      event.preventDefault();
    }
    // ask for firstname, lastname, e-mail and room number
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