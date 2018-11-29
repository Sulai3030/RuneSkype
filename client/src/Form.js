import React, { Component } from 'react';
import Message from './Message';
import firebase from 'firebase';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Sebastian',
      message: '',
      list: [],
    };
    this.messageRef = firebase.database().ref().child('messages');
    this.listenMessages();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.user) {
      this.setState({'userName': nextProps.user.displayName});
    }
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  listenMessages() {
    this.messageRef
      .limitToLast(10)
      .on('value', message => {
        this.setState({
          list: Object.values(message.val()),
        });
      });
  }
  render() {
    return (
      <div className="form">
        <div className="form__message">
          { this.state.list.map((item, index) =>
            <div><Message key={index} message={item} /><br></br></div>
          )}
        </div>
      </div>
    );
  }
}