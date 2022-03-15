import React from 'react';
import styles from './mainpage.module.css';

function MainPage() {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    setQuestions(
      fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
      .then(res => res.json()
      .then(data => setQuestions(data.results))
    ))
  }, [])

  console.log(questions);

  return (
    <div>
      
    </div>
  )
}

export default MainPage;