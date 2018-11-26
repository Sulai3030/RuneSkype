import React, { Component } from 'react';
import $ from 'jquery';
import './mapstyle.css'
// import { DropTarget } from 'react-dnd'
import Draggable from 'react-draggable';
// import Map from './Map'



// const Types = {
//  ITEM: 'map'
// }
// function collect(connect, monitor) {
//  return {
//  connectDropTarget: connect.dropTarget()
//  }
// }



class MapComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { connectDropTarget } = this.props
    return (


            
          <div id='mapcontainer'>
          <div id='mapdiv'>
           <Draggable>
             <span className='dot' id='LI_1'></span>
           </Draggable>
           </div>
         </div>
       


       )
      }
     }
     export default MapComponent