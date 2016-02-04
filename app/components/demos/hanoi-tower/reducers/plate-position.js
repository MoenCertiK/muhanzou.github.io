const platePosition = (state={src: [0,1,2], tmp: [], dist: [], status: "pending"}, action) => {
  switch (action.type) {
    case 'DROP_PLATE':
      if (action.from == action.position) {
        return state;
      }
      if (action.index != state[action.from][0]) {
        return state;
      }
      if (state[action.position].length && action.index > state[action.position][0]) {
        return state;
      }
      let newState = {
        ...state,
        [action.from]: state[action.from].slice(1),
        [action.position]: [action.index, ...state[action.position]],
        status: "pending"
      };
      if (JSON.stringify(newState.dist) == JSON.stringify([0,1,2])) {
        newState = {
          ...newState,
          status: "success"
        };
      }

      return newState;
    default:
      return state;
  }
};

export default platePosition;

