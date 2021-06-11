import React from 'react';
import Style from './styles.module.css';

const AnswerItem = props => {
  const cls = [Style.AnswerItem];

  if (props.state) {
    cls.push(Style[props.state])
  }

  return (
    <li
      className={cls.join(' ')}
      onClick = {() => {props.onAnswerClick(props.answer.id)}}
    >
      { props.answer.text }
    </li>
  );
}

export default AnswerItem;
