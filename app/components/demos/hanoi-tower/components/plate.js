import React, { PropTypes } from 'react';
import { ItemTypes } from '../constants/item-types';
import { DragSource } from 'react-dnd';

const plateSource = {
  beginDrag(props) {
    console.log('dragging', props);
    return {
      index: props.index,
      from: props.location
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Plate = ({ index, onPlateClick, connectDragSource, isDragging }) => {
  return connectDragSource(
    <li className={"plate " + `size-${index}`}
      onClick={onPlateClick}
      style={{opacity: isDragging ? 0.5 : 1}}>
    </li>
  );
};

Plate.proptypes = {
  index: PropTypes.number,
  onPlateClick: PropTypes.func,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.PLATE, plateSource, collect)(Plate);
