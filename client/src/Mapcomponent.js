import React, {Component} from 'react';
import './mapstyle.css'
import Draggable from 'react-draggable'
import Icon from './icon'







export default class MapComponent extends Component {
  constructor() {
    super();
    this.state = {
      draggable : 'map',
      size : 100
    };
  }





  clickSwap = () => {
      if (this.state === 'map') {
        this.setState({
          draggable : 'icon'
        })
      }
      else if (this.state === 'icon') {
        this.setState({
          draggable: 'map'
        })
      }
  }

  zoomUp = () => {
    this.setState({
      size: this.state.size + 10
    })
  }

  zoomDown = () => {
    this.setState({
      size: this.state.size - 10
    })
  }




  render() {
    
   
    
    return (

      
            
    
            <div id='mapcontainer'>
                <div className='mapcontrols'>
                  <div onClick={this.zoomUp} className='up'></div>
                  <div onClick={this.zoomDown} className='down'></div>
                </div>
                  <Icon /> 
      <Draggable>
        <div  style={{backgroundSize: this.state.size + '%'}} id='mapdiv'>

        </div>
      </Draggable>
          </div>
   


       )
      }
     }
     