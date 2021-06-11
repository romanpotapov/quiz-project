import React from 'react';
import Style from './styles.module.css';

import Button from '../UI/button';

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') total++;

    return total;
  }, 0);

  return (
    <div className={Style.FinishedQuiz}>
      <ul>
        { props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'success' ? 'fa-check' : 'fa-times',
            Style[props.results[quizItem.id]]
          ];

          return (
            <li key = {index}>
              <strong>{index + 1}</strong>.  &nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          )
        })}
      </ul>
      <p>Correct answer {successCount} from {props.quiz.length}</p>
      <div>
        <Button onClick={props.onRetry} type="primary">Repeat</Button>
        <Button type="success">Go to Guiz List</Button>
      </div>
    </div>
  )
}

export default FinishedQuiz;
