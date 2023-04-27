import React, {useEffect, useState} from 'react';
import UserData from "./UserData";

const UserList = () => {

  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);


  function handleUserClick(userId) {
    setSelectedUserId(userId);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      setUsers(json);
    }

    fetchData()
  }, []);

  return (
    <div>
      <div className='user-list'>
        <ul className='user-name'>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleUserClick(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>
        {selectedUserId && (
          <UserData user={users.find((user) => user.id === selectedUserId)}/>
        )}

      </div>
      <button onClick={() => setSelectedUserId(null)}>Hide User Data</button>
    </div>

  )
    ;
};

export default UserList;