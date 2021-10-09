import React, { Component } from 'react';

const initialState = {
  name: '',
  lastName: '',
  age: '',
  handle: '',
};

class Cat extends Component {
  state = {
    ...initialState,
  };

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => this.setState({ ...initialState });

  onSubmitHandler = () => {
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    const { onChange } = this;
    return (
      <div>
        {Object.entries(this.state).map((el) => (
          <label>
            {el[0]}
            <input
              name={el[0]}
              value={el[1]}
              onChange={onChange}
            />
          </label>
        ))}
        <button onClick={this.onSubmitHandler}>
          submit
        </button>
      </div>
    );
  }
}

export default Cat;
