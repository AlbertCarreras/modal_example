import React, { Component } from 'react';
import './App.css';
import Modal from './Modal'


class App extends Component {

  state = {
    modal: false,
    modalInfo: null
  }

  selectModal = (info) => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info || null
    })
  }
  
  render() {
    return (
      <div className="App">
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
