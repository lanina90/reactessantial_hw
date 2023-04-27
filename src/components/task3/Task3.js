import React, {Component} from 'react';

class Task3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count > 3) {
      return false;
    }
    return true;
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment by 1</button>
      </div>
    );
  }
}

export default Task3;