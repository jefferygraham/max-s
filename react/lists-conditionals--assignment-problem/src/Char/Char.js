import React from 'react';
import './Char.css';

const char = (props) => {
  return (
    <div className='box' onClick={props.clicked}>
      {props.letter}
    </div>
  );
};

export default char;
