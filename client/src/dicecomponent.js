import React, { Component } from 'react';
import Message from './Message';
import firebase from 'firebase';
import $ from 'jquery';
import Chance from 'chance';

let chance = new Chance();

export default class DiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Player',
      message: '',
      list: [],
      roll : "d0",
      rollResult: ""
    };
    this.messageRef = firebase.database().ref().child('messages');
    this.listenMessages();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.user) {
      this.setState({'userName': nextProps.user.displayName});
    }
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


  diceRoller = event => {


     
    
    setTimeout(()=> {
        this.handleSend()
    }, 500)
  
    let rollresult = 0;
    let dice = '';

    let rollType = $(event.target).attr('data');
    this.setState({
      roll: rollType
    });

    switch (rollType) {
      case "d4":
      rollresult = chance.d4()
      dice = '/4'
      break;
      case "d6":
      rollresult = chance.d6()
      dice = '/6'
      break;
      case "d8":
      rollresult = chance.d8()
      dice = '/8'
      break;
      case "d10":
      rollresult = chance.d10()
      dice = '/10'
      break;
      case "d12":
      rollresult = chance.d12()
      dice = '/12'
      break;
      case "d20":
      rollresult = chance.d20()
      dice = '/20'
      break;
      default:
      rollresult = 0;
    }


    this.setState({
      rollResult : rollresult,
      message: `[ROLLS] - I rolled a ` + rollresult + dice
    })

    
  }

  render() {
    return (
<div className="tab-pane fade in active dice" id="home-pills">
                           
                           <div className='dicebuttons'>
                           <button type="button" data="d4" className=" rollbtn punch btn-primary" onClick={(e) => this.diceRoller(e)}>D4</button>
                                   <button type="button" data="d6" className=" rollbtn punch btn-secondary" onClick={(e) => this.diceRoller(e)}>D6</button>
                                   <button type="button" data="d8" className=" rollbtn punch btn-success" onClick={(e) => this.diceRoller(e)}>D8</button>
                                   <button type="button" data="d10" className=" rollbtn punch btn-danger" onClick={(e) => this.diceRoller(e)}>D10</button>
                                   <button type="button" data="d12" className=" rollbtn punch btn-warning" onClick={(e) => this.diceRoller(e)}>D12</button>
                                   <button type="button" data="d20" className=" rollbtn punch btn-info" onClick={(e) => this.diceRoller(e)}>D20</button></div>
                           <span className='diceresults center' style={{backgroundImage : `url(./resources/${this.state.roll}.png)` }}>
                           {this.state.rollResult}
                           </span>
                  
                                         </div>
    );
  }
}