import React from 'react';
import s from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={s.boxButton}>
      <button type="button" className={s.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
