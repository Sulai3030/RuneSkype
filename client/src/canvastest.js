import React, {Component} from 'react';
import './mapstyle.css'
import html2canvas from 'html2canvas'
import Draggable from 'react-draggable'
import Icon from './icon'
import Message from './Message';
import firebase from 'firebase';
import $ from 'jquery'






export default class CanvasTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: 'Player',
          message: '',
        }
        this.messageRef = firebase.database().ref().child('messages');
        this.listenMessages();
    }

MapRender = () => {

    html2canvas(document.querySelector("#mapdiv")).then((canvas) => {  
        let currentCanvas = canvas
        document.querySelector('.otherbox').innerHTML = '';
        document.querySelector('.otherbox').appendChild(canvas)
        
        let element = $("canvas");
        let jsonObject = {};
        jsonObject.id = element.id;
        jsonObject.innerHTML = element.innerHTML;
        let jsonString = JSON.stringify(jsonObject); // this is json for your div. 
        this.handleSend(jsonObject)
        this.handleSend(jsonString)
      });




    
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

  handleSend(jsonObject) {
      

      let newItem = {
        userName: this.state.userName,
        message: jsonObject,
      }
      this.messageRef.push(newItem);
      

    
  }


// IconRender = () => {

//     const mapdiv = document.querySelector('#mapdiv')



//     html2canvas.ignoreElements(mapdiv)

//     html2canvas(document.querySelector("#mapcontainer")).then((canvas) => {  
//         document.querySelector('.otherbox').innerHTML = '';
//         document.querySelector('.otherbox').appendChild(canvas)
//       });
    
    
// }

  render() {
    

    
    return (

      <div >
            


        <div className='row canvastest'>
              <div className="col-lg-6">
                  <div className="panel panel-primary ">

                      <div className="panel-body map-panel">
                      <div onMouseUp={this.MapRender}   className='map-panel'>
                      <div id='mapcontainer'>

                                <Icon /> 
                                <Draggable>
                                <div id='mapdiv'>

                                </div>
                                </Draggable>
                                </div>
                                </div>
     
                                </div>
                      </div>
                  </div>
             
              <div className="col-lg-6">
                  <div className="panel panel-primary">

                      <div className="panel-body map-panel">
                      <div className='otherbox'></div>
                      </div>
                  </div>
              </div>
              </div>
              </div>

       )
      }
     }