import {
    LOAD_IMAGES
  } from '../common/constants';
  
  export const getImages = () => async dispatch => {
      const imageIesponse = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json');
      const images = await imageIesponse.json();
      dispatch({ type: LOAD_IMAGES, payload: images });
  };