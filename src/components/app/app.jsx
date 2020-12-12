import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import './app.css';
import '../app-header/app-header.css';
import '../task-add-form/task-add-form.css';
import '../task-list-item/task-list-item.css';
import '../tasks-counters/tasks-counters.css';
import '../events/events.css';

import AppHeader from '../app-header';
import TaskList from '../task-list';
import TaskAddForm from '../task-add-form';
import TasksCounters from '../tasks-counters';
import Events from '../events';
import Popup from '../popup';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: 'Задача номер один',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          id: 1,
          complete: false,
          taskdate: '08 декабря 2020',
          important: false
        },
        {
          label: 'Задача номер два',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          id: 2,
          complete: false,
          taskdate: '08 декабря 2020',
          important: false
        },
        {
          label: 'Задача номер три',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          id: 3,
          complete: false,
          taskdate: '08 декабря 2020',
          important: false
        }
      ],
    };
    /* ЕСЛИ данные есть в ЛС то грузим оттуда и делаем сетстейт JSON.parse */
    const savedData = JSON.parse(localStorage.getItem('savedNewData'));
    /* localStorage.clear(); */
    if (savedData != null) {
      this.state.data = savedData;
    }

    // this.getRandomID = this.getRandomID.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleComplete = this.onToggleComplete.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
  }

  onToggleComplete(id) {
    const {
      data
    } = this.state;
    const newData = data.map((task) => {
      const changedTask = { ...task };
      if (changedTask.id === id) {
        changedTask.complete = !changedTask.complete;
      }
      return changedTask;
    });
    /* console.log(JSON.stringify(newData)); */
    /* кладем в локал сторейдж */
    localStorage.setItem('savedNewData', JSON.stringify(newData));
    this.setState({ data: newData });
    /* console.log(`Выполнено ${id}`); */
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      localStorage.setItem('savedNewData', JSON.stringify(newArr));
      return {
        data: newArr
      };
    });
  }

  static getRandomID() {
    return Math.round(Math.random() * 10000 + 10);
  }

  deleteItem(id) {
    this.setState(({ data }) => { /* state напрямую менять нельзя , заводим новые перменные */
      const index = data.findIndex((item) => item.id === id);
      const before = data.slice(0, index); /* до нужного элемента */
      const after = data.slice(index + 1); /* после нужного элемента */

      const newArr = [...before, ...after];
      localStorage.setItem('savedNewData', JSON.stringify(newArr));
      return {
        data: newArr
      };
    });
  }

  addItem(title, description) {
    const prepareDate = new Date();
    const monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const month = monthes[prepareDate.getMonth()];
    const year = prepareDate.getFullYear();
    const day = prepareDate.getDate();
    const date = `${day} ${month} ${year}`;
    const newItem = {
      label: title,
      description,
      id: App.getRandomID(),
      complete: false,
      taskdate: date
    };
    this.setState(({ data }) => {
      const newDataArr = [...data, newItem];
      localStorage.setItem('savedNewData', JSON.stringify(newDataArr)); // localStorage.setItem('ключ',значение)
      return {
        data: newDataArr
      };
    });
  }

  render() {
    const { data } = this.state;
    const completedTasks = data.filter((item) => item.complete).length;
    const allTasks = data.length;
    const activeTasks = data.filter((item) => !item.complete).length;

    return (
      <div className="container col-md-10">
        <div className="row">
          <AppHeader />
          <div className="contbg col-lg">
            <div className="row">
              <div className="col-lg-12 col-xl-9">
                <div className="row">
                  <div className="col-12">
                    <p className="title mt-4 mb-1">Daily Planner</p>
                    <p className="subtitle">Tasks overview</p>
                  </div>
                </div>
                <TasksCounters
                  allTasks={allTasks}
                  completedTasks={completedTasks}
                  activeTasks={activeTasks}
                />
                <div className="row">
                  <div className="col-12 col-xl-6">
                    <TaskAddForm
                      onAdd={this.addItem}
                    />
                    <div className="p-4 item mb-4 shadow-lg rounded d-flex flex-column">
                      <Popup
                        onAdd={this.addItem}
                      />
                      <div className="addtaskimg mt-4 align-self-end" />
                    </div>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className="rightwrap shadow-lg rounded">
                      <Tabs
                        defaultActiveKey="active"
                        id="uncontrolled-tab-example"
                      >
                        <Tab
                          eventKey="active"
                          title="Активные"
                        >
                          <TaskList
                            tasks={data}
                            onDelete={this.deleteItem}
                            onToggleComplete={this.onToggleComplete}
                            onlyCompleted={false}
                            onToggleImportant={this.onToggleImportant}
                          />
                        </Tab>
                        <Tab
                          eventKey="completed"
                          title="Завершенные"
                        >
                          <TaskList
                            tasks={data}
                            onDelete={this.deleteItem}
                            onToggleComplete={this.onToggleComplete}
                            onlyCompleted
                          />
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 d-none d-xl-block calendar shadow">
                <Events />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
