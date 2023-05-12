import React from 'react';

const Memo = React.memo(({ user, isSelected, onClick }) => {
  console.log('Компонент UserCard рендерится');

  return (
    <div className={isSelected ? 'selected' : ''} onClick={onClick}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.user === nextProps.user &&
    prevProps.isSelected === nextProps.isSelected
  );
});

export default Memo;