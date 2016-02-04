import React, { PropTypes, Component } from 'react';
import Tower from '../components/tower.js';
import { connect } from 'react-redux';

class TowerBoard extends Component {
  render() {
    return (
      <div>
        <div className="tower-board">
          <Tower key={0} position={"src"} className={"tower src"} plates={this.props.platePosition['src']}
            onPlateDrop={this.props.onPlateDrop.bind(null, 'src')}/>
          <Tower key={1} position={"tmp"} className={"tower tmp"} plates={this.props.platePosition['tmp']}
            onPlateDrop={this.props.onPlateDrop.bind(null, 'tmp')}/>
          <Tower key={2} position={"dist"} className={"tower dist"} plates={this.props.platePosition['dist']}
            onPlateDrop={this.props.onPlateDrop.bind(null, 'dist')} />
        </div>
        <p id="game-status">Your status: <b>{this.props.platePosition.status}</b></p>
      </div>
    );
  }
}

TowerBoard.propTypes = {
  onPlateClick: PropTypes.func,
  plates: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    platePosition: state.platePosition
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlateDrop: (pos, index, from) => {
      dispatch({type: 'DROP_PLATE', position: pos, index: index, from: from});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TowerBoard);
