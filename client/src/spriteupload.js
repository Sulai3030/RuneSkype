import React, {Component} from 'react'
import $ from 'jquery'
import Axios from 'axios';



class SpriteUpload extends Component {
    state = {
        url : ''
    }

    forceStop(event) {
        event.preventDefault()
    }

    handleChange(event) {
        this.setState({url: event.target.value});
      }
      

      urlSubmit(event) {
          event.preventDefault()
          $('.dot').css('background-image', 'url(' + this.state.url + ')')
          let url = this.state.url;
          Axios.post('/api/sprite', url)
          this.setState({
            url : ''
        })
      }


  render() {
    return (
     <div>
         <span className='join-leave-input'>
         <input
         type='text'
         placeholder="Link Sprite Image URL"
         value={this.state.url}
         onClick={this.forceStop.bind(this)}
         onChange={this.handleChange.bind(this)}
         onSubmit={this.urlSubmit.bind(this)}
         />
         <button onClick={this.urlSubmit.bind(this)} className='btn btn-danger'>Submit</button>
         </span>
     </div>
    );
  }
}
  
export default SpriteUpload