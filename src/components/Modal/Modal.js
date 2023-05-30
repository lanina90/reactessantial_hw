import React, {useEffect, useState} from 'react';
import './Modal.scss'
import Portal from "../Portal/Portal";

const Modal = ({ message, onConfirm, onCancel, isModalOpen }) => {
  const [showModal, setShowModal] = useState(isModalOpen);

  useEffect(() => {
    setShowModal(isModalOpen);
  }, [isModalOpen]);

  const closeModal = () => {
    setShowModal(false);
  };

  return showModal ? (
    <div className='modal-w'>
      <Portal>
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-wrapper">
            <div className="modal">
              <div className='modal-window'>
                <h2>{message}</h2>
                <svg
                  onClick={closeModal}
                  height="38"
                  viewBox="0 0 48 48"
                  width="38">
                  <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                  <path d="M0 0h48v48h-48z" fill="none"/>
                </svg>
              </div>
              <div className="modal-btn">
                <button onClick={onConfirm} className="btn">Yes</button>
                <button onClick={onCancel} className="btn">No</button>
              </div>
            </div>
          </div>
        </div>
      </Portal>
    </div>
  ) : null;
};

export default Modal;