import React from 'react';

export default class UserInfo extends React.Component {

    render() {

        return (
            <div className="user">
                <div className="name">
                    <div className="nameText">{this.props.I18n.getTrans("i.nameAndSurname")}</div>
                    <input name="name" />
                </div>
                <div className="age">
                    <div className="ageText">{this.props.I18n.getTrans("i.age")}</div>
                    <input name="age" />
                </div>
                <div className="studies">
                    <div className="studiesText">{this.props.I18n.getTrans("i.studies")}</div>
                    <input name="studies" />
                </div>
                <div className="location">
                    <div className="locationText">{this.props.I18n.getTrans("i.location")}</div>
                    <input name="location" />
                </div>
                <button className="answerUserInfo">{this.props.I18n.getTrans("i.answerUserInfo")}</button>
            </div>
        );

    }
}