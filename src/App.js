import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class App extends Component {

  onDrop = (files) => {
    files.forEach((file, index)=> {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'u6bzb6i1');

      axios.post("https://api.cloudinary.com/v1_1/ecos/video/upload", formData,
        {headers: {}}
      ).then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('response cloudinary success', response.data)
        } else {
          console.log('response error!', response)
        }
      }).catch(error => { 
        console.log('request failed', error); 
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Dropzone onDrop={this.onDrop} >
          <div className="dropzone-hover-modal">
            <h4 className="dropzone-prompt">Drop Your Files Here</h4>
          </div>
        </Dropzone>
      </div>
    );
  }
}

export default App;
