import * as actionTypes from "../actions/actionTypes";

const initialState = {
  reviews: []
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_REVIEW:
      return{
        ...state,
        reviews: action.payload
      }  
    default:
      return state;
  }
}
