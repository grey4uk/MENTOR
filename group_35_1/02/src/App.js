import { useState, useEffect, useRef } from 'react';

import { Modal } from './component/Modal';

export const App = () => {
  const [fotos, setFotos] = useState([]);
  const [flag, setFlag] = useState(false);
  const [largePhoto, setLargePhoto] = useState('');
  const ref = useRef(null);

  useEffect(() => {
      getFotos();
  }, []);

  const getFotos=()=>{
    fetch(
      'https://pixabay.com/api/?key=15313425-bc0f61e46a051ea2578b0fd6a&q=yellow+flowers&image_type=photo'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(`fotos`, data.hits);
        setFotos(data.hits);
      });
  }

  const handleFocus = (e) => {
    const target = e.target;
    setLargePhoto(
      target.querySelector('img').getAttribute('largefoto')
    );
  };

  const handleClick = () => {
    setFlag((state) => !state);
  };

  const refAction = () => {
    console.log('CLICK HAPPENED');
  };

  useEffect(() => {
    ref?.current?.addEventListener('click', refAction);
    // return () =>
    //   ref?.current?.removeEventListener('click', refAction);
  }, []);

  return (
    <>
      {flag ? (
        <Modal
          largePhoto={largePhoto}
          onClose={handleClick}
        />
      ) : (
        <ul id='list' ref={(node) => (ref.current = node)}>
          {fotos.length ? (
            fotos.map((el) => (
              <li key={el.id}>
                <a
                  href='#'
                  onFocus={handleFocus}
                  onClick={handleClick}>
                  <img
                    id={el.id}
                    src={el.webformatURL}
                    largefoto={el.largeImageURL}
                    height='150'
                    width='200'
                    alt={el.tags}
                  />
                </a>
                <p>{el.user}</p>
              </li>
            ))
          ) : (
            <h2>We haven't fotos</h2>
          )}
        </ul>
      )}
    </>
  );
};
