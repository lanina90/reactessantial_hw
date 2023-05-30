import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import styles from './Header.module.scss'
import {ThemeContext} from "../../context/ThemeProvider";
import Modal from "../Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../redux/slices/PrivateRouteSlice";
import {setModalOpen} from "../../redux/slices/ModalSlice";

const Header = () => {

  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch()
  const {toggleTheme, theme} = useContext(ThemeContext);


  useEffect(() => {
    const localStorageIsOver18 = JSON.parse(localStorage.getItem('isOver18'));

    if (localStorageIsOver18 !== null) {
      dispatch(setAuth(localStorageIsOver18));
    }

  }, []);

  const iAm18Handler = () => {
    dispatch(setModalOpen(true));
  };


  const headerClassName = theme === 'light' ? styles.lightHeader : styles.darkHeader;
  return (
    <div className={`${styles.header} ${headerClassName}`}>

      <NavLink to='/'>LOGO</NavLink>
      <nav className={styles.menu}>
        <NavLink to='/contacts'>Contact us</NavLink>
        <NavLink to='/auth' onClick={iAm18Handler} >I'm 18 + </NavLink>
      </nav>
      <button onClick={toggleTheme}>Toggle Theme</button>

      {
        isModalOpen && <Modal />
      }
    </div>
  );
};

export default Header;