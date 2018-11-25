import React, { Component}  from 'react';
import './play.css'
import $ from 'jquery';
import Chance from 'chance';
import VideoComponent from './VideoComponent'
import './components/metisMenu.css';
import './components/sb-admin-2.css';
import './play.css';

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
          //     $("#chat-messages").append("<p className=player" + snapshot.val().idNum + "><span>"
          //     + snapshot.val().name + "</span>: " + snapshot.val().message + "</p>");
          //   }
          //   else {
          //     $("#chat-messages").append("<p className=player" + snapshot.val().idNum + "><span>"
          //     + snapshot.val().name + "</span>: " + snapshot.val().message + "</p>");
          //   }
          
          //   // Keeps div scrolled to bottom on each update.
          //   $("#chat-messages").scrollTop($("#chat-messages")[0].scrollHeight);
          // });



    }



render( ) {
    return(

      <div id="wrapper">

      {/* {/* <!-- Navigation --> */} 
      <nav className="navbar playnav navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html">SB Admin v2.0</a>
          </div>
          {/* <!-- /.navbar-header --> */}

          <ul className="nav navbar-top-links navbar-right">
              <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                      <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-messages">
                      <li>
                          <a href="#">
                              <div>
                                  <strong>John Smith</strong>
                                  <span className="pull-right text-muted">
                                      <em>Yesterday</em>
                                  </span>
                              </div>
                              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#">
                              <div>
                                  <strong>John Smith</strong>
                                  <span className="pull-right text-muted">
                                      <em>Yesterday</em>
                                  </span>
                              </div>
                              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#">
                              <div>
                                  <strong>John Smith</strong>
                                  <span className="pull-right text-muted">
                                      <em>Yesterday</em>
                                  </span>
                              </div>
                              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a className="text-center" href="#">
                              <strong>Read All Messages</strong>
                              <i className="fa fa-angle-right"></i>
                          </a>
                      </li>
                  </ul>
                  {/* <!-- /.dropdown-messages --> */}
              </li>
              {/* <!-- /.dropdown --> */}
              <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                      <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-tasks">
                      <li>
                          <a href="#">
                              <div>
                                  <p>
                                      <strong>Task 1</strong>
                                      <span className="pull-right text-muted">40% Complete</span>
                                  </p>
                                  <div className="progress progress-striped active">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: 40 + '%'}}>
                                          <span className="sr-only">40% Complete (success)</span>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#">
                              <div>
                                  <p>
                                      <strong>Task 2</strong>
                                      <span className="pull-right text-muted">20% Complete</span>
                                  </p>
                                  <div className="progress progress-striped active">
                                      <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: 20 + '%'}}>
                                          <span className="sr-only">20% Complete</span>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#">
                              <div>
                                  <p>
                                      <strong>Task 3</strong>
                                      <span className="pull-right text-muted">60% Complete</span>
                                  </p>
                                  <div className="progress progress-striped active">
                                      <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60 + '%'}}>
                                          <span className="sr-only">60% Complete (warning)</span>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#">
                              <div>
                                  <p>
                                      <strong>Task 4</strong>
                                      <span className="pull-right text-muted">80% Complete</span>
                                  </p>
                                  <div className="progress progress-striped active">
                                      <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: 80 + '%'}}>
                                          <span className="sr-only">80% Complete (danger)</span>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a className="text-center" href="#">
                              <strong>See All Tasks</strong>
                              <i className="fa fa-angle-right"></i>
                          </a>
                      </li>
                  </ul>
                  {/* <!-- /.dropdown-tasks --> */}
              </li>
              {/* <!-- /.dropdown --> */}
              <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                      <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-alerts">
                      <li>
                          <a href="#">
                              <div>
                                  <i className="fa fa-comment fa-fw"></i> New Comment
                                  <span className="pull-right text-muted small">4 minutes ago</span>
                              </div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#">
                              <div>
                                  <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                  <span className="pull-right text-muted small">12 minutes ago</span>
                              </div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#">
                              <div>
                                  <i className="fa fa-envelope fa-fw"></i> Message Sent
                                  <span className="pull-right text-muted small">4 minutes ago</span>
                              </div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#">
                              <div>
                                  <i className="fa fa-tasks fa-fw"></i> New Task
                                  <span className="pull-right text-muted small">4 minutes ago</span>
                              </div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#">
                              <div>
                                  <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                  <span className="pull-right text-muted small">4 minutes ago</span>
                              </div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a className="text-center" href="#">
                              <strong>See All Alerts</strong>
                              <i className="fa fa-angle-right"></i>
                          </a>
                      </li>
                  </ul>
                  {/* <!-- /.dropdown-alerts --> */}
              </li>
              {/* <!-- /.dropdown --> */}
              <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                      <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-user">
                      <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                      </li>
                      <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                      </li>
                      <li className="divider"></li>
                      <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                      </li>
                  </ul>
                  {/* <!-- /.dropdown-user --> */}
              </li>
              {/* <!-- /.dropdown --> */}
          </ul>
          {/* <!-- /.navbar-top-links --> */}

          <div className="navbar-default sidebar" role="navigation">
              <div className="sidebar-nav navbar-collapse">
                  
              </div>
              {/* <!-- /.sidebar-collapse --> */}
          </div>
          {/* <!-- /.navbar-static-side --> */}
      </nav>

      <div id="mainbody page-wrapper">
          {/* <!-- /.row --> */}
          <div className="firstrow row">
              {/* <div className="col-lg-4">
                  <div className="panel panel-default">
                      <div className="panel-heading">
                          Default Panel
                      </div>
                      <div className="panel-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                      </div>
                      <div className="panel-footer">
                          Panel Footer
                      </div>
                  </div>
              </div> */}
              {/* <!-- /.col-lg-4 --> */}
              <div className="col-lg-5">
                  <div className="panel panel-primary">
                      <div className="panel-heading">
                          Primary Panel
                      </div>
                      <div className="panel-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-2">
                  <div className="panel panel-primary">
                      <div className="panel-heading">
                          Primary Panel
                      </div>
                      <div className="panel-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                      </div>
                  </div>
              </div>
              {/* <!-- /.col-lg-4 --> */}
              <div className="col-lg-5">
                  <div className="panel panel-success">
                      <div className="panel-heading">
                          Success Panel
                      </div>
                      <div className="panel-body panel-video">
                      <VideoComponent />
                          </div>

                  </div>
              </div>
              {/* <!-- /.col-lg-4 --> */}
          </div>
          <div className="row secondrow">
              <div className="col-lg-6">
                  <div className="panel panel-default">
                      <div className="panel-heading">
  <ul className="nav nav-pills">
                              <li className=" panelnav-item active"><a href="#home-pills" data-toggle="tab">Home</a>
                              </li>
                              <li className='panelnav-item' ><a href="#profile-pills" data-toggle="tab">Profile</a>
                              </li>
                              <li className='panelnav-item' ><a href="#messages-pills" data-toggle="tab">Messages</a>
                              </li>
                              <li className='panelnav-item' ><a href="#settings-pills" data-toggle="tab">Settings</a>
                              </li>
                          </ul>
                      </div>
                      {/* <!-- /.panel-heading --> */}
                      <div className="panel-body">
                          {/* <!-- Nav tabs --> */}
                          

                          {/* <!-- Tab panes --> */}
                          <div className="tab-content">
                              <div className="tab-pane fade in active" id="home">
                                  </div>
                              <div className="tab-pane fade" id="profile">
                                  </div>
                              <div className="tab-pane fade" id="messages">
                                  </div>
                              <div className="tab-pane fade" id="settings">
                                  </div>
                          </div>
                      </div>
                      {/* <!-- /.panel-body --> */}
                  </div>
                  {/* <!-- /.panel --> */}
              </div>
              {/* <!-- /.col-lg-6 --> */}
              <div className="col-lg-6">
                  <div className="panel panel-default">
                      <div className="panel-heading">
                      <ul className="nav nav-pills">
                              <li className="panelnav-item active"><a href="#home-pills" data-toggle="tab">Home</a>
                              </li>
                              <li className='panelnav-item' ><a href="#profile-pills" data-toggle="tab">Profile</a>
                              </li>
                              <li className='panelnav-item' ><a href="#messages-pills" data-toggle="tab">Messages</a>
                              </li>
                              <li className='panelnav-item' ><a href="#settings-pills" data-toggle="tab">Settings</a>
                              </li>
                          </ul>
                      </div>
                      {/* <!-- /.panel-heading --> */}
                      <div className="panel-body">
                          {/* <!-- Nav tabs --> */}


                          {/* <!-- Tab panes --> */}
                          <div className="tab-content">
                              <div className="tab-pane fade in active" id="home-pills">
                                  </div>
                              <div className="tab-pane fade" id="profile-pills">
                                 </div>
                              <div className="tab-pane fade" id="messages-pills">
                                   </div>
                              <div className="tab-pane fade" id="settings-pills">
                                   </div>
                          </div>
                      </div>
                      {/* <!-- /.panel-body --> */}
                  </div>
                  {/* <!-- /.panel --> */}
              </div>
              {/* <!-- /.col-lg-6 --> */}
          </div>
      </div>
      {/* <!-- /#page-wrapper --> */}

  </div>
  /* <!-- /#wrapper --> */






    //     <div className="app playfield container-flex">
      
    //                 <div className="row boardrow">
    //                 <div className='col-1'></div>
    //                 <div className='col-5 '>

    //                 </div>
    //                 <div className='col-1'></div>
    //                 <div className='col-1'></div>
    //                 <div className='col-4'>
    //                 <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    //     <div>
    //         <VideoComponent />
    //     </div>
    // </MuiThemeProvider>
    //                 </div>                  
    //                 </div>

    //                 <div className='row chatdicediv'>
                    
    //                 <div className='col-3'>
    //                 <div className='chat' id='chat'>
    //     <div id="chat-messages"></div>
    //     <div id="chat-bar">
    //       <input id="chat-input"
    //       type="text"
    //       value={this.state.chat}
    //       name="name"
    //       onChange={this.handleInputChange}
    //       placeholder="Chat"
    //     required="required" />
    //       <button id="chat-send" onClick={(e) => this.clickHandler(e)}>Send</button>
    //     </div>
    //     </div>
    //                 </div>
    //                 <div className='col-4'>
    //                 <div className='characterinfo'>
                    
                    
    //                 </div>
    //                 </div>
    //                 <div className='col-5'>
    //                 <div className='dice'>
    //                 <div className='dicebuttons'>
    //                 <button type="button" data="d4" className="btn rollbtn btn-primary" onClick={(e) => this.diceRoller(e)}>D4</button>
    //                         <button type="button" data="d6" className="btn rollbtn btn-secondary" onClick={(e) => this.diceRoller(e)}>D6</button>
    //                         <button type="button" data="d8" className="btn rollbtn btn-success" onClick={(e) => this.diceRoller(e)}>D8</button>
    //                         <button type="button" data="d10" className="btn rollbtn btn-danger" onClick={(e) => this.diceRoller(e)}>D10</button>
    //                         <button type="button" data="d12" className="btn rollbtn btn-warning" onClick={(e) => this.diceRoller(e)}>D12</button>
    //                         <button type="button" data="d20" className="btn rollbtn btn-info" onClick={(e) => this.diceRoller(e)}>D20</button></div>
    //                 <span className='diceresults' style={{backgroundImage : `url(./resources/${this.state.roll}.png)` }}>
    //                 <center><p>{this.state.rollResult}</p></center>
    //                 </span>
    //                 </div>
    //                 </div>                
                    
                
    //                 </div>


    //               </div>
    )
}

}

export default Play