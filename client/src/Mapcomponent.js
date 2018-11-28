import React, {Component} from 'react';
import './mapstyle.css'
import Draggable from 'react-draggable'
import Icon from './icon'







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

                  <Icon /> 
      <Draggable>
        <div id='mapdiv'>

        </div>
      </Draggable>
          </div>
       


       )
      }
     }
     