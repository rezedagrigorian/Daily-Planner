import React, { Component } from 'react';
import TaskListItem from '../task-list-item';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      tasks, onDelete, onToggleComplete, onlyCompleted, onToggleImportant
    } = this.props;
    const filteredTasks = tasks.filter((task) => task.complete === onlyCompleted);
    /*
      const filteredTasks = tasks.filter((task) => task.complete == onlyCompleted ? true : false);
    */
    const elements = filteredTasks.map((item) => (
      <li key={item.id} className="mb-4 tl-item d-flex">
        <TaskListItem
          id={item.id}
          label={item.label}
          description={item.description}
          taskdate={item.taskdate}
          complete={item.complete}
          important={item.important}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onToggleImportant={() => onToggleImportant(item.id)}
        />
      </li>
    ));
    return (
      <ul className="p-4">
        {elements}
      </ul>
    );
  }
}
