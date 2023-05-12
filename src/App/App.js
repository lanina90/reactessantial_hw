import './App.scss';
import Clock from "../components/clock/Clock";


function App() {

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


      </div>

    </div>
  );
}

export default App;
