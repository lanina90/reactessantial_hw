import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import  {setAuth} from "../redux/PrivateRouteSlice";


const RequireAuth = ({children}) => {
  const isOver18 = useSelector(state => state.privateRoute.isOver18);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setIsOver18 = (value) => {
    dispatch(setAuth(value));
    localStorage.setItem('isOver18', JSON.stringify(value));
  };

  useEffect(() => {
    const localStorageIsOver18 = JSON.parse(localStorage.getItem('isOver18'));

    if (localStorageIsOver18 === null) {
      const confirmed = window.confirm('Are you 18 years old?');
      setIsOver18(confirmed);
    } else if (localStorageIsOver18 === false) {
      navigate('/');
    } else {
      setIsOver18(localStorageIsOver18);
    }
  }, [navigate, dispatch]);

  return isOver18 ? children : null;

};

export default RequireAuth;