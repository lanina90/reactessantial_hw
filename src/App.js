import './App.scss';
import Task1 from "./components/first/Task1";


function App() {

  return (
    <div className="App">
      <div className="App__task">
        <div className='task-name'>
          <h2>Task1</h2>Створіть компонент форми, додайте підтримку sass у проєкт і стилізуйте форму за
          допомогою sass.
          <h2>Task2</h2>
          Додайте підтримку CSS-модулів у проєкт, використайте їх під час написання стилів.
          Додайте валідацію на полі форми. Якщо під час відправлення поле є не валідним, має додатися стиль, за якого
          border цього поля має стати червоного кольору, а також форма не має відправитися. Надсиланням можна вважати
          виведення рядка «submit success» в консолі.
        </div>

        <Task1/>
      </div>

    </div>
  );
}

export default App;
