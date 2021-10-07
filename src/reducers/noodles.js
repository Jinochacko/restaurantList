import {
  GET_NOODLES,
  GET_NOODLES_ERROR,
  GET_NOODLES_SUCCESS
} from '../common/constants';

const initialState = {
  list: {
    data: [],
    isFetching: false,
  }
};

const noodles = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOODLES:
      return {
        list: {
          ...state.list,
          isFetching: true
        }
      };
    case GET_NOODLES_SUCCESS:
      return {
        list: {
          ...state.list,
          data: action.payload,
          isFetching: false
        }
      };
    case GET_NOODLES_ERROR:
      return {
        list: {
          ...state.list,
          data: [],
          isFetching: false
        }
      };
    default:
      return state
  }
}

export default noodles;