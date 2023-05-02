import picture from './picture.jpeg';
import './App.scss';
import {useState} from "react";

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [result, setResult] = useState('')
  const [numberOne, setNumberOne]= useState(0)
  const [numberTwo, setNumberTwo]= useState(0)
  const [numberOneResult, setNumberOneResult]= useState('')
  const [numberTwoResult, setNumberTwoResult]= useState('')

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email
    };
    const jsonString = JSON.stringify(formData);
    setResult(jsonString);
  };

  const handleChangeNumberOne = event => {
    const value = event.target.value;
    setNumberOne(value);
    setNumberOneResult(value * 0.5);
  }

  const handleChangeNumberTwo = event => {
    const value = event.target.value;
    setNumberTwo(value);
    setNumberTwoResult(value * 0.05);
  }


  return (
    <div className="App">
      <div className="App__task">
        <div className='task-name'>Створити компонент форми з трьома контрольованими вводами. Після відправки форми –
          сторінка не перезавантажується, а вміст полів виводиться у вигляді json під формою (json-об'єкт потрібно
          перевести в рядок).
        </div>
        <form className={'form'} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='First Name'
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
          <input
            type="text"
            placeholder='Last Name'
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <div>{result}</div>
      </div>

      <div className="App__task">
        <div className='task-name'>Створіть компонент із двома контрольованими компонентами, які рендерять. Вони повинні
          приймати тільки числа. Після того, як користувач вводить число до input, його вміст виводиться в блоці під ним
          з конвертацією - number * 0,5 та number * 0,05 відповідно.
        </div>
        <form className={'form'}>
          <input
            type="number"
            value={numberOne}
            onChange={handleChangeNumberOne}
          />
          <div>{numberOneResult}</div>
          <input
            type="number"
            value={numberTwo}
            onChange={handleChangeNumberTwo}
          />
          <div>{numberTwoResult}</div>
        </form>


      </div>

    </div>
  );
}

export default App;
