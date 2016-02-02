import React, { Component, PropTypes } from 'react';

class DemoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="show-place">
        {this.props.curSection.title}
      </div>
    );
  }
}

DemoContainer.propTypes = {
  curSection: PropTypes.object
};

export default DemoContainer;
