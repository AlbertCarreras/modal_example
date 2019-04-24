import React, { Component } from 'react';


class Modal extends Component {

  constructor (props) {
    super(props)
    this.state = {
      displayInfo: this.displayInfo(this.props.modalInfo)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.modalInfo !== this.props.modalInfo) {
      this.setState({
        displayInfo: this.displayInfo(this.props.modalInfo)
      })
    }
  }

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

  closeModal = (e) => {
    e.stopPropagation()
    this.props.selectModal()
  }
  

  render () {
    const divStyle = {
      display: this.props.modalDisplay ? 'block' : 'none',
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
            {this.state.displayInfo}
          </div>

        </div>

      </div>
    );
  }
}

export default Modal;
