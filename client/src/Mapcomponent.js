import React, {Component} from 'react';
import './mapstyle.css'
import Draggable from 'react-draggable'







export default class MapComponent extends Component {
  constructor() {
    super();
    this.state = {
      draggable : 'map'
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

  componentDidMount() {

  }

  render() {
    
   
    
    return (

      
            
   
            
      <div id='mapcontainer'>
      {this.state.draggable === 'map' ? 
      <Draggable>
        <div id='mapdiv' onClick={this.clickSwap}>
            <span onClick={this.clickSwap} className='dot' id='LI_1'></span>
        </div>
      </Draggable>
      : <div onClick={this.clickSwap} id='mapdiv'>
      <Draggable>
        <span onClick={this.clickSwap} className='dot' id='LI_1'></span>
      </Draggable>
      </div> }
      </div>
       


       )
      }
     }
     