import React, { Component } from 'react';


class Modal extends Component {
  
  displayInfo = () => {
    switch(this.props.modalInfo) {
      case 'Modal A':
        return <div className="modal-info">This is Modal A</div>
      case 'Modal B':
        return <div className="modal-info">This is Modal B</div>
      default:
        return null
    }
  }

  closeModal = (e) => {
    e.stopPropagation()
    this.props.closeModal()
  }
  

  render () {
    const divStyle = {
      display: this.props.displayModal ? 'block' : 'none',
    };

    return (
      <div 
        className="modal"
        onClick={ this.closeModal }
        style={divStyle}>

        <div className="modal-content"
          onClick={ e => e.stopPropagation() }>
          
          <span 
            className="close"
            onClick={ this.closeModal }>&times;
          </span>

          <div className="modal-flex">
            {this.displayInfo()}
          </div>

        </div>

      </div>
    );
  }
}

export default Modal;
