// import React, { Component } from 'react';
// import $ from 'jquery';
// import Draggable from 'react-draggable';
// import { DragSource } from 'react-dnd'

// const Types = {
//     ITEM: 'map'
//    }





//    const itemSource = {
//     beginDrag(props) {
 
//         return {map: 'main'}
//     },
//     endDrag(props) {
//     }
//    }
//    function collect(connect, monitor) {
//     return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging()
//     }
//    }
//    class Map extends Component {
//     render() {
//     const { isDragging, connectDragSource, map } = this.props
//     return connectDragSource(
//         <div id='mapdiv'>
//                   <Draggable><span className='dot' id='LI_1'>
//                   {map}
//                   </span></Draggable>
//                 </div>
//     )
//     }
//    }
//    export default DragSource(Types.ITEM, itemSource, collect)(Map)


