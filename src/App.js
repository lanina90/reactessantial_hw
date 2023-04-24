import picture from './picture.jpeg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, world!</h1>
        <img src={picture} className="App-picture" alt="picture" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt elit quis enim finibus, vitae.
        </p>
      </header>
    </div>
  );
}

export default App;
