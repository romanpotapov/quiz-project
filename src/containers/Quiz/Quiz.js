import React, {Component} from 'react';
import Style from './Quiz.module.css';

import ActiveQuiz from '../../components/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

export default class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'Which color?',
        rightAnswerID: 2,
        id: 1,
        answers: [
          { text: 'Question 1', id: 1 },
          { text: 'Question 2', id: 2 },
          { text: 'Question 3', id: 3 },
          { text: 'Question 4', id: 4 }
        ]
      },
      {
        question: 'Which year?',
        rightAnswerID: 3,
        id: 2,
        answers: [
          { text: 'Question 1', id: 1 },
          { text: 'Question 2', id: 2 },
          { text: 'Question 3', id: 3 },
          { text: 'Question 4', id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = (answerID) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return
      }

    }
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerID === answerID) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }
      this.setState({
        answerState: { [answerID]: 'success' },
        results
      });

      const timeuot = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeuot)
      }, 1000);
    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: { [answerID]: 'error' },
        results
      });

    }
  }

  isQuizFinished() {
    return this.state.activeQuestion +1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      isFinished: false,
      answerState: null,
      results: {}
    })
  }

  render() {
    return (
      <div className={Style.Quiz}>
        <div className={Style.QuizWrapper}>
          <h1>QUIZ</h1>
          {
            this.state.isFinished
            ? <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.retryHandler}
              />
            : <ActiveQuiz
              answers = {this.state.quiz[this.state.activeQuestion].answers}
              question = {this.state.quiz.[this.state.activeQuestion].question}
              onAnswerClick = {this.onAnswerClickHandler}
              quizLenght = {this.state.quiz.length}
              answerNumber = {this.state.activeQuestion + 1}
              state = {this.state.answerState}
            />
          }
        </div>
      </div>
    )
  }
}
