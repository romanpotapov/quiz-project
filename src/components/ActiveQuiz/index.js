import React from 'react';
import Style from './styles.module.css';

import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
  <div className={Style.ActiveQuiz}>
    <p className={Style.Question}>
      <span>
        <strong>{props.answerNumber}.</strong>&nbsp;
        {props.question}
      </span>
      <small>{props.answerNumber} from {props.quizLenght}</small>
    </p>
    <AnswersList
      state = {props.state}
      answers = {props.answers}
      onAnswerClick = {props.onAnswerClick}
    />
  </div>
)

export default ActiveQuiz;
