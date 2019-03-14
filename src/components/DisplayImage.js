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
          <div className="ui placeholder segment fluid" key={list.id} style={{backgroundColor: 'white'}}>
            <div className='ui center aligned fluid header' >{list.title}</div>
            <img src={`${list.url}`} alt={`${list.title}`}className="ui image fluid" />
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
