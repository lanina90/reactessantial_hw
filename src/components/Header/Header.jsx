import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.scss'
import {useDispatch} from "react-redux";
import {setAuth} from "../../redux/PrivateRouteSlice";
import {ThemeContext} from "../../context/ThemeProvider";

const Header = () => {

  const {toggleTheme, theme} = useContext(ThemeContext);


  const dispatch = useDispatch()
  const iAm18Handler = () => {
    const isOver18 = window.confirm('Are you 18 years old?');
    localStorage.setItem('isOver18', JSON.stringify(isOver18));
    dispatch(setAuth(isOver18));
  }
  const headerClassName = theme === 'light' ? styles.lightHeader : styles.darkHeader;
  return (
    <div className={`${styles.header} ${headerClassName}`}>

      <NavLink to='/'>LOGO</NavLink>
      <nav className={styles.menu}>
        <NavLink to='/contacts'>Contact us</NavLink>
        <NavLink onClick={iAm18Handler} to='/auth'>I'm 18 + </NavLink>
      </nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Header;