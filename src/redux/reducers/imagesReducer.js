import * as actionTypes from '../constants/imagesConstants';

export const imagesReducer = (state = { images: [], loading: false }, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_IMAGES_REQUEST:
        case actionTypes.GET_IMAGES_FAIL:
            return {
                loading: true,
                error: payload
            };

        case actionTypes.GET_IMAGES_SUCCESS:
            return {
                images: payload,
                loading: false
            };
        default:
            return state;
    }
};