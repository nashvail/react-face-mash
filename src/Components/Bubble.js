import React, { Component, PropTypes } from 'react';

class Bubble extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	if(this.props.visible) {
	    return (
        <div className="bubbleContainer">
  	      <div className="bubble">{this.props.text}</div>  
        </div>
	    );
  	} else {
  		return null;
  	}
  }
}

export default Bubble;
