import React from 'react';
import { connect } from 'react-redux';
import { createImage } from '../actions'

class InputImage extends React.Component {
  onSubmit = formValues => {
    /* eslint react/prop-types: 0 */
    formValues.preventDefault();
    this.props.createImage(formValues.target)
    formValues.target.title.value = "";
    formValues.target.url.value = "";
  }

  render() {
    return(
      <form onSubmit={this.onSubmit} className='ui form '>
        <div className='ui action'>
          <input name="url" type="text" placeholder="Enter URL"/>
          <div className='ui action input fluid'>
            <input name="title" type="text" placeholder="Title"/>
            <button className='ui button' type="submit">New Post</button>
          </div>
        </div>
      </form>
    )
  }
}

export default connect(null, { createImage })(InputImage);
