import React, { Component } from 'react';
import Form from './components/Form';
import {List} from './components/List';

class App extends Component {
  state = {
    list: [],
  };

  handleSubmit = (item) => {
    this.setState((prevState) => ({
      list: [...prevState.list, item],
    }));
  };

  render() {
    const {
      state: { list },
      handleSubmit,
    } = this;
    return (
      <>
        <Form onSubmit={handleSubmit} />
        <List list={list} />
      </>
    );
  }
}

export default App;
