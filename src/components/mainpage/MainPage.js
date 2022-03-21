import React from 'react';
import Question from '../question/Question';
// import styles from './mainpage.module.css';

function MainPage({questions, handleOptionClick}) {
  const quesElem = questions.map(ques => {
    return (
      <Question 
        key={ques.id} 
        title={ques.title} 
        id={ques.id} 
        options={ques.options}
        selected={ques.selected}
        handleOptionClick={handleOptionClick}
      />
    )
  })

  console.log(quesElem);
  return (quesElem)
}

export default MainPage;