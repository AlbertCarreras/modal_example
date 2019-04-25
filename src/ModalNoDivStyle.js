import React from 'react';

const Modal = props => {
  
  function displayInfo () {
    switch(props.modalInfo) {
      case 'Modal A':
        return <div className="modal-info">This is Modal A</div>
      case 'Modal B':
        return <div className="modal-info">This is Modal B</div>
      default:
        return null
    }
  }

  function closeModal (e) {
    e.stopPropagation()
    props.closeModal()
  }

  let modal = (
      <div 
      className="modal"
      onClick={ closeModal }>

        <div className="modal-content"
          onClick={ e => e.stopPropagation() }>
          
          <span 
            className="close"
            onClick={ closeModal }>&times;
          </span>

          <div className="modal-flex">
            {displayInfo()}
          </div>

        </div>

      </div>
    )

    return ( props.displayModal ? modal : null);
}

export default Modal;
