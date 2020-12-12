import React, { Component } from 'react';

export default class TasksCounters extends Component {
  render() {
    const { allTasks, completedTasks, activeTasks } = this.props;
    return (
      <div className="row">
        <div className="d-flex row justify-content-between py-4 col-md">
          <div className="col-lg-12 col-xl-4 mb-4 mb-xl-2">
            <div className="wrap rounded shadow d-flex flex-column p-4">
              <div className="taskimg" />
              <span className="counter">
                {allTasks}
              </span>
              <p className="pl-1">
                Все задачи
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-xl-4 mb-4 mb-xl-2">
            <div className="wrap rounded shadow d-flex flex-column p-4">
              <div className="taskimg tasktwo" />
              <span className="counter">
                {activeTasks}
              </span>
              <p className="">
                Активных
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-xl-4 mb-4 mb-xl-2">
            <div className="wrap rounded shadow d-flex flex-column p-4">
              <div className="taskimg taskthree" />
              <span className="counter">
                {completedTasks}
              </span>
              <p className="pl-1">
                Выполненных
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
