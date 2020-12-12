import React, { Component } from 'react';

export default class DateComponent extends Component {
  constructor(props) {
    super(props);
    const dateData = this.parseDateData(new Date());
    this.state = {
      year: dateData.year,
      month: dateData.month,
      day: dateData.day
    };
  }

  parseDateData = (date) => {
    const year = date.getFullYear();
    const monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const month = date.getMonth();
    const day = date.getDate();
    return {
      day: day,
      month: monthes[month],
      year: year
    };
  }

  render() {
    const newdate = this.state.day + ' ' + this.state.month + ' ' + this.state.year
    return (
      <div className=''>
        {newdate}
      </div>
    );
  }
}
