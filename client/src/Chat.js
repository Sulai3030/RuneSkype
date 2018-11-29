import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import firebase from 'firebase';
import firebaseConfig from './config';


firebase.initializeApp(firebaseConfig);


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOut() {
    firebase.auth().signOut();
  }


  render() {
    return (
        <div>
      <div className="chat">
          { !this.state.user ? (
            <button
              className="app__button"
              onClick={this.handleSignIn.bind(this)}
            >
              Sign in
            </button>
          ) : (
            ''
          )}
        </div>
          <Form user={this.state.user} />

      </div>
    );
  }
}
export default Chat;