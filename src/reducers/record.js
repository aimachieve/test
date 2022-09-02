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
  RECORD_ERROR
} from '../actions/types';

const initialState = {
  types: [],
  holders: [],
  record: null,
  records: [],
  loading: true,
  error: {}
};

function recordReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TYPES:
      return {
        ...state,
        types: payload,
        loading: false
      };
    case GET_HOLDERS:
      return {
        ...state,
        holders: payload,
        loading: false
      };
    case GET_RECORD:
      return {
        ...state,
        record: payload,
        loading: false
      };
    case GET_RECORDS:
      return {
        ...state,
        records: payload,
        loading: false
      };
    case RECORD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default recordReducer;
