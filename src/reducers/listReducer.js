export default (state = [], action) => {
  switch(action.type) {
    case 'CREATE_IMAGE':
      return [{...action.payload, id:state.length + 1}, ...state];
    case 'FETCH_LIST':
      return [...state]
    default:
      return state;
  }
}
