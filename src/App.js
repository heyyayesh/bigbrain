import React from 'react';
import { nanoid } from 'nanoid';
import StartPage from './components/startpage/StartPage';
import MainPage from './components/mainpage/MainPage';

function App() {
  const [gameStarted, setGameStarted] = React.useState(false);

  const [questions, setQuestions] = React.useState([]);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  React.useEffect(() => {
    const arr = [];
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
    .then(res => res.json()
    .then(data => {
      data.results.forEach(ques => {
        arr.push({
          id: nanoid(),
          title: ques.question,
          options: shuffleArray([...ques.incorrect_answers, ques.correct_answer]),
          answer: ques.correct_answer,
          selected: '',
        })
      })
    })
    )
    setQuestions(arr);
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

  console.log(questions);

  return (
    <>
      {!gameStarted ?  
      <StartPage handleClick={handleStartClick}/> :

      <MainPage
        questions={questions}
        handleOptionClick={handleOptionClick}
      />
      }
    </>
  )
}

export default App;