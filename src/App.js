import './App.scss';
import Block from "./blocks/Block";
import ParentChildren from "./children/ParentChildren";

function App() {
  return (
    <div className="App">
      <div className="App__task">
        <div className='task-name'>Створіть компонент, який прийматиме параметром рядка та зображатиме їх у різних
          блоках div.
        </div>
        <div>
          <Block text={'text 1'}/>
          <Block text={'text 2'}/>
          <Block text={'text 3'}/>
          <Block text={'text 4'}/>
          <Block text={'text 5'}/>
        </div>
      </div>

      <div className="App__task">
        <div className='task-name'>Створіть компонент, який буде рендерити те, що йому передадуть як children.</div>
        <ParentChildren>
            <h1>Header 1</h1>
            <p>Some text</p>
        </ParentChildren>

      </div>

      <div className="App__task">
        <div className='task-name'>Створіть застосунок за допомогою Create React App і виведіть на сторінку текст «Hello
          world».
        </div>
        <div>
          <p>Hello world</p>
        </div>
      </div>

    </div>
  );
}

export default App;
