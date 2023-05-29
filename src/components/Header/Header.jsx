import React from 'react';
import { NavLink} from "react-router-dom";
import styles from './Header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../redux/PrivateRouteSlice";

const Header = () => {

  const dispatch = useDispatch()
  const iAm18Handler = () => {
    const isOver18 = window.confirm('Are you 18 years old?');
    dispatch(setAuth(isOver18));
  }

  return (
    <div className={styles.header}>
      <NavLink to='/'>LOGO</NavLink>
      <nav className={styles.menu}>
        <NavLink to='/contacts'>Contact us</NavLink>
        <button onClick={iAm18Handler}>
          <NavLink to='/auth'>I'm 18 + </NavLink>
        </button>
      </nav>
    </div>
  );
};

export default Header;