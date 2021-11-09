import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { List } from './components';
import Form from './components/Form';
import Error from './components/Error';
import { API_KEY } from './env';

const initialList = [
  { id: 1, name: 'Den', lastName: 'Born' },
  { id: 2, name: 'Ben', lastName: 'Born' },
  { id: 3, name: 'Bred', lastName: 'Born' },
  { id: 4, name: 'Holly', lastName: 'Born' },
];

class App extends Component {
  state = { list: [], error: '' };

  loadPictures = () => {
    fetch(
      `https://pixabay.com/api/?q=car&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((data) => data.json())
      .then((res) =>
        this.setState({
          list: res.hits.map((el) => ({
            image: el.webformatURL,
            id: el.id,
          })),
        })
      );
  };

  onClick = (state) =>
    this.setState((prevState) => {
      const normalizedName = state.name.toLowerCase();
      if (
        prevState.list.find(
          (el) => el.name.toLowerCase() === normalizedName
        )
      ) {
        // alert(`User ${state.name} already exist`);
        this.setState({
          ...prevState,
          error: `User ${state.name} already exist`,
        });
        return;
      }
      return {
        list: [
          ...prevState.list,
          { ...state, id: uuidv4() },
        ],
      };
    });

  clearError = () =>
    this.setState((prevState) => ({
      ...prevState,
      error: '',
    }));

  onDelete = (id) =>
    this.setState((prevState) => {
      return {
        list: prevState.list.filter((el) => el.id !== id),
      };
    });

  render() {
    const {
      state,
      onClick,
      onDelete,
      clearError,
      loadPictures,
    } = this;
    const { list, error } = state;

    console.log(`state`, state);
    return (
      <>
        <h1>HELLO</h1>
        <button onClick={loadPictures}>LOAD</button>
        <List list={list} onDelete={onDelete} />
        <Form onClick={onClick} />
        {error && (
          <Error message={error} onClick={clearError} />
        )}
      </>
    );
  }
}

export default App;
