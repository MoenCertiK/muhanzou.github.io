import React, { PropTypes } from 'react';
import Plate from './plate';
import { ItemTypes } from '../constants/item-types';
import { DropTarget } from 'react-dnd';

const towerTarget = {
  drop(props, monitor) {
    console.log('drop', props);
    console.log(monitor);
    props.onPlateDrop(monitor.getItem().index, monitor.getItem().from);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const Tower = ({ plates, onPlateDrop, connectDropTarget, isOver, position, className }) => {
  let curPlates = plates.map((p) => {
    let className = "plate " + `size-${p}`;
    return <Plate key={p} location={position} className={className} index={p} />;
  });

  return connectDropTarget(
    <ul className={className}>
      {curPlates}
    </ul>
  );
};

Tower.proptypes = {
  plates: PropTypes.array,
  onPlateDrop: PropTypes.func,
  className: PropTypes.string
}

export default DropTarget(ItemTypes.PLATE, towerTarget, collect)(Tower);
