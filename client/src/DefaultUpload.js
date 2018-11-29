import React, {Component} from 'react'
import Dropzone from 'react-dropzone'


class DefaultUpload extends Component {
    constructor() {
      super()
      this.state = { files: [] }
    }


      setBackgroundImage(files){
        
    
          // var reader = new FileReader();
    
          // reader.onload = function (files) {
            document.body.style.backgroundImage = 'url(' + files + ')';
          // };
    
          // reader.readAsDataURL(files);
      
      }


  
    onDrop(files) {
      this.setState({
        files
      });
      this.setBackgroundImage(files)
    }
  
    onCancel() {
      this.setState({
        files: []
      });
    }
  
    render() {
      return (
        <section>
          <div style={{backgroundImage : `url('${this.state.files}')`}} className="dropzone">
            <Dropzone
              onDrop={this.onDrop.bind(this)}
              onFileDialogCancel={this.onCancel.bind(this)}
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