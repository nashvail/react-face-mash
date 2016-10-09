import React, { Component, PropTypes } from 'react';

class PersonName extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
			<div className="personName">
				{this.props.name}
			</div>            
    );
  }
}

export default PersonName;
