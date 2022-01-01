import React from 'react';
import './Modal.styles.css';

export default function ModalComponent({ show, setShow }) {
  if (show) {
    return (
      <div className="modalView">
        <div className="modalVisible">
          <div className="span">
            <button
              type="button"
              className="btn-close"
              onClick={setShow}
              title="Click to close this dialog"
            >
              &times;
            </button>
          </div>
          <div className="warning"> </div>
          <div>
            <h2 className="warningText">Thank you for your message. I will check your message as soon as possible. </h2>
          </div>

          <div>
            <button
              type="button"
              onClick={setShow}
              className="btnCart"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}