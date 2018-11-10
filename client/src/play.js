import React, { Component}  from 'react';
import './play.css'
import $ from 'jquery';
import firebase from './firebase';

class Play extends Component {

    state = {
        chat : ""
    }

    handleInputChange = event => {

        let value = event.target.value;
    
    
    
    
        // Updating the input's state
        this.setState({
          chat : value
        });
    
    
    
    }

    clickHandler = (e) => {
        let database = firebase.database();
        let chatData = database.ref("/chat");
        if ($("#chat-input").val() !== "") {

            let message = $("#chat-input").val();
        
            chatData.push({
              message: message,
              time: firebase.database.ServerValue.TIMESTAMP,
            });
        
            $("#chat-input").val("");
          }
    }


    componentDidMount() {
    
        let database = firebase.database();
        let chatData = database.ref("/chat");
        



          chatData.orderByChild("time").on("child_added", function(snapshot) {

            // If idNum is 0, then its a disconnect message and displays accordingly
            // If not - its a user chat message
            if (snapshot.val().idNum === 0) {
              $("#chat-messages").append("<p class=player" + snapshot.val().idNum + "><span>"
              + snapshot.val().name + "</span>: " + snapshot.val().message + "</p>");
            }
            else {
              $("#chat-messages").append("<p class=player" + snapshot.val().idNum + "><span>"
              + snapshot.val().name + "</span>: " + snapshot.val().message + "</p>");
            }
          
            // Keeps div scrolled to bottom on each update.
            $("#chat-messages").scrollTop($("#chat-messages")[0].scrollHeight);
          });



    }



render( ) {
    return(
        <div className="app playfield container-flex">
                    <div className="row boardrow">
                    <div className='col-1'></div>
                    <div className='col-5 board'></div>
                    <div className='col-1'></div>
                    <div className='col-4 videodiv'></div>                                
                    <div className='col-1'></div>
                    </div>

                    <div className='row chatdicediv'>
                    <div className='col-1'></div>
                    <div className='col-5 chat' id="chat">
        <div id="chat-messages"></div>
        <div id="chat-bar">
          <input id="chat-input"
          type="text"
          value={this.state.chat}
          name="name"
          onChange={this.handleInputChange}
          placeholder="Chat"
        required="required" />
          <button id="chat-send" onClick={(e) => this.clickHandler(e)}>Send</button>
        </div>
                    </div>
                    
                    <div className='col-5 dice'>
                    </div>                
                    
                    <div className='col-1'></div>
                    </div>


                  </div>
    )
}

}

export default Play