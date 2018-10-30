const initState = {
  test: 0
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case 'TEST':
      return { ...state, test: action.data };
    default:
      return state;
  }
}
