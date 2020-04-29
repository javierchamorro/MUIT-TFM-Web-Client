import React from 'react';

export default class MCQuestionChoice extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let quizClassName = "questionC2 ml-2 my-auto";
    let showCorrection = (this.props.questionAnswered);
    if(showCorrection){
      if(this.props.checked){
        if(this.props.choice.answer === true){
          quizClassName += " questionC2T ml-2 my-auto";
        } else {
          quizClassName += " questionC2F ml-2 my-auto";
        }
      } else if(this.props.choice.answer === true){
        quizClassName += " questionC2T ml-2 my-auto";
      }
    }

    let type = "checkbox";
    switch (this.props.type){
    case "multiple_choice":
      type = "checkbox";
      break;
    case "one_choice":
      type = "radio";
      break;
    default:
      type = "checkbox";
    }

    return (
      <div className="question_choice">
        <ul className="list-group list-group-horizontal">
          <div className="questionC1 my-auto">
            <input type={type} checked={this.props.checked} onChange={() => this.props.handleChange(this.props.index)} disabled={showCorrection} />
          </div>
          <div className={quizClassName}>
            <div>{this.props.choice.value}</div>
          </div>
        </ul>
      </div>
    );
  }
}