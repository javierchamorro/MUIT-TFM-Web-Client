import React from 'react';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age:0,
            studies:'',
            location:''};
          }

    onChangeNameText(valor){
        this.setState({name: valor.target.value});
        this.props.quiz.UserName = valor.target.value;
    } 
    onChangeStudiesText(valor){
        this.setState({studies: valor.target.value});
        this.props.quiz.Studies = valor.target.value;
    }  
    onChangeAgeText(valor){
        this.setState({age: valor.target.value});
        this.props.quiz.Age = valor.target.value;
    }  
    onChangeLocationText(valor){
        this.setState({location: valor.target.value});
        this.props.quiz.Location = valor.target.value;
    }  

    render() {

        return (
            <div className="user">
                <div className="info">
                    <div className="nameText">{this.props.I18n.getTrans("i.nameAndSurname")}</div>
                    <input type="text" name="name" value={this.state.name} onChange={this.onChangeNameText.bind(this)}/>
                </div>
                <div className="info">
                    <div className="ageText">{this.props.I18n.getTrans("i.age")}</div>
                    <input type="number" name="age" value={this.state.age} onChange={this.onChangeAgeText.bind(this)}/>
                </div>
                <div className="info">
                    <div className="studiesText">{this.props.I18n.getTrans("i.studies")}</div>
                    <input type="text" name="studies" value={this.state.studies} onChange={this.onChangeStudiesText.bind(this)}/>
                </div>
                <div className="info">
                    <div className="locationText">{this.props.I18n.getTrans("i.location")}</div>
                    <input type="text" name="location" value={this.state.location} onChange={this.onChangeLocationText.bind(this)}/>
                </div>
                <div className="info">
                    <button className="answerUserInfo" onClick={this.props.onCompleteInformation.bind(this)}>{this.props.I18n.getTrans("i.answerUserInfo")}</button>
                </div>
            </div>
        );

    }
}