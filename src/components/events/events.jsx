import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date()
    };
  }

  myChange(param) {
    this.setState({
      value: param
    });
  }

  render() {
    const {
      value
    } = this.state;
    return (
      <div className="container ">
        <p className="title my-4">Calendar</p>
        <div className="row justify-content-center">
          <Calendar
            onChange={() => this.myChange()}
            value={value}
            className="calstyle"
          />
        </div>
      </div>
    );
  }
}
