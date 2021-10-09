import { Component } from 'react';
import ListItem from '../ListItem/ListItem';

export class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <>
        <h2>Users List</h2>
        <ul>
          {list.map((el) => (
            <ListItem item={el} />
          ))}
        </ul>
      </>
    );
  }
}
