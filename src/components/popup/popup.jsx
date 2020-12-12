import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './popup.css';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      isOpen: false,
      error: false
    };
  }

  showModal() {
    this.setState({ isOpen: true, error: false });
  }

  hideModal() {
    this.setState({ isOpen: false });
  }

  submitValue(e) {
    const {
      title, description
    } = this.state;
    const {
      onAdd
    } = this.props;
    e.preventDefault();
    if (title.length > 0) {
      this.hideModal();
      onAdd(title, description);
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const {
      isOpen, error
    } = this.state;
    return (
      <div>
        <Button
          variant="outline-*"
          onClick={() => this.showModal()}
          className="btn mt-2 shadow rounded addtaskbtn"
        >
          Cоздать новую задачу
        </Button>
        <Modal
          show={isOpen}
          onHide={() => this.hideModal()}
          centered
        >
          <Modal.Header
            closeButton
            className="p-4"
          >
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="titlecol"
            >
              Новая задача
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="p-4"
          >
            <Form
              className="d-flex flex-column"
            >
              <Form.Group
                controlId="formBasicEmail"
              >
                <Form.Label
                  className="txtcol"
                >
                  Заголовок
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Украсить елку"
                  onChange={(e) => this.setState({ title: e.target.value, error: false })}
                  className={error ? 'form-control-error' : ''}
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicPassword"
              >
                <Form.Label
                  className="txtcol"
                >
                  Описание
                </Form.Label>
                <Form.Group
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Купить новогодних украшений"
                    onChange={(e) => this.setState({ description: e.target.value })}
                  />
                </Form.Group>
              </Form.Group>
              <Button
                variant="outline-*"
                type="submit"
                className="btn col-md-4 m-3 shadow rounded addtaskbtn  align-self-center"
                onClick={(e) => this.submitValue(e)}
              >
                Добавить
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
