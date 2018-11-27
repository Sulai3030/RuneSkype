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



class DragMap extends Component {


  render() {
    
   

    // const { connectDropTarget } = this.props
    return (

          <Draggable>
            <div id='mapdiv'>
             <span className='dot' id='LI_1'></span>
           </div>
            </Draggable>
       


       )
      }
     }
     export default DragMap