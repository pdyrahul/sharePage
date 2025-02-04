import React from "react";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal change-location-modal show" id="buy-ticket" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog" style={{ display: 'block', paddingLeft: '0px' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title  fs-5" id="staticBackdropLabel">{title}</h1>
          </div>
          <div className="modal-body">
            {children}
          <button type="button" style={{ fontSize: '14px', color: '#4D4D4D',width:'100%', background:'transparent', textDecoration: 'underline', float: 'right' }} onClick={onClose}>CANCEL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;