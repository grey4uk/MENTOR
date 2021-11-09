import React from 'react';

export const List = ({ list, onDelete }) => {
  return (
    <ul>
      {list.map((el) => (
        <li key={el.id} style={{ paddingBottom: '20px' }}>
          <img
            src={el.image}
            style={{ width: '180px', height: '120px' }}
          />
          {/* <p>{el.name}</p>
            <p>{el.lastName}</p> */}
          <button onClick={() => onDelete(el.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
