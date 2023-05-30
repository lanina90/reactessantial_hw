import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import  {setAuth} from "../redux/slices/PrivateRouteSlice";
import Modal from "./Modal/Modal";
import {setModalOpen} from "../redux/slices/ModalSlice";


const RequireAuth = ({ children }) => {
  const isOver18 = useSelector((state) => state.privateRoute.isOver18);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isModalOpen = useSelector((state) => state.modal.isOpen);

  const setIsOver18 = (value) => {
    dispatch(setAuth(value));
    localStorage.setItem('isOver18', JSON.stringify(value));
  };

  useEffect(() => {
    const localStorageIsOver18 = JSON.parse(localStorage.getItem('isOver18'));

    if (localStorageIsOver18 === null) {
      dispatch(setModalOpen(true));
    } else if (localStorageIsOver18 === false) {
      navigate('/');
    } else if (localStorageIsOver18 === true && isOver18 !== true) {
      setIsOver18(true);
    }

  },  [dispatch, navigate, isOver18]);


  return (
    <>
      {isOver18 ? children : null}
      {isModalOpen && (
        <Modal/>
      )}
    </>
  );
};

export default RequireAuth;