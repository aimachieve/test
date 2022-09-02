import api from '../utils/api';
import { setAlert } from './alert';
import {
  RU_PINATA_INFO,
  GET_PACKAGES,
  GET_PACKAGE,
  GET_COUPONS,
  GET_USERS,
  GET_ADMIN_RECORDS,
  GET_TOP_HOLDERS
} from './types';

export const updateInfo = (data) => dispatch => {
  dispatch({
    type: RU_PINATA_INFO,
    payload: data
  });
};

// Create a new package
export const createPackage = data => async dispatch => {
  const res = await api.post('/admin/package', data);

  dispatch({
    type: GET_PACKAGES,
    payload: res.data
  });

  dispatch(setAlert('New Package Created', 'success'));
};

// Get packages
export const getPackages = () => async dispatch => {
  const res = await api.get('/admin/packages');

  dispatch({
    type: GET_PACKAGES,
    payload: res.data
  });
};

// Get packages
export const getPackageById = (id) => async dispatch => {
  const res = await api.get(`/admin/package/${id}`);

  dispatch({
    type: GET_PACKAGE,
    payload: res.data
  });
};

// Delete package 
export const deletePackage = id => async dispatch => {
  const res = await api.delete(`/admin/package/${id}`);

  dispatch({
    type: GET_PACKAGES,
    payload: res.data
  });

  dispatch(setAlert('Package Removed', 'success'));
};


// Create a new coupon
export const createCoupon = data => async dispatch => {
  const res = await api.post('/admin/coupon', data);

  dispatch({
    type: GET_COUPONS,
    payload: res.data
  });

  dispatch(setAlert('New Coupon Created', 'success'));
};

// Get coupons
export const getCoupons = () => async dispatch => {
  const res = await api.get('/admin/coupon');

  dispatch({
    type: GET_COUPONS,
    payload: res.data
  });
};

// Delete coupons 
export const deleteCoupon = id => async dispatch => {
  const res = await api.delete(`/admin/coupon/${id}`);

  dispatch({
    type: GET_COUPONS,
    payload: res.data
  });

  dispatch(setAlert('Coupon Removed', 'success'));
};

// Get Users
export const getUsers = () => async dispatch => {
  const res = await api.get('/admin/users');

  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};

// Get Users by project model
export const getRecords = () => async dispatch => {
  const res = await api.get('/admin/records');

  dispatch({
    type: GET_ADMIN_RECORDS,
    payload: res.data
  });
};

// Get Top hoder
export const getTopHolders = () => async dispatch => {
  const res = await api.get('/admin/topHolders');

  dispatch({
    type: GET_TOP_HOLDERS,
    payload: res.data
  });
};
