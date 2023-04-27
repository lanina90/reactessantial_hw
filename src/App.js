import './App.scss';
import ToggleComponent from "./components/tooglecomponent/ToogleComponent";
import {Component} from "react";
import Task2 from "./components/task2/Task2";
import Task3 from "./components/task3/Task3";


class App extends Component {
  state = {
    showComponent: false,
  };

  toggleComponent = () => {
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent,
    }));
  };
  render() {
    const { showComponent } = this.state;

  return (
    <div className="App">
      <div className="App__task">
        <div className='task-name'>Створіть компонент, який з'являтиметься натисканням на кнопку та ховатиметься під час
          ще одного натискання. Після додайте методи життєвого циклу, у яких запускатиметься код, що показує «alert()» з
          інформацією про те, що компонент закрився або відкрився.
        </div>
        <div>
          {showComponent && <ToggleComponent/>}
          <button onClick={this.toggleComponent}>
            {showComponent ? 'Hide Component' : 'Show Component'}
          </button>

        </div>

      </div>

      <div className="App__task">
        <div className='task-name'>Створіть компонент, який виводитиме на екран збільшене число щоразу, коли спрацьовує
          подія componentDidUpdate.
        </div>
        <Task2/>

      </div>

      <div className="App__task">
        <div className='task-name'>Модифікуйте компонент із завдання 3 так, щоби він не збільшував число, якщо воно
          більше 3. Використовуйте для цього shouldComponentUpdate.
        </div>
        <Task3/>
      </div>

    </div>
  );
} }

export default App;

