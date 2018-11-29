import React, {Component} from 'react';

export default class Message extends Component {
  render() {
    return (
      <span className='chattext'>
                
                    {this.props.message.userName}:

        {this.props.message.message}<br></br>
      </span>
    )
  }
}