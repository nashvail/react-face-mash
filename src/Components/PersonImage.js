import React, { Component, PropTypes } from 'react';

class PersonImage extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	var style = {
			backgroundImage: 'url(' + this.props.image + ')'
  	}
    return (
			<div style={style} className={this.props.flipping ? 'personImage personFlipping' :  'personImage'}></div>           
    );
  }
}

export default PersonImage;
