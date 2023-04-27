import React, {useState} from 'react';

const UserData = ({user}) => {
  const [showEmails, setShowEmails] = useState(false);
  return (
    <div className='user-data'>
          <p key={user.username}>username: {user.username}</p>
          <p key={user.email}>email: {user.email}</p>
          <p key={user.address}>city: {user.address.city}</p>
          <p key={user.website}>website:{user.website}</p>
          <p key={user.company.name}>company: {user.company.name}</p>
    </div>
  );
};

export default UserData;