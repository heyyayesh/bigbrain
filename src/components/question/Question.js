import React from 'react';
import styles from './question.module.css';
import { nanoid } from 'nanoid';

function Question({title, id, options, handleOptionClick, selected}) {  

  const optionsElems = options.map(opt => {
    const keyId = nanoid();
    return (
      <button
        key={keyId}
        id={keyId}
        value={opt}
        onClick={(e) => handleOptionClick(e.target.value, id)}
        className={`${styles.option}
                    ${selected === opt ? styles.selected : ''}
                  `}
      >
        {opt}
      </button>
    )
  })

  return (
    <div className={styles.question}>
      <h1 className={styles.questionTitle}>{title}</h1>
      <div className={styles.answers}>
        {optionsElems}
      </div>
    </div>
  )
}

export default Question;