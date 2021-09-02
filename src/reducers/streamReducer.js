import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM 
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload};
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload};
    case DELETE_STREAM:
      const newState = { ...state };
      delete newState[action.payload];
      return newState; 
    case FETCH_STREAMS:
      const newObj = {};
      action.payload.forEach(element => {
        newObj[element.id] = element;
      });
      return { ...state, ...newObj };
    default:
      return state;
  }
}