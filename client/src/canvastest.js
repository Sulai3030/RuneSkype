import React, {Component} from 'react';
import './mapstyle.css'
import html2canvas from 'html2canvas'
import Draggable from 'react-draggable'
import Icon from './icon'






export default class CanvasTest extends Component {


    state = {
        canvasState : true
    }


MapRender = () => {

    html2canvas(document.querySelector("#mapdiv")).then((canvas) => {  
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
            
<div onMouseUp={this.MapRender}   className='map-panel'>

    
    <div id='mapcontainer'>

<Icon /> 
<Draggable>
<div id='mapdiv'>

</div>
</Draggable>
</div>
</div>
<div className='otherbox'></div>
</div>
       )
      }
     }