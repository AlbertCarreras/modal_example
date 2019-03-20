import React, { Component } from 'react';

class Modal extends Component {

  displayInfo = (info) => {
    switch(info) {
      case 'Modal A':
        return <div className="modal-info">This is Modal A</div>
      case 'Modal B':
        return <div className="modal-info">This is Modal B</div>
      default:
        return null
    }
  }

  render() {

    const divStyle = {
      display: this.props.modalDisplay ? 'block' : 'none',
    };

    return (
      <div 
        className="modal"
        onClick={ () => this.props.selectModal() } 
        style={divStyle}
      >
        <div className="modal-content"
          onClick={ (e) => e.stopPropagation() }
        >
          <span 
            className="close"
            onClick={ () => this.props.selectModal() }
            >&times;
          </span>
          <div className="modal-flex">
            {this.displayInfo(this.props.modalInfo)}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
