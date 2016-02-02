import React, { Component, PropTypes } from 'react';

class LeftNav extends Component {
  render() {
    let navs = this.props.sections.map((nav) => {
      return (<li key={nav.id}
        onClick={this.props.callbacks.onClick.bind(null, nav)}
        className={nav.id == this.props.curSectionID ? 'active' : null}>
        {nav.title}
      </li>);
    });

    return (
      <ul>{navs}</ul>
    );
  }
}

LeftNav.propTypes = {
  sections: PropTypes.array,
  curSectionID: PropTypes.number,
  callbacks: PropTypes.object
};

export default LeftNav;
