import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import $ from 'jquery'
import axios from 'axios'


class DefaultUpload extends Component {
    constructor() {
      super()
      this.state = { files: [] }
    }

    onDrop= acceptedFiles => {
      acceptedFiles.forEach(file => {
          const reader = new FileReader();
          reader.onload = () => {
              const fileAsBinaryString = reader.result;
              axios.post('/api/photo', fileAsBinaryString)
          };
          reader.onabort = () => console.log('file reading was aborted');
          reader.onerror = () => console.log('file reading has failed');
   
          reader.readAsBinaryString(file);
          axios.post('/api/photo', reader.readAsBinaryString(file));
          axios.post('/api/photo', file)
      });
  }
      
  
  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            
          >
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}
  
export default DefaultUpload