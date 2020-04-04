import React from 'react';

import {objectiveAccomplished} from './../reducers/actions';

import MCQuestionChoice from './MCQuestionChoice.jsx';
import QuestionButtons from './QuestionButtons.jsx';

export default class MCQuestion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected_choices_ids:[],
      option:"",
      answered:false,
    };
  }
  UNSAFE_componentWillUpdate(prevProps){
    if(prevProps.question !== this.props.question){
      this.setState({selected_choices_ids:[], answered:false});
      this.setState({option:""});
    }
  }
  handleMultiChoiceChange(index){
    let newSelectedChoices = Object.assign([], this.state.selected_choices_ids);
    let indexOf = newSelectedChoices.indexOf(index);
    if(indexOf === -1){
      newSelectedChoices.push(index);
    } else {
      newSelectedChoices.splice(indexOf, 1);
    }
    this.setState({selected_choices_ids:newSelectedChoices});
  }

  handleOneChoiceChange(index){
    this.setState({option:index});
  }

  onAnswerQuestion(){

    let scorePercentage;

    // Calculate score
    let nChoices = this.props.question.choices.length;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    // eslint-disable-next-line no-unused-vars
    let blankAnswers = 0;

    switch (this.props.question.type){
    case "multiple_choice":
      for(let i = 0; i < nChoices; i++){
        if(this.state.selected_choices_ids.indexOf(i) !== -1){
          // Answered choice
          if(this.props.question.choices[i].answer === true){
            correctAnswers += 1;
          } else {
            incorrectAnswers += 1;
          }
        } else {
          blankAnswers += 1;
        }
      }
      scorePercentage = Math.max(0, (correctAnswers - incorrectAnswers) / this.props.question.choices.filter(function(c){ return c.answer === true; }).length);
      break;
    case "one_choice":
      if(this.state.option === "" || this.props.question.choices[this.state.option].answer === false){
        scorePercentage = 0;
      } else {
        scorePercentage = 1;
      }
      break;
    }

    this.props.quiz.questions[this.props.questionIndex].score = scorePercentage;    

    // Send data via SCORM
    let objective = this.props.objective;
    this.props.dispatch(objectiveAccomplished(objective.id, objective.score * scorePercentage));
    // this.props.dispatch(objectiveAccomplishedThunk(objective.id, objective.score * scorePercentage));

    // Mark question as answered
    this.setState({answered:true});

  }
  onResetQuestion(){
    this.setState({selected_choices_ids:[], answered:false});
  }
  onNextQuestion(){
    this.props.onNextQuestion();
  }
  render(){
    let choices = [];
    switch (this.props.question.type){
    case "multiple_choice":
      for(let i = 0; i < this.props.question.choices.length; i++){
        choices.push(<MCQuestionChoice key={"MyQuestion_" + "question_choice_" + i} type={this.props.question.type} choice={this.props.question.choices[i]} index={i} checked={this.state.selected_choices_ids.indexOf(i) !== -1} handleChange={this.handleMultiChoiceChange.bind(this)} questionAnswered={this.state.answered} />);
      }
      break;
    case "one_choice":
      for(let i = 0; i < this.props.question.choices.length; i++){
        choices.push(<MCQuestionChoice key={"MyQuestion_" + "question_choice_" + i} type={this.props.question.type} choice={this.props.question.choices[i]} index={i} checked={i === this.state.option} handleChange={this.handleOneChoiceChange.bind(this)} questionAnswered={this.state.answered} />);
      }
      break;
    default:
      console.log("Error, tipo no identificado");
    }
    return (
      <div className="question">
        <div className="pregunta">
          <div className="textopregunta">{this.props.question.value}</div>
          <div className="respuestas">
            {choices}</div></div>
        <QuestionButtons I18n={this.props.I18n} onAnswerQuestion={this.onAnswerQuestion.bind(this)} onResetQuestion={this.onResetQuestion.bind(this)} onResetQuiz={this.props.onResetQuiz} onNextQuestion={this.onNextQuestion.bind(this)} answered={this.state.answered} quizCompleted={this.props.quizCompleted} allow_finish={this.props.isLastQuestion} />
      </div>
    );
  }
}