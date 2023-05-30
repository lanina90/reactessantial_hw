import React from 'react';

const ChildComponent = React.memo(({ user }) => {
  console.log("UserInfoComponent rendered!");
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
});

export default ChildComponent;