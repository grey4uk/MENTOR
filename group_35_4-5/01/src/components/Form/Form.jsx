import { Component } from 'react';

const initialState = {
  name: '',
  lastName: '',
};

class Form extends Component {
  state = { ...initialState };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onClickSubmit = (item) => {
    this.props.onClick(item);
    this.setState(initialState);
  };

  render() {
    const { onChange, state, onClickSubmit } = this;
    const { name, lastName } = state;
    return (
      <>
        <h2>ENTER USER</h2>
        <label>
          NAME
          <input
            name='name'
            value={name}
            onChange={onChange}
          />
        </label>
        <label>
          LAST NAME
          <input
            name='lastName'
            value={lastName}
            onChange={onChange}
          />
        </label>
        <button onClick={() => onClickSubmit(state)}>
          submit
        </button>
      </>
    );
  }
}

export default Form;
