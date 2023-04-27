import './App.scss';
import UserList from "./components/list/UserList";
import Counter from "./components/counter/Counter";
import Lists from "./components/lists/Lists";


function App() {

  return (
    <div className="App">
      <div className="App__task">
        <div className='task-name'>Створіть компонент, який зображатиме список імен. Імена не мають повторюватися.
        </div>
          <UserList/>
      </div>

      <div className="App__task">
        <div className='task-name'>Створіть компонент, який виводитиме 2 кнопки та лічильник. Клацанням на кнопку «+»
          лічильник збільшується, а натисканням на кнопку «-» – зменшується.
        </div>
        <Counter/>

      </div>

      <div className="App__task">
        <div className='task-name'>Створіть сайт, на якому є 2 списки та кнопка. Після натискання на кнопку перший
          елемент зі списку 1 переходить на кінець списку 2.
        </div>
        <Lists/>
      </div>

      <div className="App__task">
        <div className='task-name'>Створіть компонент, що буде рендерити div, всередині якого є кнопка. Клацанням на div
          виведіть у консоль «Div clicked», а натисканням на кнопку – «Button clicked». Коли ви натиснете кнопку, то
          побачите «Button clicked» і «Div clicked», а маєте побачити тільки повідомлення від кнопки. Розв'яжіть цю
          проблему.
        </div>
        <div>

        </div>
      </div>

    </div>
  );
}

export default App;
