import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import listReducer from './listReducer'

export default combineReducers({
  // form: formReducer,
  list: listReducer
})
