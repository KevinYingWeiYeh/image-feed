import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../actions'

class DisplayImage extends React.Component {

  renderImages() {
    /* eslint react/prop-types: 0 */
    if(this.props.list.length === 0) {
      return null;
    } else {
      return this.props.list.map(list => {
        return (
          <div className="item" key={list.id}>
            <div> {list.title}</div>
            <img src={`${list.url}`} alt="Smiley face" height="42" width="42" />
          </div>
        )
      })
    }
  }

  render() {
    return(
      <div>
        <div className="ui celled list">{this.renderImages()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { fetchList })(DisplayImage);
