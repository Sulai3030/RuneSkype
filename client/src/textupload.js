import React, {Component} from 'react'
import $ from 'jquery'
import Axios from 'axios';



class BackgroundUpload extends Component {
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
          $('body').css('background-image', 'url(' + this.state.url + ')')
          let url = this.state.url;
          Axios.post('/api/background', url)
      }


  render() {
    return (
     <div>
         <span className='join-leave-input'>
         <input
         type='text'
         placeholder="Link Background Image URL"
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
  
export default BackgroundUpload