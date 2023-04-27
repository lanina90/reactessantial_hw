import React, {useEffect, useState} from 'react';
import UserData from "../list/UserData";


const Lists = () => {

  const [list1, setList1] = useState(['List 1.1', 'List 1.2', 'List 1.3', 'List 1.4', 'List 1.5', 'List 1.6'])
  const [list2, setList2] = useState(['List 2.1', 'List 2.2', 'List 2.3', 'List 2.4', 'List 2.5', 'List 2.6'])


  function onClickHandler() {
    if(list1.length === 0) {
      alert('List is empty!')
      return;
    }
    const newList1 = list1.slice(1);
    const newList2 = [...list2, list1[0]];

    setList1(newList1);
    setList2(newList2);
  }

  function resetListHandler() {
    setList1(['List 1.1', 'List 1.2', 'List 1.3', 'List 1.4', 'List 1.5', 'List 1.6']);
    setList2(['List 2.1', 'List 2.2', 'List 2.3', 'List 2.4', 'List 2.5', 'List 2.6']);
  }

  return (
    <div>
      <div className='user-list'>
        <div><h2>List 1</h2>
          <ul className='user-name'>
            {list1.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>List 2</h2>
          <ul className='user-name'>
            {list2.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

        </div>

      </div>
      <button onClick={onClickHandler}>Move Item</button>
      <button onClick={resetListHandler}>Default List</button>
    </div>
  );

}

export default Lists