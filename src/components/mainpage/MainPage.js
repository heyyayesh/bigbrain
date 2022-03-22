import React from 'react';
import Question from '../question/Question';
import styles from './mainpage.module.css';
import topBlob from '../../imgs/topBlob.png';
import bottomBlob from '../../imgs/bottomBlob.png';

function MainPage({questions, handleOptionClick, handleCheckClick, handleRestartClick, checked, score}) {
  const quesElem = questions.map(ques => {
    return (
      <Question 
        key={ques.id} 
        title={ques.title} 
        id={ques.id} 
        options={ques.options}
        answer={ques.answer}
        selected={ques.selected}
        handleOptionClick={handleOptionClick}
        checked={checked}
      />
    )
  })

  const afterCheckedElems = (
    <div className={styles.afterChecked}>
      <p className={styles.scoreDisplay}>You scored {score}/5</p>
      <button onClick={handleRestartClick} className={`${styles.restart}`}>Play Again</button>
    </div>
  );

  const beforeCheckedElems = (
    <button onClick={handleCheckClick} className={`${styles.checkAnswers}`}>Check Answers</button>
  );

  return (
    <div className={`${styles.mainpage}`}>
      <h1 className={styles.mainpageHeader}>Questions</h1>
      <div className={`${styles.questionsDiv}`}>{quesElem}</div>    
      {checked ? afterCheckedElems : beforeCheckedElems}
      <img className={`${styles.blob} ${styles.top}`} src={topBlob} alt='top blob'/>
      <img className={`${styles.blob} ${styles.bottom}`} src={bottomBlob} alt='bottom blob'/>
    </div>
  )
}

export default MainPage;