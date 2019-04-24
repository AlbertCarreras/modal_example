import React, { Component } from 'react';
import './App.css';
import Modal from './Modal2'


class App extends Component {

  state = {
    modal: false,
    modalInfo: "",
    input: ""
  }

  selectModal = (info = "") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info
    })
  }

  handleChange = (a) => {
    this.setState({
      input: a.target.value
    })
  } 

  render() {
    return (
      <div className="App">
          <input 
            onChange={this.handleChange}
            value={this.state.input}
            placeholder="Enter values to check re-rendering of Modal Component"
            ></input>
          <p onClick={ () => this.selectModal('Modal A') }>
            Open Modal A
          </p>
          <p onClick={ () => this.selectModal('Modal B') }>
            Open Modal B
          </p>
          <Modal 
            modalDisplay={this.state.modal}
            modalInfo={this.state.modalInfo}
            selectModal={this.selectModal}
          />
      </div>
    );
  }
}

export default App;
