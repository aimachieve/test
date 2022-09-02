import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import stripe from './stripe';
import record from './record';
import admin from './admin';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  stripe,
  record,
  admin
});
