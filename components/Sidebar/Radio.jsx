import React from 'react';
import styles from "../../styles/radioColor.module.css";

export default function Radio({ name, id, value, text , onClick }) {
  // console.log(name)
  // console.log(id)
  // console.log(value)
  // console.log(text)

  return (
    <li>
    <label htmlFor={id} className={styles['radio-label']}>
      <input
        className={styles['radio-input']}
        type="radio"
        name={name}
        id={id}
        value={value}
        onClick={onClick} 
        />
      <span className={styles['custom-radio']} />
      {text}
    </label>
    </li>
  );
}
