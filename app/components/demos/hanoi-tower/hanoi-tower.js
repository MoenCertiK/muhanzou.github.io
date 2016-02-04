import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Plate from './components/plate';
import TowerBoard from './containers/tower-board';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import hanoiReducer from './reducers/hanoi-reducer';

let store = createStore(hanoiReducer);

class HanoiTower extends Component {
  render() {
    let plates = this._generatePlates(3).map((i) => <Plate key={i.id} {...i} />);
    return (
      <Provider store={store}>
        <TowerBoard plates={plates} />
      </Provider>
    );
  }

  _generatePlates(count) {
    let plates = [];
    for(let i = 0; i < count; i++) {
      plates.push({
        id: i,
        index: i
      });
    }
    return plates;
  }
}

HanoiTower.propTypes = {

};

export default DragDropContext(HTML5Backend)(HanoiTower);
