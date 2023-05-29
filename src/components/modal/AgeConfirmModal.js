import React from 'react';

const AgeConfirmModal = ({onConfirm}) => {
  return (
    <div>
      <h2>Are you 18 years old?</h2>
      <button onClick={() => onConfirm(true)}>Yes</button>
      <button onClick={() => onConfirm(false)}>No</button>
    </div>
  );
};

export default AgeConfirmModal;