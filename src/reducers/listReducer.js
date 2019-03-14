export default (state = [], action) => {
  switch(action.type) {
    case 'CREATE_IMAGE':
      return [...state, {...action.payload, id:state.length + 1}];
    default:
    return state;
  }
}
