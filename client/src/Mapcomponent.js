import React, { Component } from 'react';
import $ from 'jquery';
import './mapstyle.css'
// import { DropTarget } from 'react-dnd'
import DragMap from './dragmap'
import DragIcon from './dragicon'



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
    this.state = {
      drag : 'map'
    }
  }





  render() {
    

    // const { connectDropTarget } = this.props
    return (

      
            
          <div id='mapcontainer'>
          
          <div id='mapspace'>


          {this.state.drag === 'map' ? <DragMap></DragMap> : <DragIcon></DragIcon>}




           </div>
         </div>
       


       )
      }
     }
     export default MapComponent