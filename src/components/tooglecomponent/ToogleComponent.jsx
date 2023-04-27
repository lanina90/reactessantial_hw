import React, {Component} from 'react';

class ToggleComponent extends Component {
  componentDidMount() {
    alert('Component Opened');
  }

  componentWillUnmount() {
    alert('Component Closed');
  }

  render() {
    return <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, soluta.</p></div>;
  }
}

export default ToggleComponent