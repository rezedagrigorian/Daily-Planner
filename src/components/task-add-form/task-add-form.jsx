import React, { Component } from 'react';

export default class TaskAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: false
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
      text: e.target.value,
      error: false
    });
  }

  onSubmit(e) {
    const {
      onAdd
    } = this.props;
    const {
      text
    } = this.state;
    e.preventDefault();
    if (text.length > 0) {
      onAdd(text); /* очищаем инпут */
      this.setState({ text: '' });
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const {
      text, error
    } = this.state;
    return (
      <div className="p-4 item mb-4 shadow-lg rounded">
        <form
          className=""
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            placeholder="Краткое описание... "
            className={`form-control ${error ? 'form-control-error' : ''}`}
            onChange={this.onValueChange}
            value={text}
          />
          <button
            type="submit"
            className="btn mt-4 shadow rounded addtaskbtn"
          >
            Быстрая задача
          </button>
        </form>
        {/* onAdd = {this.props.onAdd} было бы, если бы popup был тут */}
      </div>
    );
  }
}
