import React from 'react';


const Modal = props => {

  function displayInfo (info) {
    switch(info) {
      case 'Modal A':
        return <div className="modal-info">This is Modal A</div>
      case 'Modal B':
        return <div className="modal-info">This is Modal B</div>
      default:
        return null
    }
  }
  
  const divStyle = {
    display: props.modalDisplay ? 'block' : 'none',
  };

    return (
      <div 
        className="modal"
        onClick={ props.selectModal } 
        style={divStyle}
      >
        <div className="modal-content"
          onClick={ e => e.stopPropagation() }
        >
          <span 
            className="close"
            onClick={ props.selectModal }
            >&times;
          </span>
          <div className="modal-flex">
            {displayInfo( props.modalInfo )}
          </div>
        </div>
      </div>
    );
}

export default Modal;
