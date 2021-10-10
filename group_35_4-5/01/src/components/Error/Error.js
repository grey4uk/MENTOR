import { Component } from 'react';

class Error extends Component {
  render() {
    const { message, onClick } = this.props;
    return (
      <>
        <h3>{message}</h3>
        <button onClick={onClick}>CLEAR ERROR</button>
      </>
    );
  }
}

export default Error;
