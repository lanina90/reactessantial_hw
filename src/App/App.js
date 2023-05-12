import './App.scss';
import Clock from "../components/Clock";
import {useState} from "react";
import Memo from "../components/Memo";


function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
    { id: 3, name: 'Bob', email: 'bob@example.com' }
  ];
  const handleCardClick = (userId) => {
    setSelectedUserId(userId);
  };
  return (
    <div className="App">
      <div className="App__task">
        <div className='task-name'>
          <h2>Task 2, 3, 4</h2>Перепишіть компонент Clock із класового компонента на функціональний із використанням
          хуків.
          Компонент Clock доступний на сайті офіційної документації React за цим посиланням. За допомогою useEffect
          повторіть логіку componentDidMount().За допомогою useEffect повторіть логіку роботи, яка
          shouldComponentUpdate().
        </div>
        <Clock/>
      </div>

      <div className="App__task">
        <div className='task-name'>
          <h2>Task5</h2>
          <p>За допомогою React.memo створіть компонент, який буде рендитися лише за зміни 1 з кількох пропсів.</p>
        </div>
        <div>
          <h1>User Cards</h1>
          {users.map(user => (
            <Memo
              key={user.id}
              user={user}
              isSelected={user.id === selectedUserId}
              onClick={() => handleCardClick(user.id)}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;
