import React from 'react';
import { nanoid } from 'nanoid';
import StartPage from './components/startpage/StartPage';
import MainPage from './components/mainpage/MainPage';
import he from 'he';

function App() {
  const [gameStarted, setGameStarted] = React.useState(false);

  const [questions, setQuestions] = React.useState([]);

  const [score, setScore] = React.useState(0);

  const [checked, setChecked] = React.useState(false);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function fetchData() {
    const arr = [];
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
    .then(res => res.json()
    .then(data => {
      data.results.forEach(ques => {
        arr.push({
          id: nanoid(),
          title: he.decode(ques.question),
          options: shuffleArray([...ques.incorrect_answers, ques.correct_answer].map(opt => he.decode(opt))),
          answer: ques.correct_answer,
          selected: '',
        })
      })
    })
    )
    setQuestions(arr);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  function handleStartClick() {
    setGameStarted(true);
  }

  function handleOptionClick(value, id) {
    setQuestions(prevQuestions => {
      return prevQuestions.map(ques => {
        if (ques.id !== id) return ques;
        else {
          return ({
            ...ques,
            selected: value
          })
        }
      })
    })
  }

  function handleCheckClick() {
    questions.forEach(ques => {
      if (ques.selected === ques.answer)
        setScore(prevScore => prevScore + 1);
    })

    setChecked(prevChecked => !prevChecked);
  }

  function handleRestartClick() {
    fetchData();
    setScore(0);
    setChecked(false);
    setGameStarted(false);
  }

  return (
    <>
      {!gameStarted ?  
      <StartPage handleClick={handleStartClick}/> :

      <MainPage
        questions={questions}
        handleOptionClick={handleOptionClick}
        handleCheckClick={handleCheckClick}
        handleRestartClick={handleRestartClick}
        checked={checked}
        score={score}
      />
      }
    </>
  )
}

export default App;