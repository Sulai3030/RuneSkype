import React, {Component} from 'react'
import $ from 'jquery'
import axios from 'axios';



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
      

      BGurlSubmit(event) {
        event.preventDefault()
          $('body').css('background-image', 'url(' + this.state.url + ')')
          let bgUrl = this.state.url;
          setTimeout(() => {
            axios.post('/api/background/', bgUrl)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          }, 1000)
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
         placeholder="Link Background Image URL"
         value={this.state.url}
         onClick={this.forceStop.bind(this)}
         onChange={this.handleChange.bind(this)}
         
         />
         <button onClick={this.BGurlSubmit.bind(this)}  className='btn btn-danger'>Submit</button>
         </span>
     </div>
    );
  }
}
  
export default BackgroundUpload