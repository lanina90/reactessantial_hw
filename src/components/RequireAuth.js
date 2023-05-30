import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import  {setAuth} from "../redux/PrivateRouteSlice";
import Modal from "./Modal/Modal";


const RequireAuth = ({ children }) => {
  const isOver18 = useSelector((state) => state.privateRoute.isOver18);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const setIsOver18 = (value) => {
    dispatch(setAuth(value));
    localStorage.setItem('isOver18', JSON.stringify(value));
  };

  useEffect(() => {
    const localStorageIsOver18 = JSON.parse(localStorage.getItem('isOver18'));

    if (localStorageIsOver18 === null) {
      setShowModal(true);
    } else if (localStorageIsOver18 === false) {
      navigate('/');
    } else {
      setIsOver18(localStorageIsOver18);
    }
  }, [navigate, dispatch]);

  const handleConfirm = () => {
    setIsOver18(true);
    setShowModal(false);
  };

  const handleCancel = () => {
    navigate('/');
    setShowModal(false);
  };

  return (
    <>
      {isOver18 ? children : null}
      {showModal && (
        <Modal
          isModalOpen={showModal}
          message="Are you 18 years old?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default RequireAuth;