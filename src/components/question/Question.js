import React from 'react';
import styles from './question.module.css';
import { nanoid } from 'nanoid';

function Question({title, id, options, handleOptionClick, selected, checked, answer}) {  

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
                    ${(checked && opt === answer) ? styles.correct : ''}
                    ${(checked && selected === opt && opt !== answer) ? styles.wrong : ''}
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