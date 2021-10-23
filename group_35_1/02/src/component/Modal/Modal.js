import React from 'react';

export const Modal = ({ largePhoto, onClose }) => {
  return (
    <>
      <h1>MODAL</h1>
      <img
        src={largePhoto}
        height='300'
        width='400'
        alt="It's image"
      />
      <button onClick={onClose}>LOSE</button>
    </>
  );
};
