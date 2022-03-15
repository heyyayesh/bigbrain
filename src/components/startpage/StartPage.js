import React from 'react';
import styles from './startpage.module.css';
import blob5 from '../../imgs/topBlob.png';
import blobs from '../../imgs/bottomBlob.png';

function StartPage(props) {
  return (
    <div className={styles.startPage}>
      <h1 className={styles.title}>Quizzical</h1>
      <p className={styles.desc}>Some description if needed</p>
      <button className={styles.startBtn} onClick={props.handleClick}>Start Quiz</button>
      <img className={styles.topBlob} src={blob5} alt='blob'/>
      <img className={styles.bottomBlob} src={blobs} alt='blob'/>
    </div>
  )
}

export default StartPage;