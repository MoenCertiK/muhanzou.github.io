import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeftNav from './components/left-nav';
import DemoContainer from './components/demo-container'
import { leftSections } from './constants/statics';

require('./styles/main.scss');

class App extends Component {
  constructor() {
    super();
    this.state = {
      curSection: leftSections[0]
    };
    this._bind('handleLeftSectionClick');
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  render() {
    return (
      <div>
        <nav id="left-nav">
          <a id="back-home-arrow" href="/index.html">&#x2190;</a>
          <LeftNav sections={leftSections}
            curSectionID={this.state.curSection.id}
            callbacks={{ onClick: this.handleLeftSectionClick }} />
        </nav>
        <DemoContainer curSection={this.state.curSection} />
      </div>
    );
  }

  handleLeftSectionClick(section) {
    this.setState({
      curSection: section
    });
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
