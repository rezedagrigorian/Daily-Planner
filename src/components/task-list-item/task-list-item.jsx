import React, { Component } from 'react';
import { CircleIcon, CheckCircleIcon, TrashcanIcon } from '@primer/octicons-react';

export default class TaskListItem extends Component {
  constructor(props) {
    super(props);
    this.taskDone = this.taskDone.bind(this);
  }

  taskDone() {
    const {
      onToggleComplete, id
    } = this.props;
    onToggleComplete(id);
    /* идет наверх и вызывает мтеод родителя */
  }

  deleteHandler(e) {
    const {
      onDelete, id
    } = this.props;
    e.stopPropagation();
    onDelete(id);
  }

  render() {
    const {
      id, label, description, complete, taskdate, onToggleImportant, important
    } = this.props;
    /* свойства которые приходят из пропс */
    return (
      <div className="container" onClick={() => onToggleImportant(id)}>
        <div className="tl-item p-2 row align-items-start d-flex taskbg shadow rounded">
          <div className="px-4 pstyle ">
            <div onClick={this.taskDone}>
              {complete ? <CheckCircleIcon className="checkcolor" /> : <CircleIcon size={18} className="checkcolor" />}
            </div>
          </div>
          <div className="pl-0 pt-3 col-md p-0">
            <div className={`h6 d-flex ${important ? 'titlecolor' : ''}`}>
              {label}
              <div className={`starbox ml-2 starstyle ${important ? 'fillstar' : ''}`} />
            </div>
            <p className="txtstyle">{description}</p>
            <span className="badge badge-pill badge-secondary mb-3">{taskdate}</span>
          </div>
          <div className="p-3">
            <div onClick={(e) => this.deleteHandler(e)}>
              <TrashcanIcon
                className="trashstyle"
                size={18}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
