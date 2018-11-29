import React, {Component} from 'react';
import './mapstyle.css'
import html2canvas from 'html2canvas'
import Draggable from 'react-draggable'
import Icon from './icon'
import Message from './Message';
import firebase from 'firebase';
import $ from 'jquery'
import Axios from 'axios'






export default class CanvasTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: 'Player',
          message: '',
          url : ''
        }

    }

 

  handleChange(event) {
      this.setState({url: event.target.value});
    }
    

    urlSubmit(event) {
        $('body').css('background-image', 'url(' + this.state.url + ')')
    }

MapRender = () => {

    html2canvas(document.querySelector("#mapdiv")).then((canvas) => {  
        let currentCanvas = canvas
        document.querySelector('.otherbox').innerHTML = '';
        document.querySelector('.otherbox').appendChild(canvas)

        
      });
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
              <div className='row'>
     <div className = ' col-lg-6 testrow'>
         <input
         
         type='text'
         placeholder="Link Image URL"
         value={this.state.url}
         onChange={this.handleChange.bind(this)}
         onSubmit={this.urlSubmit.bind(this)}
         />
         <button onClick={this.urlSubmit.bind(this)} className='btn btn-danger'>Submit</button>
         </div>
     </div>
              </div>

       )
      }
     }