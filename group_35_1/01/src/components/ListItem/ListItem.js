import { Component } from 'react';

class ListItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li>
        {Object.values(item).map((el) => (
          <p>{el}</p>
        ))}
      </li>
    );
  }
}

export default ListItem;
