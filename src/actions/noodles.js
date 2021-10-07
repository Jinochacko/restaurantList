import {
  GET_NOODLES,
  GET_NOODLES_ERROR,
  GET_NOODLES_SUCCESS
} from '../common/constants';

export const getNoodles = () => async dispatch => {
  dispatch({ type: GET_NOODLES });
  try {
    const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json');
    const noodles = await response.json();
    dispatch({ type: GET_NOODLES_SUCCESS, payload: noodles });
  } catch (error) {
    dispatch({ type: GET_NOODLES_ERROR });
  }
};