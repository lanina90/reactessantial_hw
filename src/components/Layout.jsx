import React, {useContext} from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";


const Layout = () => {


  return (
    <>
      <ErrorBoundary>
        <Header/>
      </ErrorBoundary>

      <Outlet/>
    </>
  );
};

export default Layout;