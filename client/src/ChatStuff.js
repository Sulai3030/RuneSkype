import React, { Component } from 'react';
import firebase from 'firebase';
export default class ChatStuff extends Component {
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
  handleSend() {
    if (this.state.message) {
      var newItem = {
        userName: this.state.userName,
        message: this.state.message,
      }
      this.messageRef.push(newItem);
      this.setState({ message: '' });
    }
  }
  handleKeyPress(event) {
    if (event.key !== 'Enter') return;
    this.handleSend();
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
<div className='chatstuff'>
          <input
            className='chatbar'
            type="text"
            placeholder="Type message"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button
            className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3 sendbutton"
            onClick={this.handleSend.bind(this)}
          >
            send
          </button>
      </div>
    );
  }
}