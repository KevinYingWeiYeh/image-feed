import React from 'react';
import InputImage from './InputImage';
import DisplayImage from './DisplayImage';

class ImageFeed extends React.Component {
  render() {
    return(
      <div className='ui container'>
        <InputImage />
        <DisplayImage />
      </div>
    )
  }
}

export default ImageFeed;
