import React, {useEffect} from 'react';
import './Modal.scss'
import Portal from "../Portal/Portal";
import {useDispatch, useSelector} from "react-redux";
import {cancelAgeConfirmation, confirmAge, setModalOpen} from "../../redux/slices/ModalSlice";
import {useNavigate} from "react-router-dom";




const Modal = () => {
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = () => {
    dispatch(setModalOpen(false));
    dispatch(cancelAgeConfirmation());
  };
  const handleCancel = () => {
    dispatch(cancelAgeConfirmation());
    navigate('/')
  };

  const handleConfirm = () => {
    dispatch(confirmAge());

  };

  return isModalOpen ? (
    <div className='modal-w'>
      <Portal>
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-wrapper">
            <div className="modal">
              <div className='modal-window'>
                <h2>Are you 18 years old?</h2>
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
                <button onClick={handleConfirm} className="btn">Yes</button>
                <button onClick={handleCancel} className="btn">No</button>
              </div>
            </div>
          </div>
        </div>
      </Portal>
    </div>
  ) : null;
};

export default Modal;