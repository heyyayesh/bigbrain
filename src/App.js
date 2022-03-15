import React from 'react';
import StartPage from './components/startpage/StartPage';
import MainPage from './components/mainpage/MainPage';

function App() {
  const [gameStarted, setGameStarted] = React.useState(false);

  function handleStartClick() {
    setGameStarted(true);
  }

  return (
    <>
      { !gameStarted && <StartPage handleClick={handleStartClick}/> }
      { gameStarted && <MainPage /> }
    </>
  )
}

export default App;