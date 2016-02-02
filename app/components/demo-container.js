import React, { Component, PropTypes } from 'react';
import StartPage from './start-page';
import HanoiTower from './demos/hanoi-tower';

class DemoContainer extends Component {
  constructor(props) {
    super(props);
  }

  renderDemo(id) {
    let demo;
    switch(id) {
      case 0:
        demo = <StartPage />;
        break;
      case 1:
        demo = <HanoiTower />;
        break;
    }
    return demo;
  }

  render() {
    return (
      <div id="show-place">
        {this.renderDemo(this.props.curSection.id)}
      </div>
    );
  }
}

DemoContainer.propTypes = {
  curSection: PropTypes.object
};

export default DemoContainer;
