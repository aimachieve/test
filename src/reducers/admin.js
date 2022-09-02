import {
  RU_PINATA_INFO,
  ADMIN_ERROR,
  GET_PACKAGES,
  GET_COUPONS,
  GET_USERS,
  GET_ADMIN_RECORDS,
  GET_TOP_HOLDERS,
  GET_PACKAGE
} from '../actions/types';

const initialState = {
  pinata_key: '61228e75429061894220',
  pinata_secret: 'ac10bfc43c9d8540153674d2612400c821a543ee6b60be710b67bde0b3d3c1ad',
  packages: [],
  coupons: [],
  users: [],
  records: [],
  top_holders: [],
  current_package: null
};

function adminReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RU_PINATA_INFO:
      return {
        ...state,
        pinata_key: payload.pinata_key,
        pinata_secret: payload.pinata_secret
      };
    case GET_PACKAGES:
      return {
        ...state,
        packages: payload,
      };
    case GET_COUPONS:
      return {
        ...state,
        coupons: payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_ADMIN_RECORDS:
      return {
        ...state,
        records: payload,
      };
    case GET_TOP_HOLDERS:
      return {
        ...state,
        top_holders: payload,
      };
    case GET_PACKAGE:
      return {
        ...state,
        current_package: payload,
      };
    default:
      return state;
  }
}

export default adminReducer;
