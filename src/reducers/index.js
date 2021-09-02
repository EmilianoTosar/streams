import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import streamsmReducer from './streamReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsmReducer
})