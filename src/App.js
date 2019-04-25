import React, { Component } from 'react';
import './App.css';
// import Modal from './ModalDivStyle'
import Modal from './ModalNoDivStyle'


class App extends Component {

  state = {
    modal: false,
    modalInfo: "",
  }

  selectModal = (info = "") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info
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
            displayModal={this.state.modal}
            modalInfo={this.state.modalInfo}
            closeModal={this.selectModal}/>
      </div>
    );
  }
}

export default App;
