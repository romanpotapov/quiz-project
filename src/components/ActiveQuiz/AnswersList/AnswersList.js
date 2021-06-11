import React from 'react';
import Style from './styles.module.css';

import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => (
  <ul className={Style.AnswersList}>
    { props.answers.map((answer, index) => {
      return (
        <AnswerItem
          key = {index}
          answer = {answer}
          onAnswerClick = {props.onAnswerClick}
          state = {props.state ? props.state[answer.id] : null}
        />
      )
    }) }
  </ul>
);

export default AnswersList;
