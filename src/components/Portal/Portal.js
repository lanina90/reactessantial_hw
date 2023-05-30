import React, {useEffect} from 'react';
import {createPortal} from "react-dom";

const Portal = ({children}) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = ''
  }, [])

  return createPortal(children, document.getElementById('modal'))
};

export default Portal;