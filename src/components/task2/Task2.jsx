import React, {Component} from 'react';

class Task2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      alert(`Counter value changed: ${this.state.count}`);
    }
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment by 1</button>
      </div>
    );
  }
}

export default Task2;