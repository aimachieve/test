import api from '../utils/api';
import { setAlert } from './alert';

import {
  CREATE_TYPE,
  GET_TYPES,
  CREATE_HOLDER,
  GET_HOLDERS,
  UPDATE_TYPE,
  CREATE_RECORD,
  GET_RECORD,
  GET_RECORDS,
  UPDATE_RECORD,
  RECORD_ERROR,
  USER_LOADED
} from './types';

// Create a new type
export const createType = type => async dispatch => {
  try {
    const res = await api.post('/record/type', type);

    dispatch({
      type: GET_TYPES,
      payload: res.data
    });

    dispatch(setAlert('New Type Created', 'success'));
  } catch (err) {
    dispatch({
      type: RECORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create a new type
export const createHolder = data => async dispatch => {
  try {
    const res = await api.post('/record/holder', data);
    console.log(res.data)

    dispatch({
      type: GET_HOLDERS,
      payload: res.data
    });

    dispatch(setAlert('New Holder Created', 'success'));
  } catch (err) {
    dispatch({
      type: RECORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create a new type
export const createRecord = data => async dispatch => {
  console.log("createRecord=>", data)
  try {
    const res = await api.post('/record', data);

    dispatch({
      type: GET_RECORDS,
      payload: res.data.records
    });
    
    dispatch({
      type: USER_LOADED,
      payload: res.data.updatedUser
    });

    dispatch(setAlert('New Record Created', 'success'));
  } catch (err) {
    dispatch({
      type: RECORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get types
export const getTypes = () => async dispatch => {
  try {
    const res = await api.get('/record/types');

    dispatch({
      type: GET_TYPES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RECORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get holders
export const getHolders = () => async dispatch => {
  try {
    const res = await api.get('/record/holders');

    dispatch({
      type: GET_HOLDERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RECORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update Current Type
export const updateType = data => async dispatch => {
  try {
    const res = await api.put(`/record/type/${data.id}`, data);

    dispatch({
      type: GET_TYPES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RECORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get current users RECORD
export const getCurrentRecord = () => async (dispatch) => {
  try {
    const res = await api.get('/record/me');

    dispatch({
      type: GET_RECORD,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RECORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all RECORDs
export const getRecords = () => async (dispatch) => {
  try {
    const res = await api.get('/record');

    dispatch({
      type: GET_RECORDS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RECORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get RECORD by ID
export const getRecordById = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/record/user/${userId}`);

    dispatch({
      type: GET_RECORD,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RECORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Experience
export const addHolder = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post('/record/holder', formData);

    dispatch({
      type: GET_HOLDERS,
      payload: res.data
    });

    dispatch(setAlert('Holder Added', 'success'));

    window.location.replace('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: RECORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Type
export const addType = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post('/record/type', formData);

    dispatch({
      type: GET_TYPES,
      payload: res.data
    });

    dispatch(setAlert('Type Added', 'success'));

    window.location.replace('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: RECORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

