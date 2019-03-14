import React from 'react';
import { connect } from 'react-redux';
import { createImage } from '../actions'

class InputImage extends React.Component {
  renderError({ error, touched }) {
    if (touched && error ) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    }
  }

  onSubmit = formValues => {
    formValues.preventDefault();
    this.props.createImage(formValues.target)
  }

  render() {
    return(
      <form onSubmit={this.onSubmit} className='ui form error'>
        <input name="url" type="text" placeholder="Enter URL"/>
        <input name="title" type="text" placeholder="Title"/>
        <button className='ui button primary' type="submit">Submit</button>
      </form>
    )
  }
}

export default connect(null, { createImage })(InputImage);
