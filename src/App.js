import picture from './picture.jpeg';
import './App.scss';
import {useState} from "react";
import Task1 from "./components/first/Task1";
import Task2 from "./components/second/Task2";

function App() {

  return (
    <div className="App">
      <div className="App__task">
        <div className='task-name'>Створити компонент форми з трьома контрольованими вводами. Після відправки форми –
          сторінка не перезавантажується, а вміст полів виводиться у вигляді json під формою (json-об'єкт потрібно
          перевести в рядок).
        </div>
        <Task1/>
      </div>

      <div className="App__task">
        <div className='task-name'>Створіть компонент із двома контрольованими компонентами, які рендерять. Вони повинні
          приймати тільки числа. Після того, як користувач вводить число до input, його вміст виводиться в блоці під ним
          з конвертацією - number * 0,5 та number * 0,05 відповідно.
        </div>
        <Task2/>
      </div>
    </div>
  );
}

export default App;
