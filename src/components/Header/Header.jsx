import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.scss'
import {ThemeContext} from "../../context/ThemeProvider";
import Modal from "../Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../redux/PrivateRouteSlice";

const Header = () => {
  const isOver18 = useSelector(state => state.privateRoute.isOver18)
  const dispatch = useDispatch()
  const {toggleTheme, theme} = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const iAm18Handler = () => {
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    const isOver18 = true;
    localStorage.setItem('isOver18', JSON.stringify(isOver18));
    dispatch(setAuth(isOver18))
    setIsModalOpen(false);

  };
  const handleModalCancel = () => {
    dispatch(setAuth(false))
    localStorage.setItem('isOver18', JSON.stringify(isOver18));
    setIsModalOpen(false);

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
        isModalOpen && <Modal
          isModalOpen={isModalOpen}
          message="Are you 18 years old?"
          onConfirm={handleModalConfirm}
          onCancel={handleModalCancel}
        />
      }
    </div>
  );
};

export default Header;