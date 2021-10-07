import {
    LOAD_IMAGES
  } from '../common/constants';
  
  const initialState = {
    images: []
  };
  
  const images = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_IMAGES:
        return {
          ...state.list,
          images: action.payload,
        };
      default:
        return state
    }
  }
  
  export default images;