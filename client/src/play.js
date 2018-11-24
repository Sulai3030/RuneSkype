import React, { Component}  from 'react';
import './play.css'
import $ from 'jquery';
import Chance from 'chance';
import VideoComponent from './VideoComponent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './videoteststyle.css';

class Play extends Component {

    state = {
        chat : "",
        roll : "d0",
        rollResult: ""
    }

    diceRoller = event => {

      let chance = new Chance();
    
      let rollresult = 0;

      let rollType = $(event.target).attr('data');
      this.setState({
        roll: rollType
      });

      switch (rollType) {
        case "d4":
        rollresult = chance.d4()
        break;
        case "d6":
        rollresult = chance.d6()
        break;
        case "d8":
        rollresult = chance.d8()
        break;
        case "d10":
        rollresult = chance.d10()
        break;
        case "d12":
        rollresult = chance.d12()
        break;
        case "d20":
        rollresult = chance.d20()
        break;
        default:
        rollresult = 0;
      }


      console.log(rollresult)

      this.setState({
        rollResult : rollresult
      })


    
    }

    handleInputChange = event => {

        let value = event.target.value;
    
    
    
    
        // Updating the input's state
        this.setState({
          chat : value
        });
    
    
    
    }

    clickHandler = (e) => {
        // let database = firebase.database();
        // let chatData = database.ref("/chat");
        // if ($("#chat-input").val() !== "") {

        //     let message = $("#chat-input").val();
        
        //     chatData.push({
        //       message: message,
        //       time: firebase.database.ServerValue.TIMESTAMP,
        //     });
        
            $("#chat-input").val("");
          // }
    }


    componentDidMount() {
    
        // let database = firebase.database();
        // let chatData = database.ref("/chat");
        



          // chatData.orderByChild("time").on("child_added", function(snapshot) {

          //   // If idNum is 0, then its a disconnect message and displays accordingly
          //   // If not - its a user chat message
          //   if (snapshot.val().idNum === 0) {
          //     $("#chat-messages").append("<p class=player" + snapshot.val().idNum + "><span>"
          //     + snapshot.val().name + "</span>: " + snapshot.val().message + "</p>");
          //   }
          //   else {
          //     $("#chat-messages").append("<p class=player" + snapshot.val().idNum + "><span>"
          //     + snapshot.val().name + "</span>: " + snapshot.val().message + "</p>");
          //   }
          
          //   // Keeps div scrolled to bottom on each update.
          //   $("#chat-messages").scrollTop($("#chat-messages")[0].scrollHeight);
          // });



    }



render( ) {
    return(
        <div className="app playfield container-flex">
      
                    <div className="row boardrow">
                    <div className='col-1'></div>
                    <div className='col-5 '>

                    </div>
                    <div className='col-1'></div>
                    <div className='col-1'></div>
                    <div className='col-4'>
                    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
            <VideoComponent />
        </div>
    </MuiThemeProvider>
                    </div>                  
                    </div>

                    <div className='row chatdicediv'>
                    
                    <div className='col-3'>
                    <div className='chat' id='chat'>
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
                    </div>
                    <div className='col-4'>
                    <div className='characterinfo'>
                    
                    
                    </div>
                    </div>
                    <div className='col-5'>
                    <div className='dice'>
                    <div className='dicebuttons'>
                    <button type="button" data="d4" className="btn rollbtn btn-primary" onClick={(e) => this.diceRoller(e)}>D4</button>
                            <button type="button" data="d6" className="btn rollbtn btn-secondary" onClick={(e) => this.diceRoller(e)}>D6</button>
                            <button type="button" data="d8" className="btn rollbtn btn-success" onClick={(e) => this.diceRoller(e)}>D8</button>
                            <button type="button" data="d10" className="btn rollbtn btn-danger" onClick={(e) => this.diceRoller(e)}>D10</button>
                            <button type="button" data="d12" className="btn rollbtn btn-warning" onClick={(e) => this.diceRoller(e)}>D12</button>
                            <button type="button" data="d20" className="btn rollbtn btn-info" onClick={(e) => this.diceRoller(e)}>D20</button></div>
                    <span className='diceresults' style={{backgroundImage : `url(./resources/${this.state.roll}.png)` }}>
                    <center><p>{this.state.rollResult}</p></center>
                    </span>
                    </div>
                    </div>                
                    
                
                    </div>


                  </div>
    )
}

}

export default Play